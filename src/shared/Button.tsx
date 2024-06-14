import { computed, defineComponent, PropType, ref } from "vue"
import s from './Button.module.scss'
export const Button = defineComponent({
    props: {
        onClick: {
            type: Function as PropType<(e: MouseEvent) => void>,
        },
        level: {
            type: String as PropType<'important' | 'normal' | 'danger'>,
            default: 'important'
        },
        type: {
            type: String as PropType<'submit' | 'button'>,
            default: 'button'
        },
        disabled: {
            type: Boolean as PropType<true | false>,
            default: false
        },
        autoSelfDisabled: {
            type: Boolean,
            default: false
        }

    },
    setup(props, context) {
        const selfDisabled = ref(false)
        const _disabled = computed(() => {
            if (props.autoSelfDisabled === false) {
                return props.disabled
            }
            if (selfDisabled.value) {
                return true
            } else {
                return props.disabled
            }
        })
        const onclick = () => {
            props.onClick?.()
            selfDisabled.value = true
            setInterval(() => {
                selfDisabled.value = false
            }, 100)
        }
        return () => (
            <button disabled={_disabled.value} type={props.type} onClick={onclick} class={[s.button, s[props.level]]}>
                {context.slots.default?.()}
            </button>
        )
    }
})