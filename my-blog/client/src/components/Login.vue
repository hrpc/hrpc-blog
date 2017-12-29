<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <input type="text" placeholder="用户名" v-model="login.username"/>
    <input type="password" placeholder="用户名" v-model="login.password"/>
    <button @click="checkLogin">登录</button>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      login:{
      	username:null,
      	password:null
      }
    }
  },
  methods:{
  	checkLogin(){
			var _this = this
			this.$http.post(this.$domain + '/auth/login',this.login).then((res) => {
				if(res.data.message){
					window.localStorage.setItem('token',res.data.data)
					_this.$router.push('index')
				}
			})
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
