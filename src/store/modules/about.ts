export interface AboutState {
	aboutInfo: string
}

const state: AboutState = {
	aboutInfo: 'info from about state model'
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
