<template>
	<div class="home">
		<div :class="{ sidebar_left : isSidebarOpen }" id="app_left" class="tdu0d5s">
			<router-view name="slider" />
		</div>
		<section :class="{ sidebar_right : isSidebarOpen }" id="app_right" class="full flex-grail tdu0d5s">
			<div :class="{ dn : !isSidebarOpen }" @click="$router.go(-1)" id="mask" class="w100p h100p pa zi4"></div>
			<Headers title="首页">
				<img class="w100p" @click="herder_music" slot="header_right" src="../../assets/images/header_music.png"/>
			</Headers>
			<main>
				<router-view class="pf h100p w100p zi2"></router-view>
				<Banner></Banner>
			</main>
			<Tabbar></Tabbar>
		</section>
	</div>
</template>

<script>
	import Headers from '../../components/header'
	import Tabbar from '../../components/tabbar'
	import Banner from '../../components/banner'
	
	export default {
		components:{
			Headers,Tabbar,Banner
		},
		computed:{
			isSidebarOpen(){
				return this.$store.getters.isSidebarOpen;
			}
		},
		methods:{
			herder_music(){
				this.$router.push("/home/music");
			}
		}
	}
</script>

<style>
	.home{
		position: absolute;
		overflow: hidden;
		width: 100%;
		height: 100%;
	}
</style>