<template>
	<div class="carousel-wrap" id="carousel">
	    <!--// 轮播图列表-->
	    <transition-group tag="ul" class='slide-ul' name="list">
	      <li v-for="(list,index) in slideList" :key="index" v-show="index===currentIndex" @mouseenter="stop" @mouseleave="go">
	        <a :href="list.clickUrl" >
	          <img :src="list.image" :alt="list.desc">
	        </a>
	      </li>
	    </transition-group>
	    <!--// 轮播图位置指示-->
	    <div class="carousel-items">
	      <span v-for="(item,index) in slideList.length" :class="{'active':index===currentIndex}" @mouseover="change(index)"></span>
	    </div>
	</div>
</template>

<script>
	export default {
		data(){
			return {
		        slideList: [
		            {
		                "clickUrl": "#",
		                "desc": "nhwc",
		                "image": "http://dummyimage.com/1745x492/f1d65b"
		            },
		            {
		                "clickUrl": "#",
		                "desc": "hxrj",
		                "image": "http://dummyimage.com/1745x492/40b7ea"
		            },
		            {
		                "clickUrl": "#",
		                "desc": "rsdh",
		                "image": "http://dummyimage.com/1745x492/e3c933"
		            }
		        ],
		        currentIndex: 0,
		        timer: ''
			}
	    },
	    methods: {
	        go() {
	            this.timer = setInterval(() => {
	                this.autoPlay()
	            }, 4000)
	        },
	        stop() {
	            clearInterval(this.timer)
	            this.timer = null
	        },
	        change(index) {
	            this.currentIndex = index
	        },
	        autoPlay() {
	            this.currentIndex++
	            if (this.currentIndex > this.slideList.length - 1) {
	                this.currentIndex = 0
	            }
	        }
	    },
	    created() {
	        this.$nextTick(() => {
	            this.timer = setInterval(() => {
	                this.autoPlay()
	            }, 4000)
	        })
	    }
	}
</script>

<style>
	.carousel-wrap {
		position: relative;
		height: 453px;
		width: 100%;
		overflow: hidden;
	}
	
	.slide-ul {
		width: 100%;
		height: 100%;
	}
	.slide-ul li {
		position: absolute;
		width: 100%;
		height: 100%;
	}
	.slide-ul li img {
		width: 100%;
		height: 100%;
	}
	
	.carousel-items {
		position: absolute;
		z-index: 10;
		top: 380px;
		width: 100%;
		margin: 0 auto;
		text-align: center;
		font-size: 0;
	}
	.carousel-items span {
		display: inline-block;
		height: 6px;
		width: 30px;
		margin: 0 3px;
	 	background-color: #b2b2b2;
	  	cursor: pointer;
	}
	.carousel-items .active {
		background-color: red;
	}
	
	
	
	.list-enter-to {
	 	transition: all 1s ease;
	  	transform: translateX(0);
	}
	
	.list-leave-active {
	  	transition: all 1s ease;
	  	transform: translateX(-100%)
	}
	
	.list-enter {
	  	transform: translateX(100%)
	}
	
	.list-leave {
	  	transform: translateX(0)
	}
</style>