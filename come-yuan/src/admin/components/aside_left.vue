<template>
	<div class="item flexnone w20p h100p aside_left">
		<Bitem one="首页,admin_home_swiper" two="轮播图:admin_home_swiper,2:admin_find"></Bitem>
		<Bitem one="发现,admin_find" two="1:admin_find,2:admin_find"></Bitem>
	</div>
</template>

<script>
	import Bitem from './aside_left_big_item.vue'
	export default {
		components:{
			Bitem
		}
	}
</script>

<style>
	.aside_left{
		background: #2f3f56;
		color: #fff;
	}
	.aside_left .two_level{
		padding-left: 30px;
		background: #1e2a40;
	}
	.aside_left .one_level div:hover{
		background: #19293b;
	}
	.aside_left .two_level div:hover{
		color: #2196f3;
	}
</style>