import modules from './about'
import { StateType } from '@typing/index'
import { Module } from 'vuex'

type AboutStateType = typeof state

const state = {
	aboutInfo: 'info from about state model'
}
const getters = {}
const mutations = {}
const actions = {}

const about: Module<AboutStateType, StateType> = {
	namespaced: true,
	state,
	getters,
	mutations,
	actions
	// modules
}
export { AboutStateType, state }
export default about
