import { defineComponent, PropType } from 'vue'
import s from './Icon.module.scss'
export type IconName = 'add' | 'chart' | 'clock' | 'cloud' | 'mangosteen' | 'pig'
export const Icon = defineComponent({
    props: {
        name: {
            type: String as PropType<IconName>,
            required: true,
        }
    },
    setup(Props, context) {
        return () => (
            <svg class={s.icon}>
                <use xlinkHref={'#' + Props.name}></use>
            </svg>
        )
    }
})