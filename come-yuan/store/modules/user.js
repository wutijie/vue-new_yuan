const state = {
	isLogin:false,
	current_user:[],
	isSidebarOpen:false
}
const getters = {
	isLogin: state => state.isLogin,
	current_user: state => state.current_user,
	isSidebarOpen: state => state.isSidebarOpen
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
	}
}
const actions = {
	
}
export default {
	state,
	getters,
	mutations,
	actions
}