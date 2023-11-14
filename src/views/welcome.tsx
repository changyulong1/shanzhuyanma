import { defineComponent } from "vue";
import { RouterLink, RouterView } from "vue-router";

export const welcome = defineComponent({
    setup() {
        return () => (
            <div>
                <header>
                    山竹记账
                </header>
                <RouterView />
            </div>
        )
    }
})