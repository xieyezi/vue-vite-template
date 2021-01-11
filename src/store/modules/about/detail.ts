export interface AboutDetailState {
	title: string
	content: string
}

const state: AboutDetailState = {
	title: 'title from about detail state model.',
	content: 'content from about detail state model.'
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
