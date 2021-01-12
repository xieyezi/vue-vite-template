import { InjectionKey } from 'vue'
import { createStore, createLogger, Store, useStore as baseUseStore } from 'vuex'
import { StateType } from '@typing/index'
import modules from './modules'
import config from '../config'

export const key: InjectionKey<Store<StateType>> = Symbol()

const store: Store<StateType> = createStore({
	modules,
	mutations: {},
	actions: {},
	strict: config.isDev,
	plugins: config.isDev ? [createLogger()] : []
})

export function useStore() {
	return baseUseStore(key)
}
export default store
