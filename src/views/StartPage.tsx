import { defineComponent, ref } from 'vue'
import { Button } from '../shared/Button'
import { Center } from '../shared/Center'
import { FloatButton } from '../shared/FloatButton'
import { Icon } from '../shared/Icon'
import { Navbar } from '../shared/Navbar'
import { Overlay } from '../shared/Overlay'
import s from './StartPages.module.scss'
export const StartPages = defineComponent({
    setup() {
        const refOverlayVisible = ref(false)
        const onClickMenu = () => {
            refOverlayVisible.value = !refOverlayVisible.value
        }
        return () => (
            <div>
                <Navbar>{
                    {
                        default: () => '山竹记账',
                        icon: () => <Icon name='menu' onClick={onClickMenu} class={s.navIcon}></Icon>
                    }
                }</Navbar>
                <Center class={s.pig_wrapper}>
                    <Icon name='pig' class={s.pig} />
                </Center>
                <div class={s.button_wrapper}>
                    <Button class={s.button}>开始记账</Button>
                </div>
                <FloatButton iconName='add'></FloatButton>
                {
                    refOverlayVisible.value &&
                    <Overlay onClose={() => { refOverlayVisible.value = false }} />
                }

            </div>

        )
    }
})