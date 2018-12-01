import Vue from 'vue'
import App from './App.vue'
import router from './router'
import YDUI from 'vue-ydui';
import 'vue-ydui/dist/ydui.px.css';
import'mint-ui/lib/style.css'
import axios from 'axios'
import store from './store'
import {ScrollNav, ScrollNavPanel} from 'vue-ydui/dist/lib.px/scrollnav'
Vue.component(ScrollNav.name, ScrollNav);
Vue.component(ScrollNavPanel.name, ScrollNavPanel);
Vue.config.productionTip = false
 import './lib/mui/css/mui.css'
 import './lib/mui/css/icons-extra.css'
 axios.default.withCredentials=true//携带cookie去服务器端
 Vue.prototype.axios=axios;

import MintUI from "mint-ui";
Vue.use(MintUI);
Vue.use(YDUI);
//2.引入vue-resource 发送 ajax
//1.引入vue-resource库所有的组件
import VueResource from "vue-resource";
//--将所有组件注册
Vue.use(VueResource);


//配置VueResource 服务器根目录
Vue.http.options.root="http://127.0.0.1:3000/"
//配置post请求方法的修改请求头
//Vue.http.options.emulateJSON=true;

//4.创建Vuex实例对象
  //4.1下载安装Vue
  //4.2引入Vuex
  import Vuex from "vuex";
  //4.3注册Vuex实例
  

new Vue({
  router,
  render: h => h(App),
  store//5.将Vuex实例对象注册到vue实例中
}).$mount('#app')
