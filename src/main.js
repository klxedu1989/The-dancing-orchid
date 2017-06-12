import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import VueResource from 'vue-resource'

Vue.use(ElementUI);
Vue.use(VueResource);


import shouye from './component/shouye.vue'
import login from './component/login.vue'
import ruzhu from './component/ruzhu.vue'
import weixin from './component/weixin.vue'
import about from './component/about.vue'
import news1 from './component/news1.vue'

Vue.use(VueRouter);

const router = new VueRouter({
    routes:[{path:'/',component:shouye},{path:'/shouye',component:shouye},{path:'/login',component:login},{path:'/ruzhu',component:ruzhu},{path:'/weixin',component:weixin},{path:'/about',component:about},{path:'/news1',component:news1}]
})

new Vue({
    router,
  el: '#app',
  render: h => h(App)
})
