<template>
	<transition name="h_music">
		<div class="music white"
			@touchstart.stop.prevent="music_start"
			@touchmove.stop.prevent="music_move"
			@touchend.stop.prevent="music_end"
			>
			music
		</div>
	</transition>
</template>

<script>
	export default {
		data(){
			return {
				pos_start:0,
				pos_end:0
			}
		},
		beforeRouteEnter(to,from,next){
			const header_left_home=document.getElementsByClassName("header_left_home")[0];
			const header_left=document.getElementsByClassName("header_left")[0];
			header_left_home.style.display="none";
			header_left.style.display="block";
			next();
		},
		beforeRouteLeave(to,from,next){
			const header_left_home=document.getElementsByClassName("header_left_home")[0];
			const header_left=document.getElementsByClassName("header_left")[0];
			header_left_home.style.display="block";
			header_left.style.display="none";
			next();
		},
		methods:{
			music_start(e){
				this.pos_start=e.touches[0].clientY;
			},
			music_move(e){
				
			},
			music_end(e){
				this.pos_end=e.changedTouches[0].clientY;
				if(this.pos_start-this.pos_end > 100){
					this.$router.go(-1)
				}
			}
		}
	}
</script>

<style>
	.music{
		width: 100%;
		height: 100%;
		background: rgba(0,0,0,0.7);
	}
	.h_music-enter-active, .h_music-leave-active {
		top: 0;
		transition: all 1s;
	}
	.h_music-enter, .h_music-leave-to {
		top: -100%;
		transition: all 1s;
	}
</style>