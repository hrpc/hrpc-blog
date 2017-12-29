<template>
  <div class="article-wrapper">
  	添加文章页
  	<label for="title" class="title">文章标题
  		<input type="text" id="title" v-model="article.title"/>
  	</label>
  	<label for="body">文章内容
  		<textarea name="body" id="body" v-model="article.body"></textarea>
  	</label>
  	<mybutton>
  		<a href="javascript:;" @click="save">提交</a>
  	</mybutton>
  </div>
</template>

<script>
	import mybutton from 'common/button/button'
	export default {
	  name: 'hello',
	  data () {
	    return {
	    	article:{
	    		title:'',
	    		body:'',
	    		createTime:new Date()
	    	}
	    }
	  },
	  mounted(){
	  	let list = document.querySelector('.title')
	  	console.log(list.childNodes[0].nextElementSibling)
	  },
	  components:{
	  	mybutton
	  },
	  methods:{
	  	save(){
	  		this.$http.post(this.$domain + '/article/create',this.article).then(res => {
	  			console.log(res)
	  		})
	  	}
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
	@import "../common/stylus/mixin.styl"
	.index-wrapper
		max-width 1200px
		margin 0 auto
		.noData
			margin 0
			text-align center
			.link
				color blue
				text-decoration underline
				cursor pointer
</style>
