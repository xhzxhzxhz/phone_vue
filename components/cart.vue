<template>
    <div class="fenleiContainer">
        <div class="header">
            <span data-v-38a5e929="" class="mui-icon mui-icon-arrowleft" @click="back"></span>
            <div>
                <span class="mui-icon mui-icon-home"></span>
                <img src="http://127.0.0.1:3000/img/pc_bag.png" @click="Tocart"/>
                <span>(<b v-text="num"></b>)</span>
            </div>          
        </div>
        <div class="body">
            <a href="#" class="gimg"><img :src="list[0].pic"></a>
            <div class="product_info">
                <a href="#" class="info_title">新季</a>
                <span class="info_title1" v-text="list[0].title"></span>
                <div class="price">
                    <span v-text="list[0].new_price">￥1650</span>
                    <del v-text="list[0].old_price"></del>
                </div>
                <div class="kthy">
                    <a href="#" class="a1">金牌优惠</a>
                    <span>成为金牌会员下单减 <b style="color:blue;font-size:17px;font-weight:600;">70</b>元</span>
                    <a href="#" class="a2">开通会员></a>
                </div>
                <div class="text_trans">
                    <p>配送信息</p>
                    <p>商品预计5-7个工作日内送达，不同款的商品由于发货地不同可能发货时间不同，页面展示价格已包含税费，该商品若境外发货，如个人原因退货只退还商品金额。由于奢侈品的特殊性，建议您在实体店或官网了解体验后再下单。</p>
                </div>
                <div class="kf">
                    <a href="#" class="online">
                        <img src="http://127.0.0.1:3000/img/online.png">
                        <span>在线客服</span>
                    </a>
                    <a href="#" class="tel">
                        <img src="http://127.0.0.1:3000/img/tel.png">
                        <span>电话客服</span>
                    </a>
                </div>
                <div class="desc">
                    <p>商品描述</p>
                    <p>商品编号：<span>45674123</span></p>
                    <p>商品名称：<span v-text="list[0].title"></span></p>
                    <p>风格：<span>欧美</span></p>
                    <p>产地：<span>意大利等，由于批次不同产地存在差异，请以收到实物为准</span></p>
                    <p>适用季节<span>春夏秋冬</span></p>
                </div>
            </div>
            <div class="jg">
                <a href="#">
                    <img src="http://127.0.0.1:3000/img/online.png">
                </a>
                <a href="#" class="lg" @click.prevent="addGoods">立即购买</a>
                <a href="#" class="sg" @click.prevent="addGoods">加入购物袋</a>
               
            </div>
        </div>
    </div>
</template>
<script>
    import { Toast } from 'mint-ui'
    export default{
        data(){ return{ list:[{"pic":""},{"title":""},{"new_price":""},{"old_price":""}],pid:this.$route.params.pid,num:0}
        },
        methods:{
           back(){
                this.$router.go(-1);
            },
            getDetails(){
                this.$http.get("http://127.0.0.1:3000/details/",{params:{pid:this.pid}}).then(res=>{  
                    this.list=res.data;
                })
            },
            addGoods(){
                var res=JSON.parse(localStorage.getItem("data"));
                var uid=res.user_datas;
                if(!uid){  
                    this.$router.push("/login");
                }else{
                    this.$http.get("http://127.0.0.1:3000/cart/add",{params:{pid:this.pid,uid:uid}}).then(res=>{ 
                        if(res.data==1){
                            Toast("商品添加成功");
                            this.num++;
                        }
                    })
                }
            },
            Tocart(){
                 this.$router.push("/charge");
            }
        },
        created(){
            this.$store.state.footer_show=false;
            this.getDetails();
        }
    }
</script>
<style scoped>
    .header{
        border-bottom:1px solid #ddd;
        padding-bottom:6px;
        padding-top:6px;
        position:fixed;
        background:#fff;
        width:100%;
    }
   .header>div{
       float:right;
       margin-right:20px;  
   } 
   .header>div>span{
       margin-right:20px;
   }
   .body{
       box-sizing:border-box;
   }
   .gimg{
       width:100%;
       height:auto;
       display:block;
   }
   .info_title{
       margin:5px 13px;
       display:block;
       border:1px solid blue;
       width:50px;
       font-size:14px;
       text-align:center;
       color:#000;
   }
   .info_title1{
       font-size:15px;
       font-family:"simhei";
       margin:0 13px;
       display:inline-block;
   }
   .price{
       margin:0 13px;
   }
   .price>span{
       color: #c62026;
       font-weight:600;
       font-size:16px;
   }
   .kthy{
       position:relative;
       width:100%;
       background:#ddd;
       text-align:center;
       display:flex;
       box-sizing:border-box;
       padding:12px 0;
   }
   .kthy .a1{
       display:inline-block;
       border:1px solid blue;
       font-size:13px;
       color:blue;
       padding:2px 3px;
       height:28px;
       margin-right:10px;
   }
   .kthy .a2{
       display:inline-block;
       border:1px solid blue;
       font-size:13px;
       padding:13px 3px;
       width:100px;
       background:blue;
       color:#fff;
       height:100%;
       position:absolute;
       right:0;
       top:0;
       box-sizing:border-box;
   }
   .kthy span{
       font-size:13px;
    }
    .text_trans{
        margin:10px 13px;
    }
    .text_trans p{
        color:#000;
        font-family:"simhei";
    }
    .kf{
        margin:0 13px;
    }
    .kf img{
        width:30px;
        height:30px;
    }
    .online{
        display:inline-block;
        border-top:1px solid #000;
        border-bottom:1px solid #000;
        width:50%;
        border-right:1px solid #000;
        padding:5px 0;
        font-size:14px;
        color:#000;
        text-align:center;
    }
    .tel{
        display:inline-block;
        border-top:1px solid #000;
        border-bottom:1px solid #000;
        width:50%;
        padding:5px 0;
        font-size:14px;
        color:#000;
        text-align:center;
    }
    .jg{
        height:44px;
        border-top:1px solid #ddd;
        border-bottom:1px solid #ddd;
        width:100%;
        margin-top:10px;
        position:fixed;
        background:#fff;
        bottom:0;
    }
    .jg img{
        width:25px;
        height:25px;
        margin:10px 20px;
    }
    .lg,.sg{
        display:inline-block;
        width:100px;
        font-size:14px;
        padding:11px 0;    
        float:right;
        text-align:center;
        background:blue;
        color:#fff;
    }
    .sg{
        background:#aaa;
        color:#000;
    }
    .desc{
        margin:20px 10px;
    }
    .desc p{
        color:#000;
    }
</style>
