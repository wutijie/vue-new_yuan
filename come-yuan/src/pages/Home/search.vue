<template>
	<div class="full flex-grail">
<<<<<<< HEAD
		<Headers>
			<input type="text" v-model="search_cake" class="w100p h2d5r fs1r six666 bgcwhite br2r lh2d5r ph1r bsbb" slot="header_center" placeholder="情输入要搜索的甜品" />
		</Headers>
=======
		<headers>
			<input type="text" v-model="search_cake" class="w100p h2d5r fs1r six666 bgcwhite br2r lh2d5r ph1r bsbb" slot="header_center" placeholder="情输入要搜索的甜品" />
		</headers>
>>>>>>> 3a2f696f8743a4cebc005bbe6447162694bdf03c
		<main>
			<div class="ph3r fs1d1r">
				<p class="lh4r"><img class="w1d5r vam mr0d5r" src="../../assets/images/tab_find_normal.png"/>最近搜索</p>
				<span v-for="(item,index) in recent_search" class="dib br3px b1 pv0d5r ph1r mb1r mh0d5r">{{item}}<i @click="remove_recent(index)" class="fs1d5r fsn vam ml1r">╳</i></span>
			</div>
		</main>
	</div>
</template>

<script>
<<<<<<< HEAD
=======
	import Headers from '../../components/header'
>>>>>>> 3a2f696f8743a4cebc005bbe6447162694bdf03c
	
	export default {
		data(){
			return {
				search_cake:''
			}
		},
		computed:{
			recent_search(){
				return this.$store.getters.recent_search;
			}
		},
		components:{
<<<<<<< HEAD
			
=======
			Headers
>>>>>>> 3a2f696f8743a4cebc005bbe6447162694bdf03c
		},
		methods:{
			remove_recent(index){
				this.$store.commit("setRecentSearch",index);
//				this.recent_search.splice(index,1);
			}
		}
	}
</script>

<style>
</style>