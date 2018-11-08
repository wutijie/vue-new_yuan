<template>
	<div class="fs2r">
		侧边栏
	</div>
</template>

<script>
	export default {
		beforeRouteEnter(to,from,next){
			next(vm => {
				vm.$store.commit("setSidebar",true);
			});
		},
		beforeRouteLeave(to,from,next){
			this.$store.commit("setSidebar",false);
			next();
		}
	}
</script>

<style>
</style>