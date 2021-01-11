export interface AboutDetailState {
	aboutDetail: string
}

const state: AboutDetailState = {
	aboutDetail: 'detail from about detail state model'
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
