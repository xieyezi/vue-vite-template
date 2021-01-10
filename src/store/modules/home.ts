export interface HomeState {
	homeInfo: string
}

const state: HomeState = {
	homeInfo: 'info from home state model'
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
