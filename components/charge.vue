<template>
    <div class="chargeContainer">
         <div class="header">
            <span data-v-38a5e929="" class="mui-icon mui-icon-arrowleft" @click="back"></span>
            <div>
                <span class="mui-icon mui-icon-home" @click="Tohome"></span>
            </div>          
        </div>
        <div class="section">
            <ul>
                <li v-for="(item,index) in goodlist" >
                    <a href="#" class="close" @click.prevent="deleteItem(item.iid,index)"><span>×</span></a>
                    <a href="#" class="input" @click.prevent="selectItem(index),TotalPrice(index)">
                        <input type="checkbox" class="input_box1" :key="index">
                    </a>
                    <a href="#" class="good_img">
                        <img :src="item.pic" alt="">
                    </a>
                    <div class="info">
                        <p v-text="item.title"></p>
                        <p>
                            <span>颜色: <b>白色</b></span>
                            <span>尺码:<b>M</b></span>    
                        </p>
                    </div>
                    <p class="seven">
                        <img src="http://127.0.0.1:3000/img/7.jpg" alt="">
                        <span>不支持7天无理由退换货</span>
                    </p>
                    <div class="price">
                        <span v-text="item.new_price"></span>
                        <del v-text="item.old_price"></del>
                    </div>
                </li>
            </ul>
        </div>
        <div class="footer">
            <div class="left">
                <a href="#" class="input" @click.prevent="selectedAll" v-bind:style="checked1" @click="all">
                    <input type="checkbox" class="input_box selectedAll" v-model="dd1">
                </a>
                <span class="qx">全选</span>
                <span>总金额： ￥<b v-text="totalPrice"></b></span>
            </div>
            <div class="right">
                <a href="#" @click.prevent="Tojiesuan">结算</a>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        data(){ return{num:1,goodlist:[],checked1:"",y:40,y1:17,dd1:false,totalPrice:0 }
        },
        methods:{
           back(){
               this.$router.go(-1);
           },
           getGoods(){
                var res=JSON.parse(localStorage.getItem("data"));
                var uid=res.user_datas;
                this.$http.get("http://127.0.0.1:3000/cart/items",{params:{uid:uid}}).then(res=>{  
                    this.goodlist=res.data;
                    for(var i=0;i<this.goodlist.length;i++){
                        //this.count_price+=this.goodlist[i].pc_price;
                    }
                
                });
           },
           selectItem(index){
                var a1=document.getElementsByClassName("input");//找到所有a元素
                var a=document.getElementsByClassName("input_box1");//找到所有复选框
                var e=a[index];//找到每个input
                var s=a1[index];//找到每个a
                if(this.y==40) {
                    this.y=-43;
                    s.style=`background-position: 12px -43px;`
                    e.checked=true;
                }
                else{
                    this.y=40;
                    s.style=`background-position: 12px 40px;`
                    e.checked=false;
                } 

                var ff=[];     
                var chc;
                for(var i=0;i<a.length;i++){
                    chc=a[i];//找到每个input
                    if(chc.checked==true){
                        ff.push(chc);
                    }    
                  
                }
                if(ff.length==this.goodlist.length){
                    this.checked1=`background-position: 12px -68px;`
                    this.dd1=true;
                }else{
                    this.checked1=`background-position: 12px 17px;`
                    this.dd1=false;
                }
           },
            selectItem1(){
                if(this.y==17){
                    this.y=-68;
                    this.checked1=`background-position: 12px -68px;`
                    this.dd1=true;
                } 
                else {
                    this.y=17;
                    this.checked1=`background-position: 12px 17px;`
                    this.dd1=false;
                }
                
                
            },
            //全选
            selectedAll(){
                if(this.y1==17){
                    this.y1=-68;
                    this.checked1=`background-position: 12px -68px;`
                    this.dd1=true;
                    for(var i=0;i<this.goodlist.length;i++){
                        var a1=document.getElementsByClassName("input");//找到所有a元素
                        var a=document.getElementsByClassName("input_box1");//找到所有复选框
                        var s=a1[i];//找到每个a
                        var e=a[i];//找到每个input
                        s.style=`background-position: 12px -43px;`
                        e.checked=true;
                    }
                } 
                else {
                    this.y1=17;
                    this.checked1=`background-position: 12px 17px;`
                    this.dd1=false;
                    for(var i=0;i<this.goodlist.length;i++){
                        var a1=document.getElementsByClassName("input");//找到所有a元素
                        var a=document.getElementsByClassName("input_box1");//找到所有复选框
                        var s=a1[i];//找到每个a
                        var e=a[i];//找到每个input
                        s.style=`background-position: 12px 40px;`
                        e.checked=false;
                    }
                }                
            },
            deleteItem(iid,index){
                this.goodlist.splice(index,1);              
                this.$http.get("http://127.0.0.1:3000/cart/update",{params:{iid:iid,count:0}}).then(res=>{  
                    this.cart_list=res.data;
                    console.log(this.cart_list);
                })
                location.reload();
            },
            //总价
            TotalPrice(index){
                var number=document.getElementsByClassName("yd-spinner-input");//找到每个input
                var num=number[index];//找到对应的input
                var price=this.goodlist[index].new_price//找到对应的price
                var a=document.getElementsByClassName("input_box1");//找到所有复选框    
                var e=a[index];//每个复选框
                if(this.totalPrice>=0){
                    if(e.checked==true){
                        this.totalPrice+=parseFloat(price.slice(1));
                    }else {
                        this.totalPrice-=parseFloat(price.slice(1));
                    }
                }
               
            },
            all(){
                if(this.dd1==true){
                    for(var i=0;i<this.goodlist.length;i++){
                        var price=this.goodlist[i].new_price;
                        price=parseFloat(price.slice(1));
                        this.totalPrice+=price;
                    }
                }else{
                    this.totalPrice=0;
                }
            },
            Tojiesuan(){
                this.$router.push("/jiesuan/"+this.totalPrice);
            },
            Tohome(){
                this.$router.push("/home");
            }

        
        },
        created(){
          this.$store.state.footer_show=false;
          this.getGoods();
         
         
        },
     
    }
</script>
<style scoped>
    .header{
        border-bottom:1px solid #ddd;
        padding:9px;
    }
   .header>div{
       float:right;
       margin-right:20px;  
   } 
   .header>div>span{
       margin-right:20px;
   }
   .section ul li{
       display:block;
       height:130px;
       border-bottom:1px solid #ddd;
       position:relative;
   }
   .close{
       display:inline-block;
       width:20px;
       height:20px;
       border:1px solid #aaa;
       border-radius:50%;
       text-align:center;
       color:#aaa;
       position:absolute;
       right:10px;
      top:7px;
   }
   .close span{
       display:block;
   }
    .input{
        float: left;
        width: 30px;
        background: url("http://127.0.0.1:3000/img/checkbox.png") 12px 40px no-repeat;
        background-size: 16px;
        width: 30px;
        height: 94px;
        margin: 0px;
        display: inline-block;
    }
     .input input{
        display:none; 
     }
     .good_img>img{
         width:100px;
         height:110px;
     }
     .info{
         position:absolute;
         top:10px;
         right:43px;
         width:50%;
     }
     .info>p:first-child{
         width:70%;
         overflow:hidden;
         text-overflow:ellipsis;
         white-space:nowrap;
         font-size:14px;
         color:#000;
     }
     .info>p:last-child{
         font-size:13px;
         color:#000;
     }
     .info>p:last-child>span{
         display:inline-block;
         margin-right:10px;
     }
     .seven{
         position:absolute;
         right:82px;
         top:68px;
     }
     .seven img{
         width:17px;
         height:17px;
     }
     .price{
         display:inline-block;
         position:absolute;
         right:146px;
         top:92px;
     }
    .price span{
        color:#C62026;
        font-size:14px;
        display:inline-block;
        margin-right:10px;
    }
    .price del{
        color:#000;
        font-size:14px;
    }
    .number{
        position:absolute;
        right:5px;
        bottom:2px;
    }
   
     .footer{
         position:fixed;
         bottom:0;
         background:#fff;
         font-size:14px;
         width:100%;
         border-top:1px solid #f5f5f5;
         box-sizing:border-box;
     }
     .left{
        float: left;
        min-width: 185px;
        line-height: 48px;
     }
     .left a{
        background:url("http://127.0.0.1:3000/img/checkbox.png") 13px 17px no-repeat;
        background-size: 16px;
        width: 30px;
     }
     .left .input{
         height:50px;
     }
     .qx{
         margin-left: 5px;
         display: inline-block;
         margin-right:10px;
     }
     .right>a{
        float:right;
        width: 130px;
        height: 47px;
        line-height: 47px;
        background-color: #0700c5;
        color: #fff;
        font-size: 17px;
        text-align: center;
     }
   
</style>
