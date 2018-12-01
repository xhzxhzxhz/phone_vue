<template>
    <div class="fenleiContainer">
        <!--1.顶部导航条-->
        <div class="header">
            <span class="mui-icon mui-icon-arrowleft"></span>
            <span>手机账号登录</span>
            <router-link to="/register">注册</router-link>
        </div>
        <div class="body">
           <form>
                <div>
                    <span class="mui-icon mui-icon-person"></span>
                    <input type="text" placeholder="请输入手机号" v-model="phone">
                </div>
                <div>
                    <span class="mui-icon mui-icon-locked"></span>
                    <input type="password" placeholder="请输入登录密码" v-model="upwd">
                    <span class="mui-icon mui-icon-eye"></span> 
                </div>
               <a href="#" @click.prevent="login">登录</a>
               <div class="methods">
                    <router-link to="#">邮箱账号登录</router-link>
                    <router-link to="#">短信验证码登录</router-link>
                    <router-link to="#">忘记密码？</router-link>
               </div>

           </form>
        </div>
       
    </div>
</template>
<script>
   import { Toast } from 'mint-ui'
    export default{
        data(){
            return{phone:"",upwd:"" } 
        },
        methods:{
           login(){
                var phone=this.phone;
                var upwd=this.upwd;
                this.axios.post("http://127.0.0.1:3000/user/signin",Qs.stringify({upwd:upwd,phone:phone})).then(res=>{
                    if(res.data.ok==0){
                        this.text=true;
                        Toast("账号或密码错误")
                    }else{
                        Toast("登录成功");
                        this.text=false;
                        var uid=res.data.uid;
                        this.$store.commit('SET_baseinfo',uid);
                        this.$router.go(-1);
                    }
                })
           },
        },
        created(){
          this.$store.state.footer_show=true;
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
   .header a{
        color:#000;
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
   .methods{
       display:flex;
       justify-content:space-between;
       font-size:12px;
       margin-top:20px;
   }
   .methods a{
        color:#000;
   }
   .text{
       color:#000;
   }
   .text span{
       display:inline-block;
       width:17px;
       height:17px;
       border-radius:50%;
       text-align:center;
       color:#000;
       background:red;
       
   }
</style>