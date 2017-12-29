<template>
  <div class="button-wrapper">
  	<slot>
  	</slot>
  </div>
</template>

<script>
	export default {
	  name: 'hello',
	  data () {
	    return {
	    }
	  },
	  methods:{
	  }
	}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus" scoped="scoped">
	@import "../../common/stylus/mixin.styl"
</style>
