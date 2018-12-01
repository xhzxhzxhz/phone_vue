import Vue from 'vue'
import Vuex from 'vuex'
import * as localStorage from './localstorage'
Vue.use(Vuex)


const state = {
  user_datas:[],
  footer_show:true,//底部是否存在
  cartData:localStorage.cart!=undefined?JSON.parse(localStorage.cart):[],//购物车的json数据，如果localStorage.cart里面有数据就读取缓存中的数据，否则设置初始值为：[];
  priceTotal:localStorage.priceTotal!=undefined?localStorage.priceTotal:0,//缓存中有商品总价就读取,否则设置初始值为：0  
}
const getters={
  user_datas:state=>state.user_datas
}
const mutations={
  addCartData(state,data) {//添加购物车
    state.cartData=localStorage.cart!=undefined?JSON.parse(localStorage.cart):[];
    state.priceTotal=parseFloat(localStorage.priceTotal).toFixed(2);
    if(data.gid!='' && data.gid>0) { 
      let existGid=false,priceTotal=0;
      for(let i=0;i<state.cartData.length;i++) {      
      //如果购物车商品有重复修改数量和价格
        if (data.gid == state.cartData[i].gid) {
          state.cartData[i].amount++;
          state.cartData[i].price+=state.cartData[i].price;
          state.cartData[i].attrs=data.attrs;
          existGid=true; 
          break;  
        }  
      }
      //增加购物车商品   
      if(existGid==false){
        state.cartData.push(data);
      }
      //计算总价
      for(let i=0;i<state.cartData.length;i++) {
        priceTotal += (state.cartData[i].price * state.cartData[i].amount);
      }
      //console.log(JSON.stringify(state.cartData))
      state.priceTotal=priceTotal.toFixed(2);   
      localStorage.cart=JSON.stringify(state.cartData);
      localStorage.priceTotal=priceTotal.toFixed(2);
      
    }
    
  },
  delCart(state,data){//删除购物车里的宝贝
    let priceTotal=0; 
    state.cartData.splice(data.index,1); 
    for(let i=0;i<state.cartData.length;i++) {
        priceTotal += (state.cartData[i].price * state.cartData[i].amount); 
        aFreight.push(state.cartData[i].freight); 
    } 
    state.priceTotal=priceTotal.toFixed(2); 
    localStorage.priceTotal=priceTotal.toFixed(2);
    localStorage.cart=JSON.stringify(state.cartData);
  },
  SET_baseinfo(state,data){
    state.user_datas=data;//将传入的data赋给 state.user_datas
    localStorage.user_info.set(state)//然后将state存入localStorage.user_info
  },
  CLEAR_baseinfo(state,data){
    state.user_datas='';
    localStorage.user_info.set(state)
  }
}
const actions={
  set_baseinfo({commit},param){
    commit(SET_baseinfo,param)
  },
  clear_baseinfo({commit},param){
    commit(CLEAR_baseinfo)
  },
}
 export default new Vuex.Store({
   state,mutations,getters,actions
 })

