<template>
	<div class="bsbb ph1r pr zi1 classification">
		<div class="box bgcwhite tac dv fs1r">
			<div class="item" v-for="(elem,index) in home_classification">
				<img class="w3d8r mt1r mb0d5r" :src="elem.src"/>
				<p>{{elem.name}}</p>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		computed:{
			home_classification(){
				return this.$store.getters.home_classification;
			}
		}
	}
</script>

<style>
	.classification{
		margin-top: -2.8rem;
	}
	.classification .dv{
		height: 7.8rem;
		border-radius: 8px;
		box-shadow: 0px 6px 20.58px 0.42px rgba(49, 105, 210, 0.16);
	}
</style>