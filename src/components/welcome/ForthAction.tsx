import { RouterLink } from 'vue-router'
import { SkipFeatures } from '../../shared/SkipFeatures'
import s from './Welcome.module.scss'
export const ForthAction = () => {
    return <>
        <div class={s.actions}>
            <SkipFeatures class={s.fake} />
            <RouterLink to='/welcome/2'>下一页</RouterLink>
            <SkipFeatures />
        </div>
    </>
}
ForthAction.displayName = 'ForthAction'