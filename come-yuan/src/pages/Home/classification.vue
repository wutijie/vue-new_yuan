<template>
	<div class="bsbb ph1r pr zi1 classification">
		<div class="box bgcwhite tac dv fs1r">
<<<<<<< HEAD
			<div class="item" v-for="(elem,index) in home_classification">
				<img class="w3d8r mt1r mb0d5r" :src="elem.src"/>
				<p>{{elem.name}}</p>
=======
			<div class="item">
				<img class="w3d8r mt1r mb0d5r" src="../../assets/images/classifition01.png"/>
				<p>甜品推荐</p>
			</div>
			<div class="item">
				<img class="w3d8r mt1r mb0d5r" src="../../assets/images/classifition02.png"/>
				<p>餐厅排行</p>
			</div>
			<div class="item">
				<img class="w3d8r mt1r mb0d5r" src="../../assets/images/classifition03.png"/>
				<p>热门优惠</p>
			</div>
			<div class="item">
				<img class="w3d8r mt1r mb0d5r" src="../../assets/images/classifition04.png"/>
				<p>吃货点评</p>
			</div>
			<div class="item">
				<img class="w3d8r mt1r mb0d5r" src="../../assets/images/classifition05.png"/>
				<p>全部分类</p>
>>>>>>> 3a2f696f8743a4cebc005bbe6447162694bdf03c
			</div>
		</div>
	</div>
</template>

<script>
<<<<<<< HEAD
	export default{
		computed:{
			home_classification(){
				return this.$store.getters.home_classification;
			}
		}
	}
=======
>>>>>>> 3a2f696f8743a4cebc005bbe6447162694bdf03c
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