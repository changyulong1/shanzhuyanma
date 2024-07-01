import { defineStore } from 'pinia'
import { http } from '../shared/Http'

type State = {
    items: Item[]
    hasMore: boolean
    page: number
}
type Actions = {
    reset: () => void
    _fetch: (firstPage: boolean, startDate?: string, endDate?: string) => void
    fetchItems: (startDate?: string, endDate?: string) => void
    fetchNextPage: (startDate?: string, endDate?: string) => void
}
export const useItemStore = (id: string | string[]) =>
    defineStore<string, State, {}, Actions>(typeof id === 'string' ? id : id.join('-'), {
        state: () => ({
            items: [],
            hasMore: false,
            page: 0
        }),
        actions: {
            reset() {
                this.items = []
                this.hasMore = false
                this.page = 0
            },
            async _fetch(firstPage, startDate, endDate) {
                if (!startDate || !endDate) {
                    return
                }
                const response = await http.get<Resources<Item>>(
                    '/items',
                    {
                        happen_after: startDate,
                        happen_before: endDate,
                        page: firstPage ? 1 : this.page + 1
                    },
                    {
                        _mock: 'itemIndex',
                        _autoLoading: true
                    }
                )
                const { resources, pager } = response.data
                if (firstPage) {
                    this.items = resources
                } else {
                    this.items.push(...resources)
                }
                this.hasMore = (pager.page - 1) * pager.per_page + resources.length < pager.count
                this.page += 1
                console.log(this.items, endDate)
            },
            async fetchNextPage(startDate, endDate) {
                this._fetch(false, startDate, endDate)
            },
            async fetchItems(startDate, endDate) {
                this._fetch(true, startDate, endDate)
            }
        }
    })()
