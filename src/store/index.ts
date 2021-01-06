import { createStore, createLogger } from 'vuex'
import modules from './modules'
import config from '../config'

const store = createStore({
	state: {},
	mutations: {},
	actions: {},
	modules,
	strict: config.isDev,
	plugins: config.isDev ? [createLogger()] : []
})

export default store
