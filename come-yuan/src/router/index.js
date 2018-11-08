import Vue from 'vue'
import Router from 'vue-router'

import User from './user'


Vue.use(Router)

export default new Router({
	mode: 'history',
	routes: [
		...User
	]
})
