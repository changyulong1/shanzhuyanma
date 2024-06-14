import { RouterLink } from 'vue-router'
import { SkipFeatures } from '../../shared/SkipFeatures'
import s from './Welcome.module.scss'
export const SecondAction = () => {
    return <>
        <div class={s.actions}>
            <SkipFeatures class={s.fake} />
            <RouterLink to='/welcome/4'>下一页</RouterLink>
            <SkipFeatures />
        </div>
    </>
}
SecondAction.displayName = 'SecondAction'