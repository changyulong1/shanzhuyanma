import { computed, defineComponent, onMounted, PropType, ref } from 'vue'
import { Bars } from './Bars'
import s from './Charts.module.scss'
import { FormItem } from './Form'
import { http } from './http'
import { LineChart } from './LineChart'
import { PieChart } from './PieChart'
import { Time } from './time'
export const Charts = defineComponent({
    props: {
        startDate: {
            type: String as PropType<string>,
            required: false
        },
        endDate: {
            type: String as PropType<string>,
            required: false
        }
    },
    setup(props, context) {
        const kind = ref('expenses')
        return () => (
            <div class={s.wrapper}>
                <FormItem label='类型' type="select" options={[
                    { value: 'expenses', text: '支出' },
                    { value: 'income', text: '收入' }
                ]} v-model={kind.value} />
                <LineChart />
                <PieChart />
                <Bars />
            </div>
        )
    }
})