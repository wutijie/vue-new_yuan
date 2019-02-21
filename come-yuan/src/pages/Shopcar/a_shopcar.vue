<template>
	<div class="shopcar">
		<div :class="{ sidebar_left : isSidebarOpen }" id="app_left" class="tdu0d5s h100p slider">
			<router-view name="slider" />
		</div>
		<section :class="{ sidebar_right : isSidebarOpen }" id="app_right" class="full flex-grail tdu0d5s">
			<div :class="{ dn : !isSidebarOpen }" @click="$router.go(-1)" id="mask" class="w100p h100p pa zi4"></div>
<<<<<<< HEAD
			<Headers>
				<button class="white" slot="header_center">舔购</button>
			</Headers>
=======
			<Header>
				<button class="white" slot="header_center">舔购</button>
			</Header>
>>>>>>> 3a2f696f8743a4cebc005bbe6447162694bdf03c
			<main class="">
				
			</main>
			<Tabbar></Tabbar>
		</section>
	</div>
</template>

<script>
<<<<<<< HEAD
	export default {
		components:{
			
=======
	
	
	import Header from '../../components/header.vue'
	import Tabbar from '../../components/tabbar.vue'
	export default {
		components:{
			Header,Tabbar
>>>>>>> 3a2f696f8743a4cebc005bbe6447162694bdf03c
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
			
		}
	}
</script>

<style>
	.shopcar{
		position: absolute;
		overflow: hidden;
		width: 100%;
		height: 100%;
	}
</style>