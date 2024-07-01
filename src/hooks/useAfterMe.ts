import { onMounted } from "vue"
import { useMeStore } from "../stores/useMeStores"

export const useAfterMe = (fn: () => void) => {
    const meStore = useMeStore()
    onMounted(async () => {
        await meStore.mePromise
        fn()
    })
}