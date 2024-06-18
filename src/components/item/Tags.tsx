import { defineComponent, PropType, ref } from 'vue'
import { RouterLink, useRouter } from 'vue-router'
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
        const timer = ref<number>()
        const currentTag = ref<HTMLDivElement>()
        const router = useRouter()
        const onLongPress = (tagId: Tag['id']) => {
            router.push(`/tags/${tagId}/edit/?kid=${props.kindL}&return_to=${router.currentRoute.value.fullPath}`)
        }
        const onTouchstart = (e: TouchEvent, tag: Tag) => {
            currentTag.value = e.currentTarget as HTMLDivElement
            timer.value = setTimeout(() => {
                onLongPress(tag.id)
            }, 500);
        }
        const onTouchend = (e: TouchEvent) => {
            clearTimeout(timer.value)
        }
        const onTouchmove = (e: TouchEvent) => {
            const pointedElement = document.elementFromPoint(e.touches[0].clientX, e.touches[0].clientY)
            if (currentTag.value != pointedElement &&
                currentTag.value?.contains(pointedElement) === false
            ) {
                clearTimeout(timer.value)
            }
        }
        return () => <>
            <div class={s.tags_wrapper} onTouchmove={onTouchmove}>
                <RouterLink to={`/tags/create?kind=${props.kindL}`} class={s.tag}>
                    <div class={s.sign}>
                        <Icon name='add' class={s.createTag} />
                    </div>
                    <div class={s.name}>
                        新增
                    </div>
                </RouterLink>

                {tags.value.map(time => {
                    return <div class={[s.tag, props.selected === time.id ? s.selected : '']}
                        onClick={() => { tagSelected(time) }}
                        onTouchstart={(e) => onTouchstart(e, time)}
                        onTouchend={onTouchend}
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