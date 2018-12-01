<template>
    <div class="app-goodslist">
        <div class="header">
            <span class="mui-icon mui-icon-arrowleft" @click="back"></span>
            <span class="text">尖货清单剁手攻略</span>
            <span class="mui-icon mui-icon-search"></span>
            <img src="http://127.0.0.1:3000/img/pc_bag.png"/>
        </div>
        <yd-list theme="1">
            <yd-list-item v-for="item, key in list" :key="key">
                <img slot="img" :src="item.pic" @click="ToDetails(item.pid)">
                <span slot="title" id="brand">{{item.brand}}</span>
                <yd-list-other slot="other">
                    <div>
                        <span class="demo-list-price">{{item.title}}</span>
                        <span class="demo-list-del-price">{{item.price}}</span>
                    </div>
                </yd-list-other>
            </yd-list-item>
        </yd-list>
    </div>
</template>
<script>
    export default{
        data(){
            return{
               list: [ ],
               kwords:"GUCCI",
            }
        },
        methods:{
            getGoods(){
                this.axios.get("http://127.0.0.1:3000/products/",{params:{kwords:this.kwords,pno:0}}).then( (res) => {
                    this.list = res.data.products;
                });
             
            },
            back(){
                this.$router.go(-1);
            },
            ToDetails(pid){
                this.$router.push("/cart/"+pid);
            }
        },
        created() {
            this.getGoods();
            this.$store.state.footer_show=true;
        },
    }
</script>
<style scoped>
    .header{
        width:100%;
        height:25px;
        border-bottom:1px solid #aaa;
        display:flex;
        justify-content:space-between;
    }
   .header .text {
       height:20px;
       display:inline-block;
       font-size:17px;
       margin-left:48px;
   }
   .header .mui-icon{
        margin-right:10px;
   }
   
   .header img{
      margin-right:10px;
      display:inline-block;
      margin-left:-31px;
   }
    .app-goodslist{
        display:flex;
        flex-wrap:wrap;
        justify-content:space-between;
        padding:7px;
    }
    .app-goodslist .goods-item{
        width:49%;
        border:1px solid #ccc;
        box-shadow:0 0 8px #ccc;
        margin:4px 0;
        padding:2px;
        display:flex;
        flex-direction:column;
        justify-content:space-between;
        min-height:293px;
    }
    .app-goodslist .goods-item img{
        width:100%;
    }
    .app-goodslist .goods-item .now{
        color:red;
        font-weight:bold;
        font-size:16px;
    }
    .app-goodslist .goods-item .old{
        font-size:12px;
        text-decoration:line-through;
        margin-left:10px;
    }
    .yd-list-item{
        height:275px!important;
    }
    .yd-list-img img{
        height:265px!important;
        margin-top:-99%!important;
    }
    #brand{
         text-align:center!important;
         display:block;
         margin:0 auto;
    }
     .yd-list-title span{
        font-size:14px;
        color:#000;
        font-weight:normal;
    }
    .yd-list-other>div{
        width:100%;
        text-align:center;
    }
    .yd-list-other span{
        font-size:14px;
        color:#000;
        font-weight:normal;
        display:block;
    }
    .demo-list-del-price{
        color:#C62026!important;
    }
</style>