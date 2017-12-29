<template>
  <div class="dialog-wrapper">
  	<slot name='footer_btn'>
  		<a href="javascript:;">确定</a>
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
<style type="text/css">
	asd{
		text-decoration: underline;
		cursor: pointer;
	}
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus" scoped="scoped">
	@import "../../common/stylus/mixin.styl"
</style>
