import { defineComponent, PropType } from 'vue'
import { Button } from '../../shared/Button'
import { http } from '../../shared/http'
import { Icon } from '../../shared/Icon'
import { useTags } from '../../shared/useTags'
import s from './Tags.module.scss'
export const Tags = defineComponent({
    props: {
        kindL: {
            type: String as PropType<string>,
            required: true
        }
    },
    setup(props, context) {
        const { tags, hasMore, page, fetchTags } = useTags((page) => {
            return http.get<Resources<Tag>>('/tags', {
                kind: props.kindL,
                page: page + 1,
                _mock: 'tagIndex'
            })
        })
        return () => <>
            <div class={s.tags_wrapper}>
                <div class={s.tag}>
                    <div class={s.sign}>
                        <Icon name='add' class={s.createTag} />
                    </div>
                    <div class={s.name}>
                        新增
                    </div>
                </div>
                {tags.value.map(time => {
                    return <div class={[s.tag, s.selected]}>
                        <div class={s.sign}>
                            {time.sign}
                        </div>
                        <div class={s.name}>
                            {time.name}
                        </div>
                    </div>
                })}
            </div>
            <div class={s.more}>
                {
                    hasMore.value ?
                        <Button onClick={fetchTags}>加载更多</Button> :
                        <span>没有更多数据</span>
                }
            </div>
        </>
    }
})