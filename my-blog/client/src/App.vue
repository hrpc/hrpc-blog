<template>
  <div id="app">
  	<div class="app-wrapper">
	    <router-view/>
  	</div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped="scoped">
#app
	min-height 100vh
	background-color #f5f5d5
	.app-wrapper
		max-width 1200px
		margin 0 auto
		
		@media only screen and (max-width: 1200px) {
			padding: 0 15px
		}
</style>
