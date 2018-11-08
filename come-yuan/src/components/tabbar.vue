<template>
	<footer class="box h4d9r fs1d5r pr">
		<Item :class=" '/home' == $route.path.slice(0,5) ? 'active' : '' " txt="首页" mark="home">
			<p slot="tabicon">home</p>
		</Item>
		<Item :class=" '/mine' == $route.path.slice(0,5) ? 'active' : '' " txt="我的" mark="mine">
			<p slot="tabicon">main</p>
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