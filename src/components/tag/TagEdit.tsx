import { defineComponent, reactive } from 'vue'
import { useRoute } from 'vue-router'
import { MainLayout } from '../../layouts/MainLayout'
import { BackIcon } from '../../shared/BackIcon'
import { Button } from '../../shared/Button'
import { Icon } from '../../shared/Icon'
import { TagFrom } from '../../shared/TagForm'
import { Rules, validate } from '../../shared/validate'

import s from './Tag.module.scss'
export const TagEdit = defineComponent({

    setup(props, context) {
        const route = useRoute()
        const numberId = parseInt(route.params.id!.toString())
        if (Number.isNaN(numberId)) {
            return <div>用户不存在</div>
        }
        return () => <>
            <MainLayout>
                {{
                    title: () => '新建标签',
                    icon: () => <BackIcon />,
                    default: () => <>
                        <TagFrom id={numberId} />
                        <div class={s.actions}>
                            <Button level='danger' class={[s.removeTags]}>删除标签</Button>
                            <Button level='danger' class={[s.removeTagsAndItems]}>删除标签和记账</Button>
                        </div>
                    </>
                }}
            </MainLayout>
        </>
    }
})