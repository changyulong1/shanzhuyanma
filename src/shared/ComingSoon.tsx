import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'
import { Button } from './Button'
import { Center } from './Center'
import s from './ComingSoon.module.scss'
import { Icon } from './Icon'
export const ComingSoon = defineComponent({
    setup(props, context) {
        const router = useRouter()
        const onclick = () => {
            router.back()
        }
        return () => (
            <div>
                <Center class={s.pig_wrapper}>
                    <Icon name="pig" class={s.pig} />
                </Center>
                <p class={s.text}>敬请期待</p>
                <div class={s.fan} onClick={onclick}>
                    <Button>返回</Button>
                </div>
            </div>
        )
    }
})