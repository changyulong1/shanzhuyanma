import { RouterLink } from 'vue-router'
import { SkipFeatures } from '../../shared/SkipFeatures'
import s from './Welcome.module.scss'
export const FirstAction = () => {
    return <>
        <div class={s.actions}>
            <SkipFeatures class={s.fake} />
            <RouterLink to='/welcome/3'>下一页</RouterLink>
            <SkipFeatures />
        </div>
    </>
}
FirstAction.displayName = 'FirstAction'