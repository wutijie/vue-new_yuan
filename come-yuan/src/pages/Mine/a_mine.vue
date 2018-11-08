<template>
	<div class="mine">
		<div :class="{ sidebar_left : isSidebarOpen }" id="app_left" class="tdu0d5s">
			<router-view name="slider" />
		</div>
		<section :class="{ sidebar_right : isSidebarOpen }" id="app_right" class="full flex-grail tdu0d5s">
			<div :class="{ dn : !isSidebarOpen }" @click="$router.go(-1)" id="mask" class="w100p h100p pa zi4"></div>
			<Header title="我的"></Header>
			<main class="">
				<div v-show="!isLogin" class="">
					<p class="fs2r">
						<span @click="$router.push('./login')" class="">登录</span>
						<span @click="$router.push('./register')" class="">注册</span>
					</p>
				</div>
				<div class="fs1d4r">
					<el-button v-show="isLogin" @click="quitUser">退出</el-button>
				</div>
			</main>
			<Tabbar></Tabbar>
		</section>
	</div>
</template>

<script>
	import Header from '../../components/header.vue'
	import Tabbar from '../../components/tabbar.vue'
	export default {
		components:{
			Header,Tabbar
		},
		computed:{
			isLogin(){
				return this.$store.getters.isLogin;
			},
			isSidebarOpen(){
				return this.$store.getters.isSidebarOpen;
			}
		},
		methods:{
			quitUser(){
				/*localStorage.removeItem('key');*/
				this.$store.commit("setUserStatus",false);
				localStorage.setItem('login_user', "no");
			}
		}
	}
</script>

<style>
	.mine{
		position: absolute;
		overflow: hidden;
		width: 100%;
		height: 100%;
	}
</style>