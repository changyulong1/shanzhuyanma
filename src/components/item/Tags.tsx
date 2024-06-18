import { defineComponent, PropType, ref } from 'vue'
import { Button } from '../../shared/Button'
import { http } from '../../shared/http'
import { Icon } from '../../shared/Icon'
import { Time } from '../../shared/time'
import { useTags } from '../../shared/useTags'
import s from './Tags.module.scss'
export const Tags = defineComponent({
    props: {
        kindL: {
            type: String as PropType<string>,
            required: true
        },
        selected: Number
    },
    emits: ['update:selected'],
    setup(props, context) {
        const tag = ref<Tag>()
        const { tags, hasMore, page, fetchTags } = useTags((page) => {
            return http.get<Resources<Tag>>('/tags', {
                kind: props.kindL,
                page: page + 1,
                _mock: 'tagIndex'
            })
        })

        const tagSelected = (time: Tag) => {
            context.emit('update:selected', time.id)
        }
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
                    return <div class={[s.tag, props.selected === time.id ? s.selected : '']}
                        onClick={() => { tagSelected(time) }}
                    >
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