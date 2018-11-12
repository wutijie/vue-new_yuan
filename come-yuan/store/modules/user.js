const state = {
	isLogin:false,
	current_user:[],
	isSidebarOpen:false,
	isMusicOpen:false
}
const getters = {
	isLogin: state => state.isLogin,
	current_user: state => state.current_user,
	isSidebarOpen: state => state.isSidebarOpen,
	isMusicOpen: state => state.isMusicOpen
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