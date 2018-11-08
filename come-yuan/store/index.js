import Vue from 'vue'
import Vuex from 'vuex'

import banner from './modules/banner'
import user from './modules/user'

Vue.use(Vuex)

export const store = new Vuex.Store({
	modules:{
		banner,
		user
	}
})
