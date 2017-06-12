<template>
  <div id="about">
    <div class="banner">跳舞兰</div>
    <div class="space20"></div>
    <div class="space20"></div>
    <div class="main-about">
      <img src="../img/131425341.png" alt="">
      <ol>      
        <li>跳舞兰是为花店行业提供“新零售花店”整体解决方案、为鲜花行业提供全产业链的平台服务商。“数据化”、“网络化”、“智能化”、“网格化”推动实体花店和移动互联网的充分融合，全面提升花店行业的竞争力。</li>
        <li>跳舞兰构建了全国花店联盟资源和服务体系，打通了国际送花通道，为终端鲜花消费客户提供全国送花和国际送花，最终实现送花全球。</li>
        <li>跳舞兰是中国第一大实体花店平台，入驻跳舞兰的实体花店已经超过40000家（截止到2017年2月底）。</li>
      </ol>
       <div class="space20"></div>
      <div class="space20"></div> 
      <img src="../img/131425411.png" alt="">     
      <ul class="main-ul">
        <li>
          <img src="../img/131425531.png" alt="">
          <span class="main-ul-s">联系电话</span>
          <i>0755-33096096</i>
        </li>
        <li>
          <img src="../img/131425571.png" alt="">
          <span class="main-ul-s">网站</span>
          <i>www.tiaowulan.com</i>
        </li>
        <li>
          <img src="../img/131425491.png" alt="">
          <span class="main-ul-s">地址</span>
          <i>广东深圳</i>
        </li>
      </ul>
      <!-- <div class="space20"></div> -->
      <form action="about.php" method="get"  id="subForm">
        <div class="scores">
          <div class="scores-t">给平台打分</div>
          <ul class="scores-ul" id="scores-ul">
            <li>
              <span>平台流畅度：</span>
              <div class="star">
                <div class="block" id="star1">
                  <el-rate
                    v-model="value1"
                    show-text
                    :texts = "['非常差','很差','一般','很好','完美']"
                    :colors="['#80b638','#80b638','#80b638']">
                  </el-rate>
                </div>
              </div>
            </li>
            <li>
              <span>平台美观度：</span>
              <div class="star">
                <div class="block" id="star2">
                  <el-rate
                    v-model="value2"
                    show-text
                    :texts = "['非常差','很差','一般','很好','完美']"
                    :colors="['#80b638','#80b638','#80b638']">
                  </el-rate>
                </div>
              </div>
            </li>
            <li>
              <span>平台稳定性：</span>
              <div class="star">
                <div class="block" id="star3">                  
                  <el-rate
                    v-model="value3"
                    show-text
                    :texts = "['非常差','很差','一般','很好','完美']"
                    :colors="['#80b638','#80b638','#80b638']">
                  </el-rate>
                </div>
              </div>
            </li>
          </ul>   
        </div>
        <textarea name="contents" id="contents" marxlength="500"  placeholder="亲爱的跳舞兰用户：请在这里直接填写您遇到的问题或意见建议，您的意见对跳舞兰非常重要，是跳舞兰前进的动力（500字以内）。" @focus="borderS" @blur="border"></textarea>
        <div class="lianxi">
          <label for="connect">联系方式：</label><input type="text" name="text" placeholder="建议留下常用邮箱、QQ、电话等，便于我们及时回复您" maxlength="50" class="lianxi-inp" @focus="borderS" @blur="connect" id="connect">
        </div>
        <div class="confirm lianxi" style="height:50px">
          <label for="code_input">验证码：</label><input type="text" name="text1" id="code_input" class="lianxi-inp confirm-inp" @focus="borderS" @blur="confirmYzm" value="" placeholder="请输入验证码"><div id="v_container"></div>
          <a href="javascript:;" id="v_container-a" >换一换</a>
        </div>
        <input type="submit" value="提交" class="sub" >
      </form>
    </div>
    <div class="space20"></div>
    <div class="space20"></div>
    <div class="line"></div>
    <footer>
      Copyright © 2015-2025 深圳市跳舞兰科技有限公司. All Rights Reserved. 增值电信业务经营许可证：粤B2-20160255 网站备案：<a href="javascript:;">粤icp备15018909号</a>
    </footer>
    <!-- <input class="test" v-model="test" /> -->
  </div>  

</template>
<script>
export default {
  name: 'app',
  data () {
    return {
      value1: null,
      value2:null,
      value3:null,
      test:'xx'
    }
  },
  mounted:function(){
    // var oImgDiv = (((this.$el.children)[3].lastChild.children)[3].children)[2];
    var oImgDiv = document.getElementById('v_container');
    var oSubForm = document.getElementById('subForm');
    var oSpanDiv1 = document.getElementById('star1');
    var oSpanDiv2 = document.getElementById('star2');
    var oSpanDiv3 = document.getElementById('star3');
    var oSpan1 = (oSpanDiv1.children)[0].lastChild;
    var oSpan2 = (oSpanDiv2.children)[0].lastChild;
    var oSpan3 = (oSpanDiv3.children)[0].lastChild;
    var oTextarea = document.getElementById('contents');
    var oConnect = document.getElementById('connect');
    var oConfirm = document.getElementById('code_input');
    // console.log(oTextarea,oConnect,oConfirm);
    function rnd(n,m){
      return Math.floor(Math.random()*m+n);
    }
    function tab(){
      var res='';
      for(var i=0;i<4;i++){
        res+=rnd(0,9);
      } 
      var oSpan = document.createElement('span');
      oSpan.style.position = 'absolute';
      oSpan.style.left = '10px';
      oSpan.innerHTML = res;
      oSpan.style.color = 'rgb('+rnd(0,255)+','+rnd(0,256)+','+rnd(0,256)+')';    
      var oC = document.createElement('canvas');
        oC.width = "50";
        oC.height="22";   
        var gd = oC.getContext('2d');     
          gd.fillStyle = 'rgb('+rnd(0,255)+','+rnd(0,255)+','+rnd(0,255)+')';
          gd.strokeStyle = 'rgb('+rnd(0,255)+','+rnd(0,255)+','+rnd(0,255)+')';  
        for(var i=0;i<3;i++){
          gd.beginPath();
          gd.moveTo(rnd(0,50),rnd(0,22));
          gd.lineTo(rnd(0,50),rnd(0,22)); 
          gd.stroke();
        }      
        for(var i=0;i<50;i++){
          gd.fillRect(rnd(0,50),rnd(0,22),1,1);
        }
        gd.fillRect(rnd(0,50),rnd(0,22),1,1);
        var str = oC.toDataURL();
        var oImg = new Image();
        oImg.src = str;
        while(oImgDiv.lastChild){
          oImgDiv.removeChild(oImgDiv.lastChild);
        }
        oImgDiv.appendChild(oImg);
        oImgDiv.appendChild(oSpan);
        if(!oImg){
          alert('您的浏览器版本过低，烦请升级浏览器');
        }
      }
    tab();
    var oChange = oImgDiv.nextElementSibling || oImgDiv.nextSibling;
    oChange.onclick = function (){
      tab();
    } 
    oSubForm.onsubmit = function (ev){
      if(oSpan1.innerHTML=='' || oSpan2.innerHTML == '' || oSpan3.innerHTML == ''){
        alert('请选择评分！');
        ev.preventDefault();
      }else if(oConnect.value == ''){
        alert("联系方式不能为空");
        ev.preventDefault();
      }else if(oConfirm.value == ''){
        alert('请输入验证码');
        ev.preventDefault();
      }
      // return false;
    }   
  },
  methods:{
    borderS:function(e){
      var el = e.target;     
      el.style.borderColor = '#F59C00';  
    },
    border:function(e){
      var el = e.target;
      el.style.borderColor = '#ececec';
    },    
    confirmYzm:function(e){      
      var el = e.target;
      el.style.borderColor = '#ececec';
      var oImgDiv = el.nextElementSibling || el.nextSibling;
      var oChild = oImgDiv.children; 
        var res1 = oChild[1].innerHTML;
        var res2 = el.value;
        if(res1 != res2){
          alert("验证码错误或为空");
        }
    },
    connect:function(e){
      var el = e.target;
      el.style.borderColor = '#ececec';
      var str = el.value;
      // console.log(str);
      var reg1 = /^\w+@[0-9a-z]{2,}(\.([a-z]{2,8})){1,2}$/;
      var reg2 = /^1[34875][0-9]{9}$/;
      var reg3 = /^[1-9]\d{4,11}$/;
      if(reg1.test(str) || reg2.test(str) || reg3.test(str)){
        return
      }else{
        alert('联系方式错误，烦请重新填写！')
      }
    },
    test:function(){
      console.log(this.test);
    }
  }
}
</script>

<style lang="scss">
#v_container{
  width: 50px;
  height: 22px;
  display:inline-block;
  border:1px solid #eee;  
  text-align: center;
  overflow: hidden;
  position: relative;
  
}
#v_container-a{
  color:#f56;
  font-size:10px;  
}
.el-rate__icon{
  margin-right: 0px;
}
.el-rate__icon.hover{
  transform:scale(1,1);
}
.el-rate_text{
  color:#999 !important;
}
#about {
    /*position: relative;*/
    .banner{
      width: 100%;
      height: 550px;
      background: #FFA800 url('../img/131131081.jpg') no-repeat -300px 0;
      background-size:140% 100%;
      text-indent: -9999px;
    }
    .space20{
      width: 100%;
      height: 20px;
    }
    .main-about{
      width: 1200px;
      margin: 0 auto;
      ol{
        color: #7d7d7d;
        font-size:14px; 
        padding-left:20px;       
        li{          
          line-height: 30px;         
          list-style-type: disc; 
        }
      }      
      .main-ul{
        display: flex;
        padding-bottom: 50px;
        border-bottom: 1px solid #ddd;
        li{
          flex:1;
          list-style: none;
          text-align: center;
          font-size:14px;
          img{
            width: 91px;
            height: 91px;
            margin:0 auto;
            display: block;
          }
          .main-ul-s{
            width: 100%;
            height: 40px;
            line-height:40px;
            display: block;
          }
          i{
            font-style: normal;
            display: block;
            height: 20px;
            line-height:20px;
            color: #f49c00;
          }
        }
      }
      form{
        margin-left:20px;
      }
      .scores{
        /*padding-left:20px;*/
        /*height: 200px;*/
        .scores-t{
          font-size: 30px;
          margin: 15px 0px ;
          height: 30px;
          line-height: 30px;
          color: #F59C00;          
        }
        .scores-ul{
          list-style: none;
          font-size: 14px;
          margin-bottom: 20px;
          li{
            height: 40px;
            line-height: 40px;
            span{
              display: inline-block;
              height: 20px;
              line-height: 20px;
              position: relative;
              top:-6px;
              margin-right:10px;
            }
            .star{
              display: inline-block;
              
            }
            
          }
        }        

      }
      textarea{
        width: 700px;
        height: 120px;
        border: 1px solid #ececec;
        margin-right: 5px;
        outline: none;
        padding: 14px 13px;
        color:#ccc;
        font-size: 15px;

      }
      .lianxi{
        margin-top:20px;
        color: #989898;
        .lianxi-inp{
          border: 1px solid #ececec;
          margin-right: 5px;
          outline: none;
          width: 642px;
          padding: 10px;
        }
      }
      .confirm{
        margin-top:10px;
        .confirm-inp{
          width: 100px;
        }
      }
      .sub{
        margin-top:10px;
        width: 165px;
        height: 40px;
        background: #F49C00;
        border-radius: 3px;
        color: #fff;
        border: none;
        font-size: 16px;
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
        text-decoration: none;
        &:hover{
          color:#ff6600;
        }
      }
    }
}
</style>