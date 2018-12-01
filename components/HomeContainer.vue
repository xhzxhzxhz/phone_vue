<template>
    <div class="app-homeContainer">
        <!--1.顶部导航条-->
        <div class="header">
            <span class="mui-icon-extra mui-icon-extra-sweep"></span>
            <div class="mui-input-row mui-search">
                <span class="mui-icon mui-icon-search"></span>
                <input type="search" class="mui-input-clear" placeholder="羊绒|瑞士男表|及踝靴" @keyup.13="toProductList">
            </div>
            <img src="http://127.0.0.1:3000/img/pc_bag.png" @click="toCart"/>
        </div>
        <!--nav-->
        <div class="nav">
            <ul>
                <li v-for="(item,index) in nav_list" v-text="item" :class="{active:index==isActive}" @click="active(index),div_show(index)"></li>
            </ul>
        </div>
        <div class="body" @click="toProductList">
            <div class="hw" v-show="shows[0].hw">
                <img src="http://127.0.0.1:3000/img/hw1.jpg">
                <img src="http://127.0.0.1:3000/img/hw3.jpg">
                <img src="http://127.0.0.1:3000/img/hw4.jpg">
                <img src="http://127.0.0.1:3000/img/hw5.jpg">
                <img src="http://127.0.0.1:3000/img/hw6.jpg" class="yb">
                <img src="http://127.0.0.1:3000/img/hw7.jpg" class="yb">
                <img src="http://127.0.0.1:3000/img/hw8.jpg" height="120px;">
                <img src="http://127.0.0.1:3000/img/hw9.jpg" class="yb">
                <img src="http://127.0.0.1:3000/img/hw10.jpg" class="yb">
                <img src="http://127.0.0.1:3000/img/hw11.jpg" class="yb">
                <img src="http://127.0.0.1:3000/img/hw12.jpg" class="yb">
                <img src="http://127.0.0.1:3000/img/hw13.jpg">
                <img src="http://127.0.0.1:3000/img/hw15.jpg" class="yb">
                <img src="http://127.0.0.1:3000/img/hw16.jpg" class="yb">
                <img src="http://127.0.0.1:3000/img/hw17.jpg" class="yb">
                <img src="http://127.0.0.1:3000/img/hw14.jpg" class="yb">
            </div>
            <div class="hw" v-show="shows[1].hw">
                <img src="http://127.0.0.1:3000/img/woman1.jpg">
                <img src="http://127.0.0.1:3000/img/woman2.jpg">
                <img src="http://127.0.0.1:3000/img/woman3.jpg" class="yb">
                <img src="http://127.0.0.1:3000/img/woman4.jpg" class="yb">
                <img src="http://127.0.0.1:3000/img/woman5.jpg"class="yb">
                <img src="http://127.0.0.1:3000/img/woman6.jpg" class="yb">   
            </div>
            <div class="hw" v-show="shows[2].hw">
                <img src="http://127.0.0.1:3000/img/man1.jpg">
                <img src="http://127.0.0.1:3000/img/man2.jpg">
                <img src="http://127.0.0.1:3000/img/man3.jpg" class="yb">
                <img src="http://127.0.0.1:3000/img/man4.jpg" class="yb">
                <img src="http://127.0.0.1:3000/img/man5.jpg" class="yb">
                <img src="http://127.0.0.1:3000/img/man6.jpg" class="yb">
                <img src="http://127.0.0.1:3000/img/man7.jpg" height="120px;">
                <img src="http://127.0.0.1:3000/img/hw9.jpg" class="yb">
                <img src="http://127.0.0.1:3000/img/hw10.jpg" class="yb">
                <img src="http://127.0.0.1:3000/img/hw11.jpg" class="yb">
                <img src="http://127.0.0.1:3000/img/hw12.jpg" class="yb">
                <img src="http://127.0.0.1:3000/img/hw13.jpg">
                <img src="http://127.0.0.1:3000/img/hw15.jpg" class="yb">
                <img src="http://127.0.0.1:3000/img/hw16.jpg" class="yb">
                <img src="http://127.0.0.1:3000/img/hw17.jpg" class="yb">
                <img src="http://127.0.0.1:3000/img/hw14.jpg" class="yb">
            </div>
            <div class="hw" v-show="shows[3].hw">
                <img src="http://127.0.0.1:3000/img/bag1.jpg">
                <img src="http://127.0.0.1:3000/img/bag2.jpg">
                <img src="http://127.0.0.1:3000/img/bag3.jpg" class="yb">
                <img src="http://127.0.0.1:3000/img/bag4.jpg" class="yb">
                <img src="http://127.0.0.1:3000/img/bag5.jpg" class="yb">
                <img src="http://127.0.0.1:3000/img/bag6.jpg" class="yb">
                <img src="http://127.0.0.1:3000/img/hw8.jpg" height="120px;">
                <img src="http://127.0.0.1:3000/img/hw9.jpg" class="yb">
                <img src="http://127.0.0.1:3000/img/hw10.jpg" class="yb">
                <img src="http://127.0.0.1:3000/img/hw11.jpg" class="yb">
                <img src="http://127.0.0.1:3000/img/hw12.jpg" class="yb">
                <img src="http://127.0.0.1:3000/img/hw13.jpg">
                <img src="http://127.0.0.1:3000/img/hw15.jpg" class="yb">
                <img src="http://127.0.0.1:3000/img/hw16.jpg" class="yb">
                <img src="http://127.0.0.1:3000/img/hw17.jpg" class="yb">
                <img src="http://127.0.0.1:3000/img/hw14.jpg" class="yb">
            </div>
            <div class="hw" v-show="shows[4].hw">
                <img src="http://127.0.0.1:3000/img/shoes1.jpg">
                <img src="http://127.0.0.1:3000/img/hw3.jpg">
                <img src="http://127.0.0.1:3000/img/hw4.jpg">
                <img src="http://127.0.0.1:3000/img/hw5.jpg">
                <img src="http://127.0.0.1:3000/img/hw6.jpg" class="yb">
                <img src="http://127.0.0.1:3000/img/hw7.jpg" class="yb">
                <img src="http://127.0.0.1:3000/img/hw8.jpg" height="120px;">
                <img src="http://127.0.0.1:3000/img/hw9.jpg" class="yb">
                <img src="http://127.0.0.1:3000/img/hw10.jpg" class="yb">
                <img src="http://127.0.0.1:3000/img/hw11.jpg" class="yb">
                <img src="http://127.0.0.1:3000/img/hw12.jpg" class="yb">
                <img src="http://127.0.0.1:3000/img/hw13.jpg">
                <img src="http://127.0.0.1:3000/img/hw15.jpg" class="yb">
                <img src="http://127.0.0.1:3000/img/hw16.jpg" class="yb">
                <img src="http://127.0.0.1:3000/img/hw17.jpg" class="yb">
                <img src="http://127.0.0.1:3000/img/hw14.jpg" class="yb">
            </div>
            <div class="hw" v-show="shows[5].hw">
                <img src="http://127.0.0.1:3000/img/zt1.jpg">
                <img src="http://127.0.0.1:3000/img/zt2.jpg">
                <img src="http://127.0.0.1:3000/img/hw4.jpg">
                <img src="http://127.0.0.1:3000/img/hw5.jpg">
                <img src="http://127.0.0.1:3000/img/hw6.jpg" class="yb">
                <img src="http://127.0.0.1:3000/img/hw7.jpg" class="yb">
                <img src="http://127.0.0.1:3000/img/hw8.jpg" height="120px;">
                <img src="http://127.0.0.1:3000/img/hw9.jpg" class="yb">
                <img src="http://127.0.0.1:3000/img/hw10.jpg" class="yb">
                <img src="http://127.0.0.1:3000/img/hw11.jpg" class="yb">
                <img src="http://127.0.0.1:3000/img/hw12.jpg" class="yb">
                <img src="http://127.0.0.1:3000/img/hw13.jpg">
                <img src="http://127.0.0.1:3000/img/hw15.jpg" class="yb">
                <img src="http://127.0.0.1:3000/img/hw16.jpg" class="yb">
                <img src="http://127.0.0.1:3000/img/hw17.jpg" class="yb">
                <img src="http://127.0.0.1:3000/img/hw14.jpg" class="yb">
            </div>
            <div class="hw" v-show="shows[6].hw">
                <img src="http://127.0.0.1:3000/img/children1.jpg">
                <img src="http://127.0.0.1:3000/img/hw3.jpg">
                <img src="http://127.0.0.1:3000/img/hw4.jpg">
                <img src="http://127.0.0.1:3000/img/hw5.jpg">
                <img src="http://127.0.0.1:3000/img/hw6.jpg" class="yb">
                <img src="http://127.0.0.1:3000/img/hw7.jpg" class="yb">
                <img src="http://127.0.0.1:3000/img/hw8.jpg" height="120px;">
                <img src="http://127.0.0.1:3000/img/hw9.jpg" class="yb">
                <img src="http://127.0.0.1:3000/img/hw10.jpg" class="yb">
                <img src="http://127.0.0.1:3000/img/hw11.jpg" class="yb">
                <img src="http://127.0.0.1:3000/img/hw12.jpg" class="yb">
                <img src="http://127.0.0.1:3000/img/hw13.jpg">
                <img src="http://127.0.0.1:3000/img/hw15.jpg" class="yb">
                <img src="http://127.0.0.1:3000/img/hw16.jpg" class="yb">
                <img src="http://127.0.0.1:3000/img/hw17.jpg" class="yb">
                <img src="http://127.0.0.1:3000/img/hw14.jpg" class="yb">
            </div>
        </div>
       
    </div>
</template>
<script>
    export default{
        data(){ return{
            nav_list:["黑五预热","女士","男士","箱包","鞋靴","专柜","儿童"],
            isActive:false,
            shows:[{hw:true},{hw:false},{hw:false},{hw:false},{hw:false},{hw:false},{hw:false}],
           
        } },
        methods:{
            active(index){
                this.isActive=index;

            },
            div_show(index){
                //当前元素的hw为true               
                var xxm=this.shows;
                xxm[index].hw=!xxm[index].hw;
                //除此之外的其他hw为false
                var xm1=xxm.slice(0,index);
                var xm2=xxm.slice(index+1);
                var xmm=xm1.concat(xm2);
                for(var i=0;i<xmm.length;i++){
                    xmm[i].hw=false;  
                }           
            },
            toProductList(){
                this.$router.push("/products");
            },
            toCart(){
                this.$router.push("/charge");
            }
        },
        created(){
            this.$store.state.footer_show=true;
        }
    }
</script>
<style scoped>
    /*自定义样式*/
    /*.app-homeContainer header.mint-header{
        background-color:#333;
    }*/
    .active{
        color:#f11;
        display:inline-block;
        border-bottom:2px solid #000;
    }
    .header{
        height:30px;
        margin:0;
        padding:6px 10px;
    }
    .nav{
        width:70%;
        height:20px;
        margin:0 auto;
        margin-top:5px;
    }
    .mui-icon-extra-sweep{
        height:18px;
        width:18px;
         width:10%;
    }
    .mui-input-clear{
        height:24px;
        border:1px solid rgba(200,200,255,.3);
    }
    .mui-input-row{
        height:25px;
        width:75%;
        display:inline-block;
        background:#fff !important;
        position:relative;
    }
    .mui-input-row input{
        background:#fff!important;
        font-size:10px!important;
        padding-left:30px!important;
    }
     .mui-input-row span{
         position:absolute;
         left:3px;
     }
    .header img{
        height:18px;
        width:18px;
        margin-left:30px;
    }
    .nav ul{
        list-style:none;
    }
    .nav ul li{
        float:left;
        font-size:12px;
        margin-left:10px;
    }
    .hw>img{
        width:100%;
    }
    .hw>.yb{
        width:50%;
    }
</style>