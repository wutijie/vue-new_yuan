<template>
	<div @click="aside_left_to" class="aside_left_item">
		<span>{{ text }}</span>
	</div>
</template>

<script>
	export default {
		props:["text","mark"],
		methods:{
			aside_left_to(){
				this.$router.push('/admin/' + this.mark);
			}
		}
	}
</script>

<style>
	.aside_left_item{
		line-height: 60px;
	}
	.aside_left_item span{
		margin-left: 20px;
	}
</style>