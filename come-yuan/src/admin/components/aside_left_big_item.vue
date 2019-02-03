<template>
	<div class="aside_left_big_item">
		<div @click="two_level_toggle" class="one_level">
			<Item :text="one_item[0]" :mark="one_item[1]"></Item>
		</div>
		<div :class="{ dn : !two_level_class }" class="two_level" v-for="elem in two_item">
			<Item :text="elem[0]" :mark="elem[1]"></Item>
		</div>
	</div>
</template>

<script>
	import Item from './aside_left_item.vue'
	export default {
		data(){
			return {
				one_item: [],
				two_item: [],
				two_level_class: false
			}
		},
		props: [ "one", "two" ],
		components: {
			Item
		},
		created(){
			this.one_item = this.one.split(",");
			for(let i=0;i<this.two.split(",").length;i++){
				this.two_item.push(this.two.split(",")[i].split(":"))
			}
			console.log(this.two_item)
			
		},
		methods:{
			two_level_toggle(){
				this.two_level_class=!this.two_level_class;
			}
		}
	}
</script>

<style>
</style>