import { infoState } from './state'

function chageInfo(state: infoState) {
	return (value: string) => {
		state.info = value
	}
}

export function createAction(state: infoState) {
	return {
		chageInfo: chageInfo(state)
	}
}
