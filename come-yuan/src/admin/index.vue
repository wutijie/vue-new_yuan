<template>
	<div class="admin">
		<admin-header></admin-header>
		<main class="box h100p bsbb">
			<admin-left></admin-left>
			<div class="item w60p h100p aside_right bsbb">
				<router-view/>
			</div>
		</main>
	</div>
</template>

<script>
	import AdminHeader from './components/header.vue'
	import AdminLeft from './components/aside_left.vue'
	export default {
		components:{
			AdminHeader,AdminLeft
		}
	}
</script>

<style>
	.admin{
		font-size: 16px!important;
		height: 100%;
		position: relative;
	}
	.admin>main{
		padding-top: 60px;
	}
	.admin .aside_right{
		overflow-y: scroll;
		padding: 10px;
	}
</style>