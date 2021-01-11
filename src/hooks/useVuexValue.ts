import { useStore } from 'vuex'

const useVuexValue = (moduleName: string, storeKeys: Array<string>) => {
	let values: any = []
	const moduleNames = moduleName.split('/')
	const state = useCurry(moduleNames)
	storeKeys.forEach((storeKey) => {
		const value = state[storeKey]
		values.push(value ? value : null)
	})
	return values
}

const useCurry = (moduleNames: Array<string>) => {
	const store = useStore()
	let state = store.state
	moduleNames.forEach((moduleName) => {
		state = state[moduleName]
	})
	return state
}

export default useVuexValue
