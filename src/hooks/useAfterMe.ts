import { onMounted } from "vue"
import { useMeStore } from "../stores/useMeStores"

export const useAfterMe = (fn: () => void) => {
    const meStore = useMeStore()
    onMounted(async () => {
        //方法一：使用try catch 请求失败导致出现的报错
        // try {
        //     await meStore.mePromise
        // } catch (error) {
        //     return
        // }
        //方法二：请求失败导致出现的报错
        await meStore.mePromise?.then(fn, () => undefined)
    })
}