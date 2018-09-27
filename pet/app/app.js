import Vue from 'vue'
import  app from "./app.vue"
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload, {
  preLoad: 1.3,
  loading: '../assets/12345.gif',
  attempt: 3
})

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper)

import VueTouch from 'vue-touch'
Vue.use(VueTouch, {name: 'v-touch'});
const routes = [
  { path: '/index', "name": "主页", component: require("./views/index/index.vue").default },
  { path: '/dog', "name": "详情页1", component: require("./views/detail/dog.vue").default },
  { path: '/parrot', "name": "详情页2", component: require("./views/detail/parrot.vue").default },
  { path: '/kolkie', "name": "详情页3", component: require("./views/detail/kolkie.vue").default },
  { path: '/cat', "name": "详情页4", component: require("./views/detail/cat.vue").default },
  { path: '/thhings',
    name:"新鲜事",
    component: require("./views/NThings/index.vue").default,
  },
  {path:'/knowledge',
    name:"涨知识",
    component:require("./views/knowledge/index.vue").default
  },
  {path:'/LAGraffiti',
    name:"看涂鸦",
    component:require("./views/LAGraffiti/index.vue").default
  },
  {path:'/Monographic',
    name:"萌专题",
    component:require("./views/Monographic/index.vue").default
  },
  {
    path:'/Cosmetology',
    name:"美容",
    component:require("./views/Cosmetology/index.vue").default
  },
  {path:'/Hospital',
    name:"医院",
    component:require("./views/Hospital/index.vue").default
  },
  {path:'/shop',
    name:"店铺",
    component:require("./views/shop/index.vue").default
  },
  { path: '*', redirect: '/index' },
]
const router = new VueRouter({
  routes
})
new Vue({
  el:"#app",
  router,
  render:h=>h(app)
})
