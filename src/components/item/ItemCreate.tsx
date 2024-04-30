import { defineComponent, PropType, ref } from 'vue'
import { MainLayout } from '../../layouts/MainLayout'
import { Icon } from '../../shared/Icon'
import { Tab, Tabs } from '../../shared/Tabs'
import { InputPad } from './InputPad'
import s from './ItemCreate.module.scss'
export const ItemCreate = defineComponent({
    props: {
        name: {
            type: String as PropType<string>
        }
    },
    setup(props, context) {
        const refKind = ref('支出')
        return () => (
            <MainLayout>
                {{
                    title: () => '山竹记账',
                    icon: () => <Icon name='left' class={s.navIcon}></Icon>,
                    default: () => <>
                        <Tabs v-model:selected={refKind.value}>
                            <Tab name='支出'>
                                icon 列表1
                            </Tab>
                            <Tab name='收入'>
                                icon 列表2
                            </Tab>
                        </Tabs>
                        <div class={s.inputPad_warp}>
                            <InputPad />
                        </div>
                    </>
                }}
            </MainLayout>
        )
    }
})
