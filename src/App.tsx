import { defineComponent, ref } from "vue";
import { RouterLink, RouterView } from "vue-router";
import './App.scss'
export const App = defineComponent(
    {
        setup() {
            return () => <>
                <RouterView />
            </>
        }
    }
)