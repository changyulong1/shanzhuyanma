import { defineComponent } from 'vue'
import { RouterLink } from 'vue-router'
import pig from '../../assets/icons/pig.svg'
import s from './First.module.scss'
export const First = defineComponent({
    setup() {
        return () => (
            <div class={s.wrapper}>
                <div class={s.code}>
                    <img src={pig} alt="" />
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