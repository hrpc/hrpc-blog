// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import axios from 'axios'
import router from './router'
import {baseUrl,appid,authUrl,regOpen} from './config/env'
import '@/common/stylus/common.styl'

Vue.config.productionTip = false
Vue.prototype.$http = axios;
Vue.prototype.$domain = baseUrl;

//axios拦截器
axios.interceptors.request.use(
	config => {
		let token = window.localStorage.getItem('token')
		if(token){
			config.headers.Authorization = `token ${token}`;
		}
		return config;
	},
	err => {
	    return Promise.reject(err);
	}
);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
