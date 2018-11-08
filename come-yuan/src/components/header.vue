<template>
	<header class="h4d4r bgc9pur pr fs1d5r white zi3">
		<span v-show="!backShow" @click="leftNav" class="centerv ml1r fs2r w2d5r header_left_home">
			<img class="w100p" src="../assets/images/header_left.png"/>
		</span>
		<span v-show="backShow" @click="goBack" class="centerv ml1r fs2r header_left"><i class="el-icon-arrow-left"></i></span>
		<span class="center">{{ title }}</span>
		<span class="centerv right mr1r w2d5r">
			<slot name="header_right"></slot>
		</span>
	</header>
</template>

<script>
	
	export default {
		props:['title'],
		data(){
			return {
				backShow:true
			}
		},
		created(){
			const ispaths = ['/','/home','/home_slider','/mine','/mine_slider'];
			if( ispaths.includes(this.$route.path) ){
				this.backShow = false;
			}else{
				this.backShow = true;
			}
		},
		methods:{
		  	goBack(){
		  		window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
			},
			leftNav(){
				if(this.$route.path == "/home"){
					this.$router.push("/home_slider");
				}else{
					this.$router.push("/mine_slider");
				}
			}
		}
	}
</script>

<style>
</style>