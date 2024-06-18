import { defineComponent, PropType, reactive, toRaw } from 'vue';
import { MainLayout } from '../../layouts/MainLayout'
import { Rules, validate } from '../../shared/validate';
import { Icon } from '../../shared/Icon'
import { TagFrom } from '../../shared/TagForm';
import { BackIcon } from '../../shared/BackIcon';
export const TagCreate = defineComponent({
    setup(props, context) {
        return () => (
            <MainLayout>
                {{
                    title: () => '新建标签',
                    icon: () => <BackIcon />,
                    default: () => (
                        <TagFrom />
                    )
                }}
            </MainLayout>
        )
    }
})