<template>
    <div id="shouye">        
        <div class="banner">    
             <img src="../img/131024331.jpg" alt="" width="120%" height="100%">
        </div>  
        <div class="box">
          <div class="con">
            <div class="con-flex">
              <img src="../img/131042231.jpg" alt="">
            </div>
            <dl class="con-flex">
              <dt class="con-flex-dt">跳舞兰动态</dt>
              <dd class="con-flex-dd" id="con-flex-dd" v-for="v in arr"><span class="con-flex-dd-s"></span><a :href="v.link" class="con-flex-dd-a">{{v.con}}</a></dd>
              <!-- <router-view></router-view> -->
            </dl>
          </div>
        </div>   
        <a href="https://mp.weixin.qq.com/s/fGAi86WcGZmSc8CxWToFOA?0.9919828295242041"></a>
        <div class="line"></div>
        <footer>
          Copyright © 2015-2025 深圳市跳舞兰科技有限公司. All Rights Reserved. 增值电信业务经营许可证：粤B2-20160255 网站备案：<a href="javascript:;">粤icp备15018909号</a>
        </footer>

    </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      arr:[]
    }
  },
  methods:{    
  },
  mounted:function(){
    // console.log(this);
    this.$http({
      url:'./data.aaa',
      method:'get',
      params:{}
    }).then(function (res){
      var data = res.body;
      // console.log(data);
      if(!data.error){
        for(var i=0;i<data.length;i++){
          this.arr.push(data[i]);
        }
      // console.log(this.arr)
      }
      
    },function(){})
    
  }
}
</script>

<style lang="scss">
#shouye {
  /*position:relative;*/
  
  .banner{
    width: 100%;
    height: 550px;
    background: #FFA800 ;
    text-align: center;
  }
  .box{
    width: 1200px;
    margin:0 auto;
  }
  .con{
    display: flex;
    margin-bottom: 20px;
    .con-flex{
        flex:1;        
        .con-flex-dt{
          font-size:20px;
          padding-left:8px;
          border-left:2px solid #f49c00;
          height:26px;
          line-height: 26px;
          margin-bottom: 20px;
          margin-top:65px;          
        }
        .con-flex-dd{
            height: 30px;
            line-height: 30px;
            overflow: hidden;
            font-size:14px;
            .con-flex-dd-s{
              display: inline-block;
              width: 5px;
              height: 5px;
              border-radius: 50%;
              background: #E86E07;           
              margin-right:10px;
              vertical-align: middle;
            }
            .con-flex-dd-a{
              color:#333;
              &:hover{
                color:#ff6600;
              }
            }
          }
    }
  }
  .line{
    border-top:1px solid #ddd;
  }
  footer{
    height: 100px;
    line-height:100px;
    text-align: center;
    font-size:12px;
    color: #999;
    a{
      color: #999;
      &:hover{
        color:#ff6600;
      }
    }
  }
}
</style>
