import { defineComponent, onMounted, ref } from 'vue'
import { TimeTabsLayout } from '../layouts/TimeTabsLayout';
import { Charts } from '../shared/Charts';
export const StatisticsPage = defineComponent({
    setup(props, context) {
        return () => (
            <TimeTabsLayout rerenderOnSwitchTab={true} component={Charts}
                hideThisYear={true}
            />
        )
    }
})
// 优化打包 实现懒加载
export default StatisticsPage