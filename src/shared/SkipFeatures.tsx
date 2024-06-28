import { defineComponent } from 'vue'
import { RouterLink } from 'vue-router'
import s from './SkipFeatures.module.scss'
export const SkipFeatures = defineComponent({
    setup(props, context) {
        const onclick = () => {
            localStorage.setItem('skipFeatures', 'yes')
        }
        return () => (
            <span onClick={onclick}>
                <RouterLink to='/items'>跳过</RouterLink>
            </span>
        )
    }
})