<template>
	<div class="find">
		<div :class="{ sidebar_left : isSidebarOpen }" id="app_left" class="tdu0d5s h100p slider">
			<router-view name="slider" />
		</div>
		<section :class="{ sidebar_right : isSidebarOpen }" id="app_right" class="full flex-grail tdu0d5s">
			<div :class="{ dn : !isSidebarOpen }" @click="$router.go(-1)" id="mask" class="w100p h100p pa zi4"></div>
<<<<<<< HEAD
			<Headers>
				<button class="white" slot="header_center">发现</button>
			</Headers>
			<main class="">
				<Banner slidesperview="1.4" :bandata="home_benefits"></Banner>
=======
			<Header>
				<button class="white" slot="header_center">发现</button>
			</Header>
			<main class="">
				<Banner slidesperview="1.4" :bandata="ban_swiper"></Banner>
>>>>>>> 3a2f696f8743a4cebc005bbe6447162694bdf03c
			</main>
			<Tabbar></Tabbar>
		</section>
	</div>
</template>

<script>
<<<<<<< HEAD
=======
	import Header from '../../components/header.vue'
	import Tabbar from '../../components/tabbar.vue'
>>>>>>> 3a2f696f8743a4cebc005bbe6447162694bdf03c
	import Banner from '../../components/banner'
	
	export default {
		components:{
<<<<<<< HEAD
			Banner
		},
		computed:{
			home_benefits(){
				return JSON.stringify(this.$store.getters.home_benefits);
=======
			Header,Tabbar,Banner
		},
		computed:{
			ban_swiper(){
				return JSON.stringify(this.$store.getters.ban_swiper);
>>>>>>> 3a2f696f8743a4cebc005bbe6447162694bdf03c
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
	.find{
		position: absolute;
		overflow: hidden;
		width: 100%;
		height: 100%;
	}
	.find .banner_wrap .swiper-slide{
		height: 80%;
		-webkit-transform: scale(0);
		transform: scale(0);
		-webkit-transition: 300ms;
    	transition: 300ms;
    	box-shadow: 0px 10px 40px 0px rgba(128, 155, 239, 0.37);
    	border-radius: 8px;
	}
	.find .banner_wrap .swiper-slide-next,.find .banner_wrap .swiper-slide-prev{
		top:50%;
		-webkit-transform: translateY(-55%) scale(0.8);
    	transform: translateY(-55%) scale(0.8);
	}
	.find .banner_wrap .swiper-slide-active{
		top:50%;
		-webkit-transform: translateY(-55%);
    	transform: translateY(-55%);
	}
</style>