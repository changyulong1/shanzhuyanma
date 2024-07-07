import { defineComponent, ref, Transition } from "vue";
import s from './A.module.scss'
export const A = defineComponent(
    {
        setup() {
            let show = ref(true)
            const onclick = () => {
                show.value = !show.value
            }
            return () => <>
                <div class={s.agg}>
                    <button onClick={onclick}>按钮</button>
                    <Transition name="fade">
                        <p v-show={show.value}>hello</p>
                    </Transition>
                </div>

            </>
        }
    }
)