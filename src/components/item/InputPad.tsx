import { defineComponent, PropType, ref } from 'vue'
import { Icon } from '../../shared/Icon'
import { Time } from '../../shared/time'
import { DatetimePicker, NumberKeyboard, Popup } from 'vant';

import s from './InputPad.module.scss'
import { number } from 'echarts';

export const InputPad = defineComponent({
    props: {
        happenAt: String,
        amount: Number,
        onSubmit: {
            type: Function as PropType<() => void>
        }
    },
    setup(props, context) {
        const now = new Date()
        const refDate = ref<Date>(now)
        const appendText = (n: number | String) => {
            let nString = n.toString()
            let index = refAmount.value.indexOf('.')
            if (refAmount.value.length > 13) { //设置输入长度
                return
            }
            if (index >= 0 && refAmount.value.length - index > 2) { // 设置两位小数
                return
            }
            if (nString == '.') {
                if (index >= 0) { // 有小数点
                    return
                }
            } else if (nString == '0') {
                if (index === -1) { //没有小数点
                    if (refAmount.value === '0') {
                        return
                    }
                }
            } else {
                if (refAmount.value === '0') {
                    refAmount.value = ' '
                }
            }

            refAmount.value += n.toString()
        }
        const buttons = [
            { text: '1', onclick: () => { appendText(1) } },
            { text: '2', onclick: () => { appendText(2) } },
            { text: '3', onclick: () => { appendText(3) } },
            { text: '4', onclick: () => { appendText(4) } },
            { text: '5', onclick: () => { appendText(5) } },
            { text: '6', onclick: () => { appendText(6) } },
            { text: '7', onclick: () => { appendText(7) } },
            { text: '8', onclick: () => { appendText(8) } },
            { text: '9', onclick: () => { appendText(9) } },
            { text: '.', onclick: () => { appendText('.') } },
            { text: '0', onclick: () => { appendText(0) } },
            { text: '删除', onclick: () => { refAmount.value = '0' } },
            {
                text: '确定',
                onclick: () => {
                    context.emit('update:amount', parseFloat(refAmount.value) * 100)
                    props.onSubmit?.()
                }
            },

        ]
        const refDatePickerVisible = ref(false)
        const showDatePicker = () => refDatePickerVisible.value = true
        const hideDatePicker = () => refDatePickerVisible.value = false
        const setDate = (date: Date) => {
            context.emit('update:happenAt', date.toISOString())
            hideDatePicker()
        }
        const refAmount = ref(props.amount ? (props.amount / 100).toString() : '0')
        return () => (
            <div class={s.inputPad}>
                <div class={s.dateAndMount}>
                    <span class={s.date}>
                        <Icon name="day" class={s.icon}></Icon>
                        <span>
                            <span onClick={showDatePicker}>{new Time(props.happenAt).format()}</span>
                            <Popup position='bottom' v-model:show={refDatePickerVisible.value}>
                                <DatetimePicker modelValue={props.happenAt ? new Date(props.happenAt) : new Date()} type="date" title="选择年月日"
                                    onConfirm={setDate} onCancel={hideDatePicker}
                                />
                            </Popup>
                        </span>
                    </span>
                    <span class={s.amount}>{refAmount.value}</span>
                </div>
                <div class={s.buttons}>
                    {
                        buttons.map((time) => (
                            <button onClick={time.onclick}>{time.text}</button>
                        ))
                    }
                </div>
            </div>
        )
    }
})