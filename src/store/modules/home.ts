export interface HomeState {
	homeInfo: string
}

const state: HomeState = {
	homeInfo: 'home info'
}
const getters = {}
const mutations = {}
const actions = {}

export default {
	namespaced: true,
	state,
	getters,
	mutations,
	actions
}
