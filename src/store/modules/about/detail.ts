import { StateType } from '@typing/index'
import { Module } from 'vuex'

type AboutDetailStateType = typeof state

const state = {
	title: 'title from about detail state model.',
	content: 'content from about detail state model.'
}
const getters = {}
const mutations = {}
const actions = {}

const detail: Module<AboutDetailStateType, StateType> = {
	namespaced: true,
	state,
	getters,
	mutations,
	actions
}
export { AboutDetailStateType, state }
export default detail
