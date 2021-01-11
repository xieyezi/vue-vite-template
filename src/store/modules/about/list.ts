export interface AboutListState {
	aboutList: string
}

const state: AboutListState = {
	aboutList: 'list from about list state model'
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
