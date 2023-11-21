import { defineComponent } from 'vue'
import { RouterLink } from 'vue-router'
import icon from '../../assets/icons/clock.svg'
import s from './Welcome.module.scss'
export const Forth = defineComponent({
    setup() {
        return () => (
            <div class={s.wrapper}>
                <div class={s.code}>
                    <img src={icon} alt="" />
                    <h2>会挣钱<br />还要会省钱</h2>
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