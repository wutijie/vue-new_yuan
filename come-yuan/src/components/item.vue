<template>
	<div @click="footer_tab" class="item tac pr nine999">
		<slot name="tabicon"></slot>
		<p class="centerh bottom pb0d6r">{{ txt }}</p>
	</div>
</template>

<script>
	export default {
		props: ['txt','mark','sel'],
		methods: {
			footer_tab: function(){
				this.$router.replace('/' + this.mark);
			}
		}
	}
</script>

<style>
</style>