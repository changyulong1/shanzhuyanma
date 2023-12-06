import { defineComponent } from 'vue'
import s from './StartPages.module.scss'
export const StartPages = defineComponent({
    setup() {
        return () => (
            <div class={s.start}>
                StartPages
            </div>

        )
    }
})