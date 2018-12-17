// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

//引入vuex
import { store } from '../store/index'

//引入axios
import axios from 'axios'
//axios.defaults.baseUrl = 'https://wd0227110045vvxhbf.wilddogio.com/'
Vue.prototype.$http = axios

//引入element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)


//public css
import './assets/css/main.css'
//public js
import './assets/js/all.js'


Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
	el: '#app',
	store,
	router,
	components: { App },
	template: '<App/>',
	created(){
		this.getStatus();
	},
	methods:{
		getStatus(){
			if(localStorage.getItem("key")){
				this.$store.commit("setUser", localStorage.getItem("key"));
			}else{
				this.$store.commit("setUser", []);
			}
			if(localStorage.getItem("login_user") == "yes"){
				this.$store.commit("setUserStatus",true);
			}else{
				this.$store.commit("setUserStatus",false);
			}
			console.log(this.$store.getters.isLogin)
		}
	}
})
