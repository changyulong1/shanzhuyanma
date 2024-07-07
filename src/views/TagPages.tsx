import { defineComponent, } from 'vue'
import { RouterView } from 'vue-router';
import s from './TagPages.module.scss'
export const TagPages = defineComponent({
    setup() {
        return () => (
            <RouterView />
        )
    }
})
//优化打包实现懒加载
export default TagPages