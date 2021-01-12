import { HomeStateType } from '@store/modules/home'
import { AboutStateType } from '@store/modules/about'

// vuex state 的模块的类型
type VuexModuleType = {
	home: HomeStateType
	about: AboutStateType
}

// 所有的StateType
export type StateType = VuexModuleType
