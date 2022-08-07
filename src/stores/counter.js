import {defineStore} from 'pinia'

export const useCounterStore = defineStore({
    id: 'counter',
    state: () => ({
        counter: 1
    }),
    getters: {
        doubleCount: (state) => state.counter * 2
    },
    actions: {
        increment() {
            this.counter++
        },
        decrement() {
            if (this.counter > 1)
                this.counter--
        }
    }
})
