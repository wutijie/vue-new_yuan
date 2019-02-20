const state = {
	isLogin:false,
	current_user:[],
	isSidebarOpen:false,
	isMusicOpen:false,
	recent_search:['甜品无敌大蛋糕','甜品无敌大蛋糕','无敌大蛋糕','大蛋糕']
}
const getters = {
	isLogin: state => state.isLogin,
	current_user: state => state.current_user,
	isSidebarOpen: state => state.isSidebarOpen,
	isMusicOpen: state => state.isMusicOpen,
	recent_search: state => state.recent_search
}
const mutations = {
	setUserStatus(state,data){
		state.isLogin = data;
	},
	setUser(state,data){
		state.current_user = data;
	},
	setSidebar(state,data){
		state.isSidebarOpen = data;
	},
	setMusic(state,data){
		state.isMusicOpen = data;
	},
	setRecentSearch(state,data){
		state.recent_search.splice(data,1);
	}
}
const actions = {
	setRecentSearch({ commit }, data){
		commit('setIsAuthenticated', data);
	}
}

export default {
	state,
	getters,
	mutations,
	actions
}