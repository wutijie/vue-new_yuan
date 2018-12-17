<template>
	<div class="daily_welfare">
		<h2 class="fs1d6r tac pv1d25r">每日福利</h2>
		<div class="dv">
			<Banner slidesperview="1.2" :bandata="home_banner"></Banner>
		</div>
	</div>
</template>

<script>
	import Banner from '../../components/banner'
	
	export default {
		components:{
			Banner
		},
		computed:{
			home_banner(){
				return JSON.stringify(this.$store.getters.home_banner);
			}
		}
	}
</script>

<style>
	.daily_welfare .dv{
		height: 35vh;
	}
	.daily_welfare .banner_wrap{
		padding: 0;
	}
	.daily_welfare .banner_wrap .swiper-slide{
		height: 90%;
		-webkit-transform: scale(0);
		transform: scale(0);
		-webkit-transition: 300ms;
    	transition: 300ms;
    	box-shadow: 0px 10px 40px 0px rgba(128, 155, 239, 0.37);
    	border-radius: 8px;
	}
	.daily_welfare .banner_wrap .swiper-slide-next,.daily_welfare .banner_wrap .swiper-slide-prev{
		top:50%;
		-webkit-transform: translateY(-55%) scale(0.9);
    	transform: translateY(-55%) scale(0.9);
	}
	.daily_welfare .banner_wrap .swiper-slide-active{
		top:50%;
		-webkit-transform: translateY(-55%);
    	transform: translateY(-55%);
	}
</style>