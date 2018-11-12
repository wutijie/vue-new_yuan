<template>
	<footer class="box h4d9r fs1r pr tabbars zi1">
		<Item :class=" '/find' == $route.path ? 'active' : '' " txt="发现" mark="find">
			<p class="pt0d4r" slot="tabicon">
				<img v-show="'/find' != $route.path" class="w2d5r" src="../assets/images/tab_find_normal.png"/>
				<img v-show="'/find' == $route.path" class="w2d5r" src="../assets/images/tab_find_active.png"/>
			</p>
		</Item>
		<Item :class=" '/home' == $route.path ? 'active' : '' " txt="首页" mark="home">
			<p class="pt0d4r" slot="tabicon">
				<img v-show="'/home' != $route.path" style="margin-top: -2.5rem;" class="w4d5r" src="../assets/images/tab_home_normal.png"/>
				<img v-show="'/home' == $route.path" style="margin-top: -2.5rem;" class="w4d5r" src="../assets/images/tab_home_active.png"/>
			</p>
		</Item>
		<Item :class=" '/shopcar' == $route.path ? 'active' : '' " txt="甜购" mark="shopcar">
			<p class="pt0d4r" slot="tabicon">
				<img v-show="'/shopcar' != $route.path" class="w2d5r" src="../assets/images/tab_shopcar_normal.png"/>
				<img v-show="'/shopcar' == $route.path" class="w2d5r" src="../assets/images/tab_shopcar_active.png"/>
			</p>
		</Item>
	</footer>
</template>

<script>
	import Item from './item.vue'
	
	export default {
		components:{
			Item
		}
	}
</script>

<style>
	footer .active{
		color: #9CB3FC;
	}
</style>