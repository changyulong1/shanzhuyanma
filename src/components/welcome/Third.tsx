import { defineComponent } from 'vue'
import { RouterLink } from 'vue-router'
import icon from '../../assets/icons/cloud.svg'
import s from './Welcome.module.scss'
export const Third = defineComponent({
    setup() {
        return () => (
            <div class={s.wrapper}>
                <div class={s.code}>
                    <img src={icon} alt="" />
                    <h2>云备份<br />再也不怕数据丢失</h2>
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