import { defineComponent } from 'vue'
import { Button } from '../shared/Button'
import { Center } from '../shared/Center'
import { FloatButton } from '../shared/FloatButton'
import { Icon } from '../shared/Icon'
import s from './StartPages.module.scss'
export const StartPages = defineComponent({
    setup() {
        const go = () => {
            console.log(666)
        }
        return () => (
            <div>
                <main>nav</main>
                <Center class={s.pig_wrapper}>
                    <Icon name='pig' class={s.pig} />
                </Center>
                <div class={s.button_wrapper}>
                    <Button onClick={go} class={s.button}>开始记账</Button>
                </div>
                <FloatButton iconName='add'></FloatButton>
            </div>

        )
    }
})