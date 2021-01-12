import { StateType } from '@typing/index'
import { Module } from 'vuex'

type AboutListStateType = typeof state

const state = {
	aboutList: 'info from about list state model.'
}
const getters = {}
const mutations = {}
const actions = {}

const list: Module<AboutListStateType, StateType> = {
	namespaced: true,
	state,
	getters,
	mutations,
	actions
}
export { AboutListStateType, state }
export default list
