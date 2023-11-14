import { defineComponent } from "vue";
import { RouterLink, RouterView } from "vue-router";
import icon from '../assets/icons/mangosteen.svg'
import s from './Welcome.module.scss'
export const welcome = defineComponent({
    setup() {
        return () => (
            <div class={s.wrapper}>
                <header>
                    <img src={icon} />
                    <h1>山竹记账</h1>
                </header>
                <main><RouterView /></main>
            </div>
        )
    }
})