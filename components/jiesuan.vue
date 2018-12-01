<template>
    <div class="fenleiContainer">
        <!--1.顶部导航条-->
        <div class="header">
            <span class="mui-icon mui-icon-arrowleft" @click="back"></span>
            <span>提交订单</span>
        </div>
        <div class="notice">
            <p><img src="http://127.0.0.1:3000/img/！.png" alt="">温馨提示：订单中包含有不支持7天无理由退换的商品，请在配送及商品信息中确认后提交订单。</p>
        </div>
        <div class="info">
            <yd-cell-group>
                <yd-cell-item>
                    <span slot="left">姓名：</span>
                    <input slot="right" type="number" placeholder="请输入收货人姓名">
                </yd-cell-item>
                <yd-cell-item>
                    <span slot="left">手机号：</span>
                    <input slot="right" type="number" placeholder="请输入手机号">
                </yd-cell-item>
                 <yd-cell-item>
                    <span slot="left">地址：</span>
                    <input slot="right" type="number" placeholder="请输入地址">
                </yd-cell-item>
                <yd-cell-item arrow type="label">
                    <select slot="right">
                        <option value="">支付方式</option>
                        <option value="1">支付宝</option>
                        <option value="2">微信</option>
                        <option value="3">财付通</option>
                    </select>
                </yd-cell-item>
            </yd-cell-group>
        </div>

        <div class="zfmoney">
            <p>价格： ￥<span v-text="totalPrice"></span></p>
            <p>运费：<span>￥0.0</span></p>
            <p>应付金额：￥<span v-text="totalPrice"></span></p>
        </div>
        <div class="bottom">
            <span>应付金额： ￥<b v-text="totalPrice"></b></span>
            <a href="#">提交订单</a>
        </div>
    </div>
</template>
<script>
   import { Toast } from 'mint-ui'
    export default{
        data(){
            return{totalPrice:this.$route.params.totalPrice} 
        },
        methods:{
           back(){
               this.$router.go(-1);
           },
        },
        created(){
          this.$store.state.footer_show=false;
        }
    }
</script>
<style scoped>
   .header{
       display:flex;
       justify-content:space-between;
       margin:5px 10px;
       font-size:15px;
       padding:10px;
       border-bottom:1px solid #ddd;
   }
   .header span:last-child{
       margin:0 auto;
   }
   .notice{
       background:#F6F6F6;
   }
   .notice img{
       vertical-align:middle;
   }
   .yd-cell-right select{
       color:#000!important;
   }
   .zfmoney{
       background:#f6f6f6;
       padding:10px 5px;
   }
   .bottom{
       position:fixed;
       bottom:0;
       height:50px;
       background:#f6f6f6;
       width:100%;
       vertical-align:middle;
   }
   .bottom a{
       width:110px;
       padding:15px 20px;
       display:block;
       background:blue;
       color:#fff;
       float:right;
   }
   .bottom span{
       margin-top:11px;
       margin-left:10px;
       float:left;
   }
</style>