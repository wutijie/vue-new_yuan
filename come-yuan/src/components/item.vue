<template>
	<div @click="footer_tab" class="item tac">
		<slot name="tabicon"></slot>
		<p>{{ txt }}</p>
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