<template>
    <div class="fenleiContainer">
        <!--1.顶部导航条-->
        <div class="header">
            <span>分类</span>
            <span class="mui-icon mui-icon-search"></span>
            <img src="http://127.0.0.1:3000/img/pc_bag.png"/>
        </div>
        <div class="body">
            <ul>
                <li class="fl">
                    <router-link to="#">女士</router-link>
                    <router-link to="#">男士</router-link>
                    <router-link to="#">儿童</router-link>
                </li>
                <li>
                    <img src="http://127.0.0.1:3000/img/fl1.jpg">
                    <span>当季新品</span>
                    <span class="mui-icon mui-icon-forward"></span>
                </li>
                <li>
                    <img src="http://127.0.0.1:3000/img/fl2.jpg">
                    <span>服装</span>
                    <span class="mui-icon mui-icon-forward"></span>
                </li>
                <li>
                    <img src="http://127.0.0.1:3000/img/fl3.jpg">
                    <span>鞋靴</span>
                    <span class="mui-icon mui-icon-forward"></span>
                </li>
                <li>
                    <img src="http://127.0.0.1:3000/img/fl4.jpg">
                    <span>箱包</span>
                    <span class="mui-icon mui-icon-forward"></span>
                </li>
                <li>
                    <img src="http://127.0.0.1:3000/img/fl5.jpg">
                    <span>配件</span>
                    <span class="mui-icon mui-icon-forward"></span>
                </li>
                <li>
                    <img src="http://127.0.0.1:3000/img/fl6.jpg">
                    <span>腕表</span>
                    <span class="mui-icon mui-icon-forward"></span>
                </li>
                <li>
                    <img src="http://127.0.0.1:3000/img/fl7.jpg">
                    <span>美妆</span>
                    <span class="mui-icon mui-icon-forward"></span>
                </li>
            </ul>
        </div>
       
    </div>
</template>
<script>
    export default{
        data(){ return{

        } },
        methods:{
           
        },
        created(){
          this.$store.state.footer_show=true;
        }
    }
</script>
<style scoped>
    .header{
        padding-top:18px;
        box-sizing:border-box;
    }
   .header>span:first-child {
       margin-left:167px;
       height:20px;
       width:50px;
       display:inline-block;
   }
   .header .mui-icon{
        margin-left:38px;
        margin-right:10px;
   }
   .header img{
      margin-right:10px;
      display:inline-block;
      margin-right:0px;
   }
   .body ul{
       list-style:none;
       margin:0;
       padding:0;
       margin-top:20px;
   }
   .body ul li{
       display:block;
       border-top:1px solid #f5f5f5;
       padding:10px 10px;
       font-size:13px;
   }
   .body ul li img{
       width:20px;
       height:20px;
       margin-right:10px;
   }
   .body ul li:last-child{
       border-bottom:1px solid #f5f5f5;
   }
   .body ul .fl{
       display:flex;
       justify-content:space-around;
     
   }
   .body ul .fl>a{
        color:#000;
        font-size:15px;
   }
    .body ul li>span:last-child{
        float:right;
        font-size:15px;
    }
</style>