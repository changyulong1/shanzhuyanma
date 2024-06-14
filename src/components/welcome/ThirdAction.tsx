import { RouterLink } from 'vue-router'
import { SkipFeatures } from '../../shared/SkipFeatures'
import s from './Welcome.module.scss'
const onclick = () => {
    localStorage.setItem('skipFeatures', 'yes')
}
export const ThirdAction = () => {
    return <>
        <div class={s.actions}>
            <SkipFeatures class={s.fake} />
            <span onClick={onclick}>
                <RouterLink to='/Start'>完成</RouterLink>
            </span>
            <SkipFeatures class={s.fake} />
        </div>
    </>
}

ThirdAction.displayName = 'ThirdAction'