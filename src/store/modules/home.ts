import { StateType } from '@typing/index'
import { Module } from 'vuex'

type HomeStateType = typeof state

const state = {
	homeInfo: 'info from home state model'
}
const getters = {}
const mutations = {}
const actions = {}

const home: Module<HomeStateType, StateType> = {
	namespaced: true,
	state,
	getters,
	mutations,
	actions
}
export { HomeStateType, state }
export default home
