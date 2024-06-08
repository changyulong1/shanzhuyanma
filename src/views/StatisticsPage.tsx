import { defineComponent, onMounted, ref } from 'vue'
import { TimeTabsLayout } from '../layouts/TimeTabsLayout';
import { Charts } from '../shared/Charts';
export const StatisticsPage = defineComponent({
    setup(props, context) {
        return () => (
            <TimeTabsLayout component={Charts} />
        )
    }
})