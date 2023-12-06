import { defineComponent } from 'vue'
import icon from '../../assets/icons/clock.svg'
import s from './Welcome.module.scss'
export const Forth = () => {
    return <>
        <div class={s.wrapper}>
            <div class={s.code}>
                <img src={icon} alt="" />
                <h2>会挣钱<br />还要会省钱</h2>
            </div>
        </div>
    </>
}

Forth.displayName = 'Forth'