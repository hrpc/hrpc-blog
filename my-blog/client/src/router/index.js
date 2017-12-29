import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/components/Login'
import Index from '@/components/Index'
import Article from '@/components/Article'
Vue.use(Router)


const router = new Router({
  routes: [
  	{
  		path:'/',
  		redirect:'/index'
  	},
    {
      path: '/index',
      name: 'index',
      component: Index
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/article',
      name: 'article',
      component: Article
    },
    {
      path: '*',
      name: '/',
      component: Index
    }
  ]
})
router.beforeEach((to,from,next) => {
	if(to.meta.requireAuth){
		if(window.localStorage.getItem('token')){
			next()
		}else{
			next({
        path: '/login',
        query: {redirect: to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
    	})
		}
	}else{
		next()
	}
})
export default router