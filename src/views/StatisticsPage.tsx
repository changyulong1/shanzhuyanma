import { defineComponent, onMounted, ref } from 'vue'
import { MainLayout } from '../layouts/MainLayout'
import { OverlayIcon } from '../shared/Overlay'
import s from './StatisticsPage.module.scss'
import * as echarts from 'echarts';
export const StatisticsPage = defineComponent({
    setup(props, context) {
        const chartDom = ref<HTMLDivElement>()
        onMounted(() => {
            if (chartDom.value === undefined) { return }
            var myChart = echarts.init(chartDom.value);
            var option;

            option = {
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
            };

            myChart.setOption(option);

        })

        return () => (
            <MainLayout>
                {{
                    title: () => '山竹记账',
                    icon: () => <OverlayIcon />,
                    default: () => (
                        <div>
                            <div >图标</div>
                            <div ref={chartDom} class={s.warp}></div>
                        </div>


                    )
                }}
            </MainLayout>
        )
    }
})