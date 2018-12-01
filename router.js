import Vue from 'vue'
import Router from 'vue-router'
//1.引入自定义组件
import HomeContainer from "./components/HomeContainer.vue"
import brand from "./components/brand.vue"
import fenlei from "./components/fenlei.vue"
import personal from "./components/personal.vue"
import login from "./components/login.vue"
import register from "./components/register.vue"
import products from "./components/products.vue"
import cart from "./components/cart.vue"
import charge from "./components/charge.vue"
import jiesuan from "./components/jiesuan.vue"
Vue.use(Router)

//2.配置访问自定义组件路径
// path-->访问路径  component-->组件名称
export default new Router({
  routes: [
    {path:'/',redirect:"/home"},
    {path:"/home",component:HomeContainer},
    {path:"/fenlei",component:fenlei},
    {path:"/personal",component:personal},
    {path:"/login",component:login},
    {path:"/register",component:register},
    {path:"/brand",component:brand},
    {path:"/products",component:products},
    {path:"/cart/:pid",component:cart,props:true},
    {path:"/charge",component:charge},
    {path:"/jiesuan/:totalPrice",component:jiesuan,props:true}
  ]
})
//测试路径：http://127.0.0.1:3001/#/home