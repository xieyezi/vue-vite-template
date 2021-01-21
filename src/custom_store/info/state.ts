import { reactive } from 'vue'

export interface infoState {
	info: string
}

const state: infoState = {
	info: 'info from info state model'
}

export const createStore = () => {
	return reactive(state)
}
