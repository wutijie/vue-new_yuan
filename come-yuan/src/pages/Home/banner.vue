<template>
	<div class="home_banner">
		<div class="swiper-container bsbb" id="home_ban">
		  	<div class="swiper-wrapper">
			    <div class="swiper-slide bsbb" v-for="(elem,index) in home_banner" :key="index">
			    	<img class="w100p" :src="elem.src"/>
			    </div>
		  	</div>
		  	<div class="swiper-pagination"></div>
		</div>
	</div>
</template>

<script>
	import Swiper from '../../../static/libs/swiper/js/swiper.min.js'
	export default {
		computed:{
			home_banner(){
				console.log("首页首页",this.$store.getters.home_banner);
				return this.$store.getters.home_banner;
			}
		},
		mounted(){
			//初始化swiper
			setTimeout(function(){
				var mySwiper = new Swiper('#home_ban',{
					pagination: {
					    el: '.swiper-pagination',
					    clickable :true,
					},
					autoplay:true,
					on:{
					    tap: function(){
					    	console.log(this.realIndex+1)
					    },
					},
				});
			},200);
			
		}
	}
</script>

<style>
	@import '../../../static/libs/swiper/css/swiper.min.css';
	.home_banner .swiper-pagination-bullet{
		width: 10px;
		height: 10px;
		background: #fff;
		opacity: 1;
	}
	.home_banner .swiper-pagination-bullet-active{
		background: #86a3ff;
	}
	.home_banner .swiper-pagination{
		bottom: 3.5rem!important;
	}
	.home_banner .swiper-container-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet{
		margin: 0 14px;
	}
</style>