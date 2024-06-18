import { defineComponent, onMounted, PropType, reactive, ref } from 'vue'
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
        const formData = reactive({
            kind: '支出',
            tags_id: [],
            amount: 0,
            happen_at: new Date().toISOString(),
        })
        return () => (
            <MainLayout>
                {{
                    title: () => '记一笔',
                    icon: () => <Icon name='left' class={s.navIcon}></Icon>,
                    default: () => <>
                        <div class={s.wrapper}>
                            <div>
                                <span> ID: {formData.tags_id}</span>
                                <span> 时间：{formData.happen_at}</span>
                                <span>金钱：{formData.amount}</span>
                            </div>
                            <Tabs v-model:selected={formData.kind} class={s.tabs}>
                                <Tab name='支出' >
                                    <Tags kindL='expenses' v-model:selected={formData.tags_id[0]} />
                                </Tab>
                                <Tab name='收入'>
                                    <Tags kindL='income' v-model:selected={formData.tags_id[0]} />
                                </Tab>
                            </Tabs>
                            <div class={s.inputPad_warp} >
                                <InputPad v-model:happenAt={formData.happen_at}
                                    v-model:amount={formData.amount}
                                />
                            </div>
                        </div>
                    </>
                }}
            </MainLayout>
        )
    }
})
