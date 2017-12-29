<template>
  <div class="index-wrapper">
  	<p class="noData" v-if="result.length === 0 ">
  		暂时没有文章哦<router-link to='article'>去添加</router-link>
  	</p>
  	<router-link to='article'>添加文章</router-link>
  	<div v-for="item in result">
  		<img src="./images/img2.jpg" width="50px"/>
  		<h2>{{item.title}}</h2>
  		<p>{{item.body}}</p>
  	</div>
  	<img src="./images/img1.jpg" width="50px"/>
  </div>
</template>

<script>
	import fetch from 'api/api'
	export default {
	  name: 'hello',
	  data () {
	    return {
	    	result:[],
	    	showDialog:false,
	    	resData:{
	    		accountNo:'12121212121212121'
	    	},
	    	accountNo:'',
	    	oldAccountNo:''
	    }
	  },
	  mounted(){
	  	this.initData()
	  },
	  computed:{
	  },
	  methods:{
	  	save(){
	  		if(this.accountNo.indexOf('*') < 0){
	  			console.log(this.accountNo)
	  		}else{
	  			console.log(this.oldAccountNo)
	  		}
	  	},
	  	initData(){
	  		let _this = this
	  		fetch('get',this.$domain + '/article/getAll').then( res => {
						if(res.message){
							this.result = res.data
						}
	  		})
	  	},
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
		.input
			color transparent
			text-shadow 0 0 0 #000
		.noData
			margin 0
			text-align center
			.link
				color blue
				text-decoration underline
				cursor pointer
</style>
