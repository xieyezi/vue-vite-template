import { InjectionKey } from 'vue'
import { createStore, createLogger, Store, useStore as baseUseStore } from 'vuex'
import { StateType } from '@typing/index'
import modules from './modules'
import config from '../config'

export const key: InjectionKey<Store<StateType>> = Symbol()

const store = createStore({
	modules,
	state: {},
	mutations: {},
	actions: {},
	strict: config.isDev,
	plugins: config.isDev ? [createLogger()] : []
})

export const useStore = () => {
	return baseUseStore(key)
}

export default store
