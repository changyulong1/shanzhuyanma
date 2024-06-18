import { defineComponent, onMounted, PropType, ref } from 'vue'
import { MainLayout } from '../../layouts/MainLayout'
import { Button } from '../../shared/Button'
import { http } from '../../shared/http'
import { Icon } from '../../shared/Icon'
import { Tab, Tabs } from '../../shared/Tabs'
import { useTags } from '../../shared/useTags'
import { InputPad } from './InputPad'
import s from './ItemCreate.module.scss'
import { Tags } from './Tags'
export const ItemCreate = defineComponent({
    props: {
        name: {
            type: String as PropType<string>
        }
    },
    setup(props, context) {
        const refKind = ref('支出')
        const refTagId = ref<number>()
        const refHappenAt = ref<string>(new Date().toISOString())
        const refAmount = ref<number>(0)
        return () => (
            <MainLayout>
                {{
                    title: () => '记一笔',
                    icon: () => <Icon name='left' class={s.navIcon}></Icon>,
                    default: () => <>
                        <div class={s.wrapper}>
                            <div>
                                <span> ID: {refTagId.value}</span>
                                <span> 时间：{refHappenAt.value}</span>
                                <span>金钱：{refAmount.value}</span>
                            </div>
                            <Tabs v-model:selected={refKind.value} class={s.tabs}>
                                <Tab name='支出' >
                                    <Tags kindL='expenses' v-model:selected={refTagId.value} />
                                </Tab>
                                <Tab name='收入'>
                                    <Tags kindL='income' v-model:selected={refTagId.value} />
                                </Tab>
                            </Tabs>
                            <div class={s.inputPad_warp} >
                                <InputPad v-model:happenAt={refHappenAt.value}
                                    v-model:amount={refAmount.value}
                                />
                            </div>
                        </div>
                    </>
                }}
            </MainLayout>
        )
    }
})
