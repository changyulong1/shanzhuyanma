import { defineComponent, onMounted, PropType, reactive } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { Button } from './Button'
import { EmojiSelect } from './EmojiSelect'
import { Form, FormItem } from './Form'
import { Http, http } from './http'
import { onFormError } from './onFormError'
import s from './TagFrom.module.scss'
import { hasError, Rules, validate } from './validate'
export const TagFrom = defineComponent({
    props: {
        id: {
            type: Number as PropType<number>,
            required: true
        }
    },
    setup(props, context) {
        const route = useRoute()
        const formData = reactive<Partial<Tag>>({
            id: undefined,
            name: '',
            sign: '',
            kind: route.query.kind!.toString(),
        })
        const errors = reactive<{ [k in keyof typeof formData]?: string[] }>({})
        const router = useRouter()
        const onSubmit = async (e: Event) => {
            e.preventDefault()
            const rules: Rules<typeof formData> = [
                { key: 'name', type: 'required', message: '必填' },
                { key: 'name', type: 'pattern', regex: /^.{1,4}$/, message: '只能填 1 到 4 个字符' },
                { key: 'sign', type: 'required', message: '必填' },
            ]
            Object.assign(errors, {
                name: [],
                sign: []
            })
            Object.assign(errors, validate(formData, rules))
            if (!hasError(errors)) {
                console.log(22)
                const response = await formData.id ?
                    http.patch(`/tags/${formData.id}`, formData, {
                        params: { _mock: 'tagEdit' },
                    }) : http.post('/tags', {
                        params: { _mock: 'tagCreate' },
                    })
                // router.back()
                console.log(response)
            }
        }
        onMounted(async () => {
            const response = await http.get<Resource<Tag>>(`/tags/${props.id}`, {
                _mock: 'tagShow'
            })
            Object.assign(formData, response.data.resource)
        })
        return () => (
            <Form onSubmit={onSubmit}>
                <FormItem
                    v-model={formData.name}
                    type='text' label='标签名（最多 4 个字符）'
                    error={errors['name']?.[0]}></FormItem>
                <FormItem
                    type='emojiSelect'
                    v-model={formData.sign}
                    label={'符号' + formData.sign}
                    error={errors['sign']?.[0]}></FormItem>
                <FormItem>
                    <p class={s.tips}>记账时长按标签即可进行编辑</p>
                </FormItem>
                <FormItem>
                    <Button type='submit' class={[s.button]}>确定</Button>
                </FormItem>
            </Form >
        )
    }
})





