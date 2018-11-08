<template>
	<div class="banner_wrap bsbb">
		<div class="swiper-container bsbb">
		  	<div class="swiper-wrapper">
			    <div class="swiper-slide bsbb" v-for="(elem,index) in ban_swiper" :key="index" :class="elem.bgc">
			    	{{ elem.msg }}
			    </div>
		  	</div>
		  	<div class="swiper-pagination"></div>
		</div>
	</div>
</template>

<script>
	import Swiper from '../../static/libs/swiper/js/swiper.min.js'
	export default {
		data(){
			return {
				
			}
		},
		computed:{
			ban_swiper(){
//				console.log(this.$store.state);
//				console.log(this.$store.getters);
//				return this.$store.state.banner.ban_swiper;
				return this.$store.getters.ban_swiper;
			}
		},
		mounted(){
			//初始化swiper
			var mySwiper = new Swiper('.swiper-container',{
				pagination: {
				    el: '.swiper-pagination',
				    clickable :true,
				},
				watchActiveIndex: true,
				paginationClickable: true,
				//设定初始化时slide的索引
				initialSlide :2,
				//设置为true时，鼠标覆盖Swiper时指针会变成手掌形状，拖动时指针会变成抓手形状。（根据浏览器形状有所不同）
				grabCursor : true,
				//设置slider容器能够同时显示的slides数量(carousel模式)。
				slidesPerView : 1.4,
				//设定为true时，active slide会居中，而不是默认状态下的居左。
				centeredSlides : true,
				preventClicks : true,
				//在slide之间设置距离（单位px）。
				//spaceBetween : 5,
				on:{
				    tap: function(){
				    	console.log(this.realIndex+1)
				    },
				},
			});
			
		}
	}
</script>

<style>
	@import '../../static/libs/swiper/css/swiper.min.css';
	.banner_wrap{
		height: 100%;
		padding: 2.5rem 0;
	}
	.banner_wrap .swiper-container{
		height: 100%;
	}
	.banner_wrap .swiper-slide{
		height: 80%;
		-webkit-transform: scale(0);
		transform: scale(0);
		-webkit-transition: 300ms;
    	transition: 300ms;
	}
	.banner_wrap .swiper-slide-next,.banner_wrap .swiper-slide-prev{
		top:50%;
		-webkit-transform: translateY(-55%) scale(0.8);
    	transform: translateY(-55%) scale(0.8);
	}
	.banner_wrap .swiper-slide-active{
		top:50%;
		-webkit-transform: translateY(-55%);
    	transform: translateY(-55%);
	}
</style>