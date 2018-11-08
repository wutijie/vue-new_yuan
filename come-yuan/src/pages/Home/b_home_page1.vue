<template>
	<div class="">
		page1
	</div>
</template>

<script>
	export default {
		// 组件内的守卫
		beforeRouteEnter:(to,from,next) => {
			// this.$store.dispatch("setUser",null);
			// next(vm => vm.$store.dispatch("setUser",null))
		},
	}
</script>

<style>
</style>