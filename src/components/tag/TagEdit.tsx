import { Dialog } from 'vant'
import { defineComponent, reactive } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { MainLayout } from '../../layouts/MainLayout'
import { BackIcon } from '../../shared/BackIcon'
import { Button } from '../../shared/Button'
import { http } from '../../shared/http'
import { Icon } from '../../shared/Icon'
import { TagFrom } from '../../shared/TagForm'
import { Rules, validate } from '../../shared/validate'
import s from './Tag.module.scss'
export const TagEdit = defineComponent({
    setup(props, context) {
        const route = useRoute()
        const router = useRouter()
        const numberId = parseInt(route.params.id!.toString())
        if (Number.isNaN(numberId)) {
            return <div>用户不存在</div>
        }
        const onError = () => {
            Dialog.confirm({
                title: '提示',
                message: '删除失败'
            })
        }
        const onDelete = async (options?: { withItems?: boolean }) => {
            await Dialog.confirm({
                title: '确认',
                message: '你真的要删除吗？'
            })
            await http.delete(`/tags/${numberId}`, {
                withItems: options?.withItems ? 'true' : 'false'
            }, { _autoLoading: true }).catch(onError)
            //返回原来的页面
            router.back()
        }
        return () => <>
            <MainLayout>
                {{
                    title: () => '新建标签',
                    icon: () => <BackIcon />,
                    default: () => <>
                        <TagFrom id={numberId} />
                        <div class={s.actions}>
                            <Button level='danger' class={[s.removeTags]}
                                onClick={() => onDelete()}>删除标签</Button>
                            <Button level='danger' class={[s.removeTagsAndItems]}
                                onClick={() => onDelete({ withItems: true })}>删除标签和记账</Button>
                        </div>
                    </>
                }}
            </MainLayout>
        </>
    }
})