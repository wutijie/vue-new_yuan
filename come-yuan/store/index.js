import Vue from 'vue'
import Vuex from 'vuex'

import home from './modules/home'
import user from './modules/user'

Vue.use(Vuex)

export const store = new Vuex.Store({
	modules:{
		home,
		user
	}
})
