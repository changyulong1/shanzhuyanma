import { defineComponent } from 'vue'
import { Button } from '../shared/Button'
import { FloatButton } from '../shared/FloatButton'
import s from './StartPages.module.scss'
export const StartPages = defineComponent({
    setup() {
        const go = () => {
            console.log(666)
        }
        return () => (
            <div>
                <div class={s.button_wrapper}>
                    <Button onClick={go} class={s.button}>开始记账</Button>
                </div>
                <FloatButton iconName='add'></FloatButton>
            </div>

        )
    }
})