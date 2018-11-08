<template>
	<div class="ban_wrap pr mt2r">
		<div class="content">
			<div class="swiper">
				<div class="swiper-container">
					<div class="swiper-wrapper">
						<div class="swiper-slide bgc00c8b3">
							
						</div>
						<div class="swiper-slide bgc4blue">
							
						</div>
						<div class="swiper-slide bgc9pur">
							
						</div>
						<div class="swiper-slide bgcdarkgray">
							
						</div>
						<div class="swiper-slide bgcdarkgreen">
							
						</div>
					</div>
				</div>
				<div class="pagination"></div>
			</div>
		</div>
	</div>
</template>

<script>
	import Swiper from '../../static/libs/swiper/js/idangerous.swiper2.7.6.js'
	export default {
		mounted(){
			
			var clientWidths = document.documentElement.clientWidth;
			var clientHeights = document.documentElement.clientHeight;
			
			resize(clientWidths, clientHeights);
			window.addEventListener('resize', resize(clientWidths, clientHeights));
			
			function resize(docWidth, docHeight) {
				var docScale = docHeight / docWidth,
					designWidth = 375,
					designHeight = 605,
					els = document.getElementsByClassName('content'),
					scale = docWidth / designWidth,
					scaleX = docWidth / designWidth,
					scaleY = docHeight / designHeight;
				convertArray(els).forEach(function(el) {
					extend(el.style, {
						width: designWidth + 'px',
						height: document.getElementsByClassName('swiper')[0].offsetHeight + 'px',
						position: 'absolute',
						top: 0,
						left: 0,
						transformOrigin: '0 0',
						webkitTransformOrigin: '0 0',
						transform: 'scale(' + scale + ')',
						webkitTransform: 'scale(' + scale + ')',
						overflow: 'auto',
						webkitOverflowScrolling: 'touch'
					});
				});
				console.dir(document.getElementsByClassName('content')[0])
				setTimeout(function(){
					document.getElementsByClassName('ban_wrap')[0].style.height=document.getElementsByClassName('content')[0].offsetParent.scrollHeight + 'px';
				},20);
			}
			
			
			function convertArray(arrayLike) {
				return Array.prototype.slice.call(arrayLike, 0);
			}
			
			function extend() {
				var args = Array.prototype.slice.call(arguments, 0);
				return args.reduce(function(prev, now) {
					for(var key in now) {
						if(now.hasOwnProperty && now.hasOwnProperty(key)) {
							prev[key] = now[key];
						}
					}
					return prev;
				});
			}
			
			//初始化swiper
			setTimeout(function() {
				var mySwiper = new Swiper('.swiper-container',{
					pagination: '.pagination',
					watchActiveIndex: true,
					paginationClickable: true,
					//设定初始化时slide的索引
					initialSlide :2,
					//设置为true时，鼠标覆盖Swiper时指针会变成手掌形状，拖动时指针会变成抓手形状。（根据浏览器形状有所不同）
					grabCursor : true,
					//设置slider容器能够同时显示的slides数量(carousel模式)。
					slidesPerView : 2,
					//设定为true时，active slide会居中，而不是默认状态下的居左。
					centeredSlides : true,
					onTouchEnd: function(swiper) {
						console.log(mySwiper.getWrapperTranslate('x'));
					},
				});
			}, 20);
			
			
		}
	}
</script>

<style>
	@import '../../static/libs/swiper/css/idangerous.swiper.css';
	
	.swiper {
	    position: relative;
	    height: 280px;
	    overflow: hidden;
	}
	.swiper-container {
	    /*-webkit-transform: translate3d(-20px,0,0);*/
	    /*-moz-transform: translate3d(-20px,0,0);*/
	    /*-ms-transform: translate3d(-20px,0,0);*/
	    /*-o-transform: translate3d(-20px,0,0);*/
	    /*transform: translate3d(-20px,0,0);*/
	    overflow: visible ! important;
	    margin-top: 10px;
	    width: 100%;
	    height: 250px;
	    text-align: center;
	}
	
	.swiper-slide {
	    height: 95%;
	    width: 180px;
	    overflow:hidden;
	    -webkit-transition: 300ms;
	    transition: 300ms;
	    border-radius: 6px;
	    -webkit-transform: scale(0);
	    transform: scale(0);
	    position: relative;
	}
	
	.swiper-item{
	    width: 290px;
	    position:absolute;
	    top:0;
	    left:50%;
	    transform: translateX(-50%);
	}
	
	.swiper-slide-visible {
	    -webkit-transform: scale(0.8);
	    transform: scale(0.8);
	}
	.swiper-slide-active {
	    top: 0;
	    opacity: 1;
	    -webkit-transform: scale(1.2);
	    transform: scale(1.2);
	}
	
	.pagination {
	    position: absolute;
	    z-index: 20;
	    left: 0px;
	    width: 100%;
	    text-align: center;
	    bottom: 5px;
	}
	.swiper-pagination-switch {
	    display: inline-block;
	    width: 7px;
	    height: 7px;
	    border-radius: 50%;
	    margin-right: 11px;
	    cursor: pointer;
	    -webkit-transition: 300ms;
	    transition: 300ms;
	    position: relative;
	    background: #FEDC00;
	    opacity: .5;
	}
	.swiper-active-switch {
	    width: 8px;
	    height: 8px;
	    margin-right: 12px;
	    opacity: 1;
	}
</style>