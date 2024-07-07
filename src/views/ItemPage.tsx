import { defineComponent } from 'vue'
import { RouterView } from 'vue-router'
export const ItemPage = defineComponent({
    setup(props, context) {
        return () => (
            <RouterView />
        )
    }
})
//优化打包实现懒加载
export default ItemPage