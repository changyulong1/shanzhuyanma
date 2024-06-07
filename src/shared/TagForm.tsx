import { defineComponent, reactive } from 'vue'
import { Button } from './Button'
import { EmojiSelect } from './EmojiSelect'
import { Form, FormItem } from './Form'
import s from './TagFrom.module.scss'
import { Rules, validate } from './validate'
export const TagFrom = defineComponent({
    setup(props, context) {
        const formData = reactive({
            name: '',
            sign: '',
        })
        const errors = reactive<{ [k in keyof typeof formData]?: string[] }>({})
        const onSubmit = (e: Event) => {

            const rules: Rules<typeof formData> = [
                { key: 'name', type: 'required', message: '必填' },
                { key: 'name', type: 'pattern', regex: /^.{1,4}$/, message: '只能填 1 到 4 个字符' },
                { key: 'sign', type: 'required', message: '必填' },
            ]
            Object.assign(errors, {
                name: undefined,
                sign: undefined
            })
            Object.assign(errors, validate(formData, rules))
            console.log(errors)
            e.preventDefault()
        }
        return () => (
            <Form onSubmit={onSubmit}>
                <FormItem modelValue={formData.name} type='text' label='标签名'></FormItem>
                <FormItem type='emojiSelect' modelValue={formData.sign} label='标签名'></FormItem>
                <p class={s.tips}>记账时长按标签即可进行编辑</p>
                <div class={s.formRow}>
                    <div class={s.formItem_value}>
                        <Button class={[s.formItem, s.button]}>确定</Button>
                    </div>
                </div>
            </Form>
        )
    }
})





