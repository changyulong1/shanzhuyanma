import { defineComponent, PropType } from 'vue'
import s from './Icon.module.scss'
export type IconName = 'add' | 'chart' | 'clock' | 'cloud' |
    'mangosteen' | 'pig' | 'menu' | 'charts' | 'notify' | 'export'
export const Icon = defineComponent({
    props: {
        name: {
            type: String as PropType<IconName>,
            required: true,
        },
        onClick: {
            type: Function as PropType<(e: MouseEvent) => void>
        }
    },
    setup(Props, context) {
        return () => (
            <svg class={s.icon} onClick={Props.onClick}>
                <use xlinkHref={'#' + Props.name}></use>
            </svg>
        )
    }
})