<template>
  <div id="app">
    	<router-view/>
  </div>
</template>

<script>
	//public components
	import Headers from './components/header.vue'
	import Tabbar from './components/tabbar.vue'
	export default {
	  name: 'App',
	  components: { Headers, Tabbar },
	}
</script>

<style>
	#app {
	  font-family: 'Avenir', Helvetica, Arial, sans-serif;
	  -webkit-font-smoothing: antialiased;
	  -moz-osx-font-smoothing: grayscale;
	  color: #2c3e50;
	  background: #F5F8FF;
    width: 100%;
    height: 100%;
    /*position: absolute;
    overflow: hidden;*/
	}
</style>
