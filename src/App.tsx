import { defineComponent, ref } from "vue";
import { RouterLink, RouterView } from "vue-router";
export const App = defineComponent(
    {
        setup() {
            return () => <>
                <RouterView />
                <div>
                    <RouterLink to='/'>aoo</RouterLink>
                    <RouterLink to='/about'>fOO</RouterLink>
                </div>
            </>
        }
    }
)