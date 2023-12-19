import { defineComponent, ref } from 'vue'
import { RouterLink } from 'vue-router'
import { MainLayout } from '../layouts/MainLayout'
import { Button } from '../shared/Button'
import { Center } from '../shared/Center'
import { FloatButton } from '../shared/FloatButton'
import { Icon } from '../shared/Icon'
import { Overlay } from '../shared/Overlay'
import s from './StartPages.module.scss'
export const StartPages = defineComponent({
    setup() {
        const refOverlayVisible = ref(false)
        const onClickMenu = () => {
            refOverlayVisible.value = !refOverlayVisible.value
        }
        return () => (
            <MainLayout>
                {{
                    title: () => '山竹记账',
                    icon: () => <Icon name='menu' onClick={onClickMenu} class={s.navIcon}></Icon>,
                    default: () => <>
                        <Center class={s.pig_wrapper}>
                            <Icon name='pig' class={s.pig} />
                        </Center>
                        <div class={s.button_wrapper}>
                            <RouterLink to='/items/create'>
                                <Button class={s.button}>开始记账</Button>
                            </RouterLink>

                        </div>
                        <RouterLink to='/items/create'>
                            <FloatButton iconName='add'></FloatButton>
                        </RouterLink>
                        {
                            refOverlayVisible.value &&
                            <Overlay onClose={() => { refOverlayVisible.value = false }} />
                        }
                    </>
                }}
            </MainLayout>
        )
    }
})