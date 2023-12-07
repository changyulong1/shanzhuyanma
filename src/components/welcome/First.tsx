import { defineComponent } from 'vue'
import icon from '../../assets/icons/pig.svg'
import s from './Welcome.module.scss'
export const First = () => {
    return (
        <div class={s.wrapper}>
            <div class={s.code}>
                <svg>
                    <use xlinkHref='#pig'></use>
                </svg>
                <h2>每日提醒<br />不会遗漏每一笔账单</h2>
            </div>
        </div>
    )
}
First.displayName = 'First'