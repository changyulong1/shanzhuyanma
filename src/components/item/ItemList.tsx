import { defineComponent, ref } from 'vue'
import { MainLayout } from '../../layouts/MainLayout'
import { Icon } from '../../shared/Icon'
import { Tab, Tabs } from '../../shared/Tabs'
import s from './ItemList.module.scss'
export const ItemList = defineComponent({
    setup(props, context) {
        const x = ref('本月')
        return () => <>
            <MainLayout>
                {{
                    title: () => '山竹记账',
                    icon: () => <Icon name='menu' onClick={() => { }} />,
                    default: () => <>
                        <Tabs classPrefix='customTabs' v-model:selected={x.value}>
                            <Tab name='本月'>
                                555sss
                            </Tab>
                            <Tab name='上月'>
                                上月
                            </Tab>
                            <Tab name='今年'>
                                今年
                            </Tab>
                            <Tab name='自定义时间'>
                                自定义时间
                            </Tab>
                        </Tabs>
                    </>
                }}
            </MainLayout>
        </>
    }
})
