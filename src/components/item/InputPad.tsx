import { defineComponent, ref } from 'vue'
import { Icon } from '../../shared/Icon'
import { time } from '../../shared/time'
import { DatetimePicker, NumberKeyboard, Popup } from 'vant';

import s from './InputPad.module.scss'

export const InputPad = defineComponent({
    setup() {
        const now = new Date()
        const refDate = ref<Date>(now)
        const buttons = [
            { text: '1', onclick: () => { } },
            { text: '2', onclick: () => { } },
            { text: '3', onclick: () => { } },
            { text: '全删', onclick: () => { } },
            { text: '4', onclick: () => { } },
            { text: '5', onclick: () => { } },
            { text: '6', onclick: () => { } },
            { text: '+', onclick: () => { } },
            { text: '7', onclick: () => { } },
            { text: '8', onclick: () => { } },
            { text: '9', onclick: () => { } },
            { text: '-', onclick: () => { } },
            { text: '.', onclick: () => { } },
            { text: '0', onclick: () => { } },
            { text: '删除', onclick: () => { } },
            { text: '确定', onclick: () => { } },

        ]
        const refDatePickerVisible = ref(false)
        const showDatePicker = () => refDatePickerVisible.value = true
        const hideDatePicker = () => refDatePickerVisible.value = false
        const setDate = (date: Date) => { refDate.value = date; hideDatePicker() }
        const refAmount = ref('0')
        return () => (
            <div class={s.inputPad}>
                <div class={s.dateAndMount}>
                    <span class={s.date}>
                        <Icon name="day" class={s.icon}></Icon>
                        <span>
                            <span onClick={showDatePicker}>{time(refDate.value).format()}</span>
                            <Popup position='bottom' v-model:show={refDatePickerVisible.value}>
                                <DatetimePicker value={refDate.value} type="date" title="选择年月日"
                                    onConfirm={setDate} onCancel={hideDatePicker}
                                />
                            </Popup>

                        </span>
                    </span>
                    <span class={s.amount}>1231</span>
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