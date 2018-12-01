<template>
    <div class="fenleiContainer">
        <!--1.顶部导航条-->
        <div class="header">
            <span class="mui-icon mui-icon-arrowleft" @click="back"></span>
            <span>注册</span>
        </div>
        <div class="body">
           <form>
                <div>
                    <span class="mui-icon mui-icon-person"></span>
                    <input type="text" placeholder="请输入常用手机号" v-model="phone" @blur="checkPhone">
                    <p v-show="phone_msg" v-text="phone_text" class="dd"></p>
                </div>
                <div class="phone">
                    <span class="mui-icon-extra mui-icon-extra-lamp"></span>
                    <input type="text" placeholder="请输入验证码">
                    <input type="button" :disabled="codeDisabled1" v-model="phone_yzm" @click.prevent="pyzm">
                </div>
                <div>
                    <span class="mui-icon mui-icon-locked"></span>
                    <input type="password" placeholder="请设置登录密码" v-model="upwd" @blur="checkPwd">
                    <span class="mui-icon mui-icon-eye"></span> 
                    <p v-show="upwd_msg" v-text="upwd_text" class="dd"></p>
                </div>
                <div>
                    <span class="mui-icon mui-icon-locked"></span>
                    <input type="password" placeholder="请重复密码" v-model="cpwd" @blur="checkCpwd">
                    <span class="mui-icon mui-icon-eye"></span> 
                    <p v-show="cpwd_msg" class="dd">！密码不一致，请重写输入</p>
                </div>
                <div>
                    <span class="mui-icon-extra mui-icon-extra-card"></span>
                    <input type="text" placeholder="请输入图形验证码">
                </div>
               <a href="#" @click.prevent="register" v-bind:style="reg">注册</a>
           </form>
        </div>
       
    </div>
</template>
<script>
    import { Toast } from 'mint-ui'
    export default{
        data(){ 
            return{ 
                phone_yzm:"获取验证码",countdown1:60,timer:null,codeDisabled1:false,phone:"",upwd:"",cpwd:"",phone_msg:false,phone_text:"",upwd_msg:false,upwd_text:"",cpwd_msg:false,cpwd_text:"",ok:false ,
                reg:""
            }
        },
        methods:{
            pyzm() {
                // 验证码60秒倒计时
                if (!this.timer) {
                    this.timer = setInterval(() => {
                        if (this.countdown1 > 0 && this.countdown1 <= 60) {
                            this.countdown1--;
                            if (this.countdown1 !== 0) {
                            this.phone_yzm = "重新发送(" + this.countdown1 + ")";
                        } 
                        else {
                            clearInterval(this.timer);
                            this.phone_yzm = "获取验证码";
                            this.countdown1 = 60;
                            this.timer = null;
                            this.codeDisabled1 = false;
                        }
                        }
                    }, 1000)
                }
            },
            checkPhone(){
                this.phone_msg=false;
                var reg=/^\d{11}$/;
                if(this.phone==""){
                    this.phone_msg1=true;
                    Toast("请输入电话号码");
                    this.ok=false;
                }else if(reg.test(this.phone)==false){
                    this.phone_msg=true;
                    Toast("请输入有效的电话号码");
                    this.ok=false;
                }
                this.axios.get("http://127.0.0.1:3000/user/checkPhone",{params:{phone:this.phone}}).then(res=>{
                    console.log(res.data);   
                    if(res.data==1){
                        this.phone_msg=true;
                        Toast("该手机号已被注册");
                        this.ok=false;
                    } else{
                        this.ok=true;
                    }
                })
            },
            checkPwd(){
                var reg=/^\w{8,}$/
                if(this.upwd==""){
                    this.upwd_msg=true;
                    this.upwd_text="请输入密码";
                    this.ok=false;
                }else if(reg.test(this.upwd)==false){
                    this.upwd_msg=true;
                    this.upwd_text="密码必须是8个字符或更多";
                    this.ok=false;
                }
                else{
                     this.upwd_msg=false;
                    this.ok=true;
                }
            },
            checkCpwd(){
                if(this.cpwd==""){
                   this.cpwd_msg=true;
                    this.cpwd_text="请确认密码";
                    this.ok=false;
                }else if(this.cpwd!=this.upwd){
                    this.cpwd_msg=true;
                    this.cpwd_text="密码不一致，请输入相同的密码";
                    this.ok=false;
                }
                else{
                    this.cpwd_msg=false;
                    this.ok=true;
                }
                if(this.ok==true){
                    this.reg="background:blue;color:#fff;";
                }
            },
            register(){
                if(this.ok==true){
                     this.axios.post("http://127.0.0.1:3000/user/register",Qs.stringify({phone:this.phone,upwd:this.upwd})).then(res=>{
                       this.$router.push("/login");
                    })
                }
            },
            back(){
                this.$router.go(-1);
            }
        },
        created(){
            this.$store.state.footer_show=true;
        }
    }
</script>
<style scoped>
   .header{
       
       margin:5px 10px;
   }
    .header>span:last-child{
        margin-left:148px;
    }
   .body{
       margin:20px 10px;
   }
   .body form div{
       position:relative;
       
   }
    .body form div span{
       position:absolute;
    }
   .body form input{
       border:none;
       border-bottom:1px solid #f5f5f5;
       font-size:13px;
       padding-left:35px;
       color:#aaa;
   }
   .mui-icon-eye{
       right:5px;
   }
   .body form>a{
       display:block;
       width:100%;
       padding:10px 0;
       color:#fff;
       text-align:center;
       background:#aaa;
   }
     .phone>input:last-child{
        display:inline-block;
        width:90px;
        padding:7px 0;
        background:#00f;
        text-align:center;
        font-size:12px;
    }
    .phone>input{
        width:74%;
    }
   .body form ul{
       list-style:none;
   }
   .body form ul li{
      float:left;
      margin-left:20px;
   }
   .body form ul li a{
       font-size:12px;
       color:#000;
   }
    .dd{
        color:red;
    }
</style>