import { Toast } from 'vant'
import { defineComponent, onMounted, ref } from 'vue'
import { RouterLink } from 'vue-router'
import { MainLayout } from '../layouts/MainLayout'
import { Button } from '../shared/Button'
import { Center } from '../shared/Center'
import { FloatButton } from '../shared/FloatButton'
import { Icon } from '../shared/Icon'
import { Overlay, OverlayIcon } from '../shared/Overlay'
import s from './StartPages.module.scss'
export const StartPages = defineComponent({
    setup(props, context) {
        return () => (
            <MainLayout>
                {{
                    title: () => '山竹记账',
                    icon: () => <OverlayIcon />,
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
                    </>
                }}
            </MainLayout>
        )
    }
})