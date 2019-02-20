<template>
	<div class="home">
		<div :class="{ sidebar_left : isSidebarOpen }" id="app_left" class="tdu0d5s h100p slider">
			<router-view name="slider" />
		</div>
		<section :class="{ sidebar_right : isSidebarOpen }" id="app_right" class="full flex-grail tdu0d5s">
			<div :class="{ dn : !isSidebarOpen }" @click="$router.go(-1)" id="mask" class="w100p h100p pa zi4"></div>
			<Headers>
				<button @click="$router.push('/search')" class="w100p h2d5r fs1r gray bgcwhite br2r lh2d5r" slot="header_center">
					<img class="w1d2r mr0d4r vatb" src="../../assets/images/tab_find_normal.png"/>情输入要搜索的甜品
				</button>
				<img class="w100p" @click="herder_music" slot="header_right" src="../../assets/images/header_music.png"/>
			</Headers>
			<main>
				<keep-alive>
					<router-view class="pf h100p w100p zi2"></router-view>
				</keep-alive>
				<Banner></Banner>
				<Classification></Classification>
				<Welfare></Welfare>
			</main>
			<Tabbar></Tabbar>
		</section>
	</div>
</template>

<script>
	import Banner from './banner'
	import Classification from './classification'
	import Welfare from './daily_welfare'
	
	
	export default {
		components:{
			Banner,Classification,Welfare
		},
		computed:{
			home_benefits(){
				return this.$store.getters.home_benefits;
			},
			isSidebarOpen(){
				return this.$store.getters.isSidebarOpen;
			}
		},
		methods:{
			herder_music(){
				this.$store.commit("setMusic",true);
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