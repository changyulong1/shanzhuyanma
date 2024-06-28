import { createApp } from 'vue'
import { App } from './App'
import { history } from './shared/history'
import { createRouter } from 'vue-router'
import { routes } from './config/routes'
import '@svgstore'
import { http } from './shared/http'
import { fetchMe, mePromise } from './shared/me'
const router = createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: history,
    routes// `routes: routes` 的缩写
})
fetchMe()

const whiteList: Record<string, 'exact' | 'startsWith'> = {
    '/': 'exact',
    '/items': 'exact',
    '/welcome': 'startsWith',
    '/sign_in': 'startsWith',
}

router.beforeEach((to, from) => {
    for (const key in whiteList) {
        const value = whiteList[key]
        if (value === 'exact' && to.path === key) {
            return true
        }
        if (value === 'startsWith' && to.path.startsWith(key)) {
            return true
        }
    }
    return mePromise!.then(
        () => true,
        () => '/sign_in?return_to=' + to.path
    )
})
const app = createApp(App)
app.use(router)
app.mount('#app')
