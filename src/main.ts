import { createApp } from 'vue'
import { App } from './App'
import { history } from './shared/history'
import { createRouter } from 'vue-router'
import { routes } from './config/routes'
import '@svgstore'
import { createPinia, storeToRefs } from 'pinia'
import { useMeStore } from './stores/useMeStores'
const router = createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: history,
    routes// `routes: routes` 的缩写
})


const pinia = createPinia()
const app = createApp(App)
app.use(router)
app.use(pinia)
app.mount('#app')


const meStore = useMeStore()
//使用storeToRefs实现结构的方式拿到meStore中的mePromise
const { mePromise } = storeToRefs(meStore)
meStore.fetchMe()

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
    return mePromise!.value!.then(
        () => true,
        () => '/sign_in?return_to=' + to.path
    )
})

