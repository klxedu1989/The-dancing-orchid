<template>
  <div id="app">
    <header class="shouye-header">
      <div class="main clearfix">      
        <a href="javascript:;" class="logo fl">跳舞兰</a>
        <div class="logo-nav  fr " >         
            <router-link to="/shouye" class="active logo-nav-a" >首页</router-link> 
            <router-link to="/login">花店登陆</router-link>
            <router-link to="/ruzhu">花店入驻</router-link>
            <router-link to="/weixin">微信公众号</router-link> 
            <router-link to="/about">关于跳舞兰</router-link> 
            <!-- <router-link to="/about">222</router-link>          -->
          
        </div>
        <!-- <router-view></router-view> -->
      </div>
      <router-view></router-view>
    </header>    
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: ''
    }
  },
  method:{
    
  },  
}
</script>

<style lang="scss">
#app {  
  .shouye-header{
    width: 100%;
    height: 90px;
    border-bottom: solid 2px #f49c00;  
  .main{
      width: 1200px;
      margin:0 auto;
      overflow: hidden;
      height:100%;
      line-height: 90px;
      .logo{
        display: inline-block;
        width: 200px;
        height: 73px;      
        float: left;
        text-indent: -999px;
        background: url('./img/logo.png') no-repeat 17px;
        background-size: 165px 56px;
      }
      .logo-nav{  
          a{
            display: inline-block;
            margin-left:70px;
            font-size:18px;
            color:#333;
            text-decoration: none;
            &:hover{
              color:#f49c00;
            }
            &.router-link-active{
              color:#f49c00;
              text-decoration: none;
              outline: none;
            }

          }
          
      }
    }
  }
}

.clearfix:after{
  clear:both;
  content: '';
  display: block;
}
.clearfix{
  zoom:1;
}
.fr{
  float:right;
}
.fl{
  float: left;
}
body,ul,li,dl,dd,a,dt{
  padding: 0;
  margin: 0;
  list-style: 0;
  text-decoration: none;
}

</style>
