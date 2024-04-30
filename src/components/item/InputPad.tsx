import { defineComponent } from 'vue'
import { Icon } from '../../shared/Icon'
import { time } from '../../shared/time'

import s from './InputPad.module.scss'

export const InputPad = defineComponent({

    setup() {
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
        return () => (
            <div class={s.inputPad}>
                <div class={s.dateAndMount}>
                    <span class={s.date}>
                        <Icon name="day" class={s.icon}></Icon>
                        <span><input type="date" value={time().format('YYYY-MM-DD')} /></span>
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