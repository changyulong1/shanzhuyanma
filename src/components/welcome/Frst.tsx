import { defineComponent } from 'vue'
import { RouterLink } from 'vue-router'
import icon from '../../assets/icons/pig.svg'
import s from './Welcome.module.scss'
export const First = defineComponent({
    setup() {
        return () => (
            <div class={s.wrapper}>
                <div class={s.code}>
                    <img src={icon} alt="" />
                    <h2>每日提醒<br />不会遗漏每一笔账单</h2>
                </div>
                <div class={s.actions}>
                    <RouterLink class={s.fake} to='/start'>跳过</RouterLink>
                    <RouterLink to='/welcome/2'>下一页</RouterLink>
                    <RouterLink to='/start'>跳过</RouterLink>
                </div>
            </div>

        )
    }
})