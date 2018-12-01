<template>
    <div class="brandContainer">
        <div class="header">
            <span>品牌</span>
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
            </ul>
            <div class="sy" :style="scrolltop">
                <div class="bimg">
                    <img src="http://127.0.0.1:3000/img/brand1.jpg">
                    <img src="http://127.0.0.1:3000/img/brand2.jpg">
                    <img src="http://127.0.0.1:3000/img/brand3.jpg">
                    <img src="http://127.0.0.1:3000/img/brand4.jpg">
                    <img src="http://127.0.0.1:3000/img/brand5.jpg">
                    <img src="http://127.0.0.1:3000/img/brand6.jpg">
                    <img src="http://127.0.0.1:3000/img/brand7.jpg">
                    <img src="http://127.0.0.1:3000/img/brand8.jpg">
                    <img src="http://127.0.0.1:3000/img/brand9.jpg">
                </div>
                <yd-cell-group>
                    <yd-cell-item  v-for="item in brandList">
                        <span slot="left">{{item}}</span>
                    </yd-cell-item>
                </yd-cell-group> 
                <!--字母索引-->
                <div v-if="showLetterList" class="le">
                    <a v-for="letter in Letters" style="display:block;font-size: 14px;margin-top: 1px" @click="jumper(letter)">
                        <span>{{letter}}</span>
                    </a>
                    <a style="display: block"  @click="jumper('#')">#</a>
                </div>
            </div>
           
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                fullHeight: document.documentElement.clientHeight,
                showLetter:false,
                showLetterList:true,
                letter:'',
                Letters:['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'],
                panelShow:false,
                brandList:["A&D","DGD","DSGD","ETER","TEWT","STERT","WERWE","BDSD","EWR","YUYI","ETEERT","RTRY","WERWER","WER","QWE","WEW","YUY","EWRWT","ERT","RET","IO","PIUYI","CFGFD","ASD","ASWR"],
                scrolltop:0,
            }
        },
        computed:{
            scrollHeight(){
                return (Number(this.fullHeight)-94)+'px';
            }
        },
        filters:{
            
        },
        methods:{
            //按字母顺序排序
            stringSort(str) {
                if(typeof str === 'string')
                    str = str.split(',');
                if (!Array.isArray(str)) {
                    return str;
                }
                str.sort();
                return str.join();
            },
            hidePanel(){
                this.panelShow = false;
            },
            showPanel(){
                this.panelShow = true;
            },
            //字母索引锚点定位
            jumper(key){
                if (key=='#') {
                     $('.sy').animate({
                         scrollTop:0
                    },100)
                    return;
                }else{
                    this.letter=key;
                    var _this=this;  
                    //点击侧边字母后屏幕中间的字母也显示,500毫秒隐藏
                    if(this.showLetter==false){
                    this.showLetter=true;
                    setTimeout(function(){
                        _this.showLetter=false;
                    },500)
                    }else{
                    this.showLetter=false;
                    }
                    var el = document.getElementById(key);
                if(el){
                    var scrollPosition= el.offsetTop;
                    $('.sy').animate({
                            scrollTop:scrollPosition
                        },100)
                    } 
                }
            }
        },
        created() {
            this.stringSort(this.brandList);
            this.$store.state.footer_show=true;
        },
    }


</script>

<style scoped>
    .header{
        border-bottom:1px solid #ddd;
        padding:10px 0;
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
   }
   .body ul li{
       display:block;
       padding:10px 10px;
       font-size:13px;
   }
     .body ul .fl{
       display:flex;
       justify-content:space-around;
       border-bottom:1px solid #ddd;
   }
   .body ul .fl>a{
        color:#000;
        font-size:15px;
   }
   .yd-cell-box{
       width:80%;
       margin-left:20px;
   }
   .le{
       width:10%;
       position:fixed;
       right:0;
       top:112px;
   }
   .le>a{
       margin-top:0px;
       height:17px;
   }
   .le>a>span{
        color:#000;
        font-size:11px;
   }
   .bimg>img{
       width:28%;
       height:50px;
   }
  

</style>