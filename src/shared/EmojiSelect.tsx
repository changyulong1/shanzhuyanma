import { computed, defineComponent, PropType, ref } from 'vue'
import { emojiList } from './emojiList';
import s from './EmojiList.module.scss'
export const EmojiSelect = defineComponent({
    props: {
        modelValue: {
            type: String
        }
    },
    setup(props, context) {
        const refSelected = ref(1)
        const table: [string, string[]][] = [
            ['表情', ['face-smiling', 'face-affection', 'face-tongue', 'face-hand',
                'face-neutral-skeptical', 'face-sleepy', 'face-unwell', 'face-hat',
                'face-glasses', 'face-concerned', 'face-negative', 'face-costume'
            ]],
            ['手势', ['hand-fingers-open', 'hand-fingers-partial', 'hand-single-finger',
                'hand-fingers-closed', 'hands', 'hand-prop', 'body-parts']],
            ['人物', ['person', 'person-gesture', 'person-role', 'person-fantasy',
                'person-activity', 'person-sport', 'person-resting']],
            ['衣服', ['clothing']],
            ['动物', ['cat-face', 'monkey-face', 'animal-mammal', 'animal-bird',
                'animal-amphibian', 'animal-reptile', 'animal-marine', 'animal-bug']],
            ['植物', ['plant-flower', 'plant-other']],
            ['自然', ['sky & weather', 'science']],
            ['食物', [
                'food-fruit', 'food-vegetable', 'food-prepared', 'food-asian',
                'food-marine', 'food-sweet'
            ]],
            ['运动', ['sport', 'game']],
        ]
        const onClickTab = (index: number) => {
            refSelected.value = index
        }
        const onClickEmoji = (emoji: String) => {
            context.emit('update:modelValue', emoji)
        }
        const emojis = computed(() => {
            const selectedTime = table[refSelected.value][1]
            return selectedTime.map((category) => {
                return emojiList.find(time => time[0] == category)?.[1]
                    .map(item => <li class={item === props.modelValue ? s.selectedEmoji : ''}
                        onClick={() => onClickEmoji(item)}>{item}</li>)
            })
        })
        return () => (
            <div class={s.emojiList}>
                <nav>
                    {table.map((time, index) => {
                        return <span class={index === refSelected.value ? s.selected : ''}
                            onClick={() => onClickTab(index)}>{time[0]}</span>
                    })
                    }
                </nav>
                <ol>
                    {emojis.value}
                </ol>
            </div>
        )
    }
})