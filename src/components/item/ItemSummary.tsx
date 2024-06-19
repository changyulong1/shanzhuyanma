import { time } from 'echarts'
import { defineComponent, onMounted, PropType, ref } from 'vue'
import { FloatButton } from '../../shared/FloatButton'
import { http } from '../../shared/http'
import s from './ItemSummary.module.scss'
export const ItemSummary = defineComponent({
    props: {
        startDate: {
            type: String as PropType<string>,
            required: true
        },
        endDate: {
            type: String as PropType<string>,
            required: true
        }
    },
    setup(props, context) {
        const items = ref<Item[]>([])
        const hasShow = ref(false)
        const page = ref(0)
        const fetchItems = async () => {
            const response = await http.get<Resources<Item>>('/items', {
                happen_after: props.startDate,
                happen_before: props.endDate,
                page: page.value,
                _mock: 'itemIndex'

            })
            const { resources, pager } = response.data
            items.value?.push(...resources)
            hasShow.value = (pager.page - 1) * pager.per_page + resources.length < pager.count
            page.value += 1
        }
        onMounted(fetchItems)
        return () => (
            <div class={s.wrapper}>
                {
                    items.value ? (
                        <>
                            <ul class={s.tota}>
                                <li><span>收入</span><span>128</span></li>
                                <li><span>支出</span><span>99</span></li>
                                <li><span>净收入</span><span>39</span></li>
                            </ul>
                            <ol class={s.list}>
                                {items.value.map(item => (
                                    <li>
                                        <div class={s.sign}>
                                            <span>{item.tags_id[0]}</span>
                                        </div>
                                        <div class={s.text}>
                                            <div class={s.tagAndAmount}>
                                                <span class={s.tag}>{item.tags_id[0]}</span>
                                                <span class={s.amount}>￥{item.amount}</span>
                                            </div>
                                            <div class={s.time}>
                                                {item.happen_at}
                                            </div>
                                        </div>
                                    </li>

                                ))}
                            </ol>
                            <div class={s.more}>向下滑动加载更多</div>
                        </>
                    ) : (
                        <div class={s.context}>现在没有数据</div>
                    )
                }


                <FloatButton iconName='add' />
            </div>
        )
    }
})