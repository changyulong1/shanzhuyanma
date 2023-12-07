import { computed, onMounted, onUnmounted, ref, Ref } from "vue"

type Point = {
    X: number
    Y: number
}
interface Options {
    beforeStart?: (e: TouchEvent) => void
    afterStart?: (e: TouchEvent) => void
    beforeMove?: (e: TouchEvent) => void
    afterMove?: (e: TouchEvent) => void
    beforeEnd?: (e: TouchEvent) => void
    afterEnd?: (e: TouchEvent) => void
}
export const useSwipe = (element: Ref<HTMLElement | undefined>, options?: Options) => {
    const start = ref<Point>()
    const end = ref<Point>()
    const swiping = ref(false)
    const distance = computed(() => {
        if (!start.value || !end.value) { return null }
        return {
            x: end.value.X - start.value.X,
            y: end.value.Y - start.value.Y,
        }
    })
    const direction = computed(() => {
        if (!distance.value) { return '' }
        const { x, y } = distance.value
        if (Math.abs(x) > Math.abs(y)) {
            return x > 0 ? 'right' : 'left'
        } else {
            return y > 0 ? 'down' : 'up'
        }
    })
    const onStart = (e: TouchEvent) => {
        options?.beforeStart?.(e)
        swiping.value = true
        end.value = start.value = { X: e.touches[0].clientX, Y: e.touches[0].clientY }
        options?.afterStart?.(e)
    }
    const onMove = (e: TouchEvent) => {
        options?.beforeStart?.(e)
        end.value = { X: e.touches[0].screenX, Y: e.touches[0].screenY }
        options?.afterStart?.(e)
    }
    const onEnd = (e: TouchEvent) => {
        options?.beforeStart?.(e)
        swiping.value = false
        options?.afterStart?.(e)
    }
    onMounted(() => {
        if (!element.value) { return }
        element.value.addEventListener('touchstart', onStart)
        element.value.addEventListener('touchmove', onMove)
        element.value.addEventListener('touchend', onEnd)
    })
    onUnmounted(() => {

    })

    return {
        swiping,
        distance,
        direction
    }
}