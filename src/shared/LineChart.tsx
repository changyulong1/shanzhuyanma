import { defineComponent, onMounted, ref } from 'vue'
import s from './LineChart.module.scss'
import * as echarts from 'echarts';
export const LineChart = defineComponent({
    setup(props, context) {
        const myDo = ref<HTMLDivElement>()
        let chart: echarts.ECharts | undefined = undefined
        onMounted(() => {
            if (myDo.value === undefined) { return }
            chart = echarts.init(myDo.value);
            // 绘制图表
            chart.setOption({
                grid: [
                    { left: 0, top: 0, right: 0, bottom: 20 }
                ],
                xAxis: {
                    type: 'category',
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    {
                        data: [150, 230, 224, 218, 135, 147, 260],
                        type: 'line'
                    }
                ]
            });

        })

        return () => (
            // <div ref={myDo} class={s.wrapper}></div>
            <div ref={myDo} class={s.wrapper}></div>
        )
    }
})