import { defineComponent } from 'vue'
import { RouterLink } from 'vue-router'
import s from './Welcome.module.scss'
export const FirstAction = defineComponent({
    setup() {
        return () => (
            <div class={s.actions}>
                <RouterLink class={s.fake} to='/start'>跳过</RouterLink>
                <RouterLink to='/welcome/3'>下一页</RouterLink>
                <RouterLink to='/start'>跳过</RouterLink>
            </div>
        )
    }
})