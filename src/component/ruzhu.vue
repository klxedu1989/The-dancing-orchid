<template>
  <div id="ruzhu">
    <div id="mask2">
    </div>
    <div class="container">
      <!-- <section class="line"><div></div></section> -->
      <div class="space-30"></div>
      <section class="middle">
        <div class="stage1" id="s1"></div>
        <div class="content1">
          <form action="" method="GET">
            <ul id="ul1">
              <li style="line-height:76px">
                <em>*</em>登录账号<input type="text" name="user" placeholder="建议使用'花店名称'手机号码'注册" id="n1" data-err="您的用户名格式不正确" style="line-height:40px" /><span class="zhuce"></span>
              </li>
              <li style="line-height:76px">
                <em>*</em>手机<input type="text" name="phone" id="phone" data-err="您的手机号格式不正确" style="line-height:40px"  /><span></span>
              </li>
              <li style="line-height:76px">
                <em>*</em>登录密码<input type="password" name="password" id="p1" data-err="您的密码格式不正确" style="line-height:40px" /><span></span>
              </li>
              <li style="line-height:76px">
                <em>*</em>确认密码<input type="password" name="passwords" id="p2" data-err="您的两次密码不一致" style="line-height:40px" /><span></span>
              </li>
              <li style="line-height:76px">
                <em>*</em>验证码<input type="button" id="p3" value="拖动滑块验证" disabled="" /><div id="yanzheng">>></div><div id="mask"></div>
              </li>
              <li class="already">
                <div class="clearfix" style="line-height:40px" ><input type="checkbox" name="checkbox" id="c1" data-err="请阅读并勾选跳舞兰协议" style="position:relative;top:-25px">我已阅读并同意<a href="javascript:;" style="color:#f60" id="protocol">《跳舞兰合作协议》</a></div><span></span>
              </li>
              <li>
               <!--  <input type="button" value="下一步" id="next" /> -->
               <button id="next" @click="map">下一步</button>
              </li>
            </ul>
            <div id="protocol1" style="box-shadow:5px 5px 5px #ccc;border:1px solid #ccc">
              <div id="cuo" class="glyphicon glyphicon-remove"></div>
              <h1>跳舞兰服务协议</h1>
              <div class="showhand" id="showhand">
                <div class="contentBox" id="contentBox">
                  <p class="agr-p">
                      《跳舞兰服务协议》（以下简称“本协议”）是由深圳市跳舞兰科技有限公司（以下简称“跳舞兰”），在提供跳舞兰平台运营服务时与跳舞兰平台的使用者（以下简称“合作商户”）达成的合作协议。
                  </p>
                  <div class="agr-div">
                      <h3 class="agr-h3">一、 协议内容及签署</h3>
                      <ul class="agr-ul">
                          <li>1.本协议内容包括协议正文及所有跳舞兰已经发布的或将来可能发布的各类规则。所有规则为本协议不可分割的组成部分，与协议正文具有同等法律效力。除另行明确声明外，任何跳舞兰及其关联公司提供的服务均受本协议约束。</li>
                          <li>2.您应当在使用跳舞兰平台服务之前认真阅读全部协议内容。如您对协议有任何疑问的，应向跳舞兰咨询。但无论您事实上是否在使用跳舞兰平台服务之前认真阅读了本协议内容，只要您使用跳舞兰平台服务，则本协议即对您产生约束，届时您不应以未阅读本协议的内容或者未获得跳舞兰对您问询的解答等理由，主张本协议无效，或要求撤销本协议。</li>
                          <li>
                              3.您承诺接受并遵守本协议的约定。如果您不同意本协议的约定，您应立即停止注册程序或停止使用跳舞兰平台服务。
                          </li>
                          <li>
                              4.跳舞兰有权根据需要不时地制订、修改本协议及各类规则，并以网站公示的方式进行公告，不再单独通知您。变更后的协议和规则一经在网站公布后，立即自动生效。如您不同意相关变更，应当立即停止使用跳舞兰平台服务。如您继续使用跳舞兰平台服务，即表示您接受经修订的协议和规则。
                          </li>
                      </ul>
                  </div>
                  <div class="agr-div">
                      <h3 class="agr-h3">二、花店入驻</h3>
                      <ul class="agr-ul">
                          <li>
                              1.花店入驻应提供真实、完整、有效的信息，并保证跳舞兰可以通过该信息与花店店主取得联系。花店也有义务在相关资料发生变更时及时更新注册信息。
                          </li>
                          <li>
                              2.花店填写注册信息，登录平台填写认证信息，跳舞兰审核通过后，即成为跳舞兰的合作商户，跳舞兰会为每位合作商户开通唯一身份标识。
                          </li>
                          <li>
                              3.跳舞兰合作商户必须是具有合法经营资格的实体组织，门店营业时间不低于2个月且具备制作与配送能力。
                          </li>
                          <li>
                              4.若跳舞兰发现合作商户填写虚假信息，跳舞兰有权终止与花店的一切合作，并且花店应承担赔偿责任。
                          </li>
                      </ul>
                  </div>
                  <div class="agr-div">
                      <h3 class="agr-h3">三、账户</h3>
                      <ul class="agr-ul">
                          <li>
                              在您签署本协议，完成花店入驻程序，跳舞兰会向您提供唯一编号的跳舞兰账户。 您可以对账户设置会员名和密码，通过该会员名密码或与该会员名密码关联的其它用户名密码登录跳舞兰平台。您设置的会员名不得侵犯或涉嫌侵犯他人合法权益。如您连续一年未使用您的会员名和密码登录跳舞兰平台，或您设置的会员名涉嫌侵犯他人合法权益，跳舞兰有权终止向您提供跳舞兰平台服务，注销您的账户。账户注销后，相应的会员名将开放给任意用户注册登记使用。
                          </li>
                          <li>
                              您应对您的账户（会员名）和密码的安全，以及对通过您的账户（会员名）和密码实施的行为负责。如果发现任何人恶意使用您的账户或有任何其他可能危及您的账户安全的情形时，您应当立即以有效方式通知跳舞兰，要求跳舞兰暂停相关服务。您理解跳舞兰对您的请求采取行动需要合理时间，跳舞兰对在采取行动前已经产生的任何损失不承担任何责任。
                          </li>
                      </ul>
                  </div>
                  <div class="agr-div">
                      <h3 class="agr-h3">四、合同订立</h3>
                      <ul class="agr-ul">
                          <li>
                              跳舞兰为合作商户提供网络推广（团购网站推广和地图推广会另外征得您的许可）和订单转让的服务。跳舞兰为保证合作商户付款安全，便利合作商户之间的交易，以及方便消费者维权，跳舞兰有权代收相关交易款项和费用。
                          </li>
                      </ul>
                  </div>
                  <div class="agr-div">
                      <h3 class="agr-h3">五、合作商户的权利和义务</h3>
                      <ul class="agr-ul">
                          <li>
                              1.合作商户保证自己有实体店（鲜花店/蛋糕店/礼品店），具有配送能力且经营状况良好。
                          </li>
                          <li>
                              2.合作商户保证自己提供的信息真实有效，由此产生的一切法律问题和费用由合作商户承担。
                          </li>
                          <li>
                              3.合作商户保证按跳舞兰的订单标准给消费者提供服务
                          </li>
                          <li>
                              4.合作商户保证接受跳舞兰的监督和管理。不从事任何有损跳舞兰形象和声誉的行为。
                          </li>
                          <li>
                              5.合作商户如出现消费者投诉合作商户的商品有质量问题，相关法律责任由合作商户独立承担，且跳舞兰有权向合作商户延迟或拒付任何款项。
                          </li>
                          <li>
                              6.合作商户如更换花店名、搬迁、停业需主动通知跳舞兰。合作商户承诺对跳舞兰的任何机密资料和信息保守秘密；保密信息包括但不限于协议签署及内容、文本或细节、线上交易价格和结算价格、活动方案及执行、点位布局图、商业秘密、公司计划、运营活动、财务信息、技术信息、经营信息及其他商业秘密等。非经跳舞兰书面同意，不向任何第三方泄露。合作商户需在使用跳舞兰的过程中遵守诚实信用原则，不扰乱网上交易的正常秩序。 合作商户如发生的人身安全（包括合作商户的配送人员）、交通事故与跳舞兰无关，由合作商户自己承担一切责任和费用。
                          </li>
                          <li>
                              7.在使用跳舞兰平台服务过程中实施的所有行为均应遵守国家法律、法规等规范性文件及跳舞兰平台各项规则的规定和要求，不违背社会公共利益或公共道德，不损害他人的合法权益，不违反本协议及相关规则。您如果违反前述承诺，产生任何法律后果的，您应以自己的名义独立承担所有的法律责任，并确保跳舞兰免于因此产生任何损失。
                          </li>
                          <li>
                              8.不对跳舞兰平台上的任何数据作商业性利用，包括但不限于在未经跳舞兰事先书面同意的情况下，以复制、传播等任何方式使用跳舞兰平台上展示的资料。不使用任何装置、软件或例行程序干预或试图干预跳舞兰平台的正常运作或正在跳舞兰平台上进行的任何交易、活动。
                          </li>
                      </ul>
                  </div>
                  <div class="agr-div">
                      <h3 class="agr-h3">六、跳舞兰的权利和义务</h3>
                      <ul class="agr-ul">
                          <li>
                              1.跳舞兰对合作商户提供的资料信息有保护义务以及形式审核权，审核内容包括但不限于合作商户提供的背景、商誉、经营范围、生产及盈利能力、资质，商品质量、服务等。跳舞兰审核通过并不代表跳舞兰对审核内容的真实性、合法性、准确性等信息的确认，合作商户仍应对其提交的各类资料信息的真实性、合法性和准确性承担独立的、完全的法律责任。未经商户同意，跳舞兰不得以任何的形式泄露或与第三方分享商户的资料信息。
                          </li>
                          <li>
                              2.您在跳舞兰平台上交易过程中与其他会员发生交易纠纷时，请参照《跳舞兰交易纠纷处理办法》。需经跳舞兰调查处理，三方协商后，给出处理办法。
                          </li>
                          <li>
                              3.您了解并同意，如您涉嫌侵犯他人知识产权，则跳舞兰亦有权在初步判断涉嫌侵权行为存在的情况下，向权利人提供您必要的身份信息。
                          </li>
                          <li>
                              4.基于维护跳舞兰平台交易秩序及交易安全的需要，跳舞兰有权在发生恶意购买等扰乱市场正常交易秩序的情形下，执行关闭相应交易订单等操作。
                          </li>
                          <li>
                              5.如您涉嫌违反有关法律或者本协议之规定，使跳舞兰遭受任何损失，或受到任何第三方的索赔，或受到任何行政管理部门的处罚，您应当赔偿跳舞兰因此造成的损失及产生的费用，包括合理的律师费用。
                          </li>
                      </ul>
                  </div>
                  <div class="agr-div">
                      <h3 class="agr-h3">七、协议终止</h3>
                      <ul class="agr-ul">
                          <li>
                              1.您同意，跳舞兰有权自行全权决定以任何理由不经事先通知的中止向您提供部分或全部跳舞兰平台服务，暂时冻结或注销您的账户，且无须为此向您或任何第三方承担任何责任。
                          </li>
                          <li>
                              2.出现以下情况时，跳舞兰有权直接以注销账户的方式终止本协议:
                          </li>
                          <li>
                              (1) 跳舞兰终止向您提供服务后，您涉嫌再一次直接或间接或以他人名义注册为 跳舞兰用户的。
                          </li>
                          <li>
                              (2) 您注册信息中的主要内容不真实或不准确或不及时或不完整。
                          </li>
                          <li>
                              (3) 本协议（含规则）变更时，您明示并通知跳舞兰不愿接受新的服务协议的；
                          </li>
                          <li>
                              (4) 其它跳舞兰认为应当终止服务的情况。
                          </li>
                      </ul>
                  </div>
                  <div class="agr-div">
                      <h3 class="agr-h3">八、责任免除</h3>
                      <ul class="agr-ul">
                          <li>
                              因战争、自然灾害、政府行为、互联网灾难（包括但不限于病毒攻击）、网络故障等不可抗力导致跳舞兰服务器不能正常运行或合作内容无法按照本协议规定提供。
                          </li>
                      </ul>
                  </div>
                </div>               
              </div>
              <div id="bar"></div>
            </div>
            <ul id="ul2">
              <li class="clearfix">
                <i>*</i><em>花店名称</em><input type="text" name="flower" id="flower1">
              </li>
              <li class="clearfix" id="flower2">
                <i>*</i><em>花店类型</em><input type="radio" name="flower" value="实体花店" ><span>实体花店</span>
                <input type="radio" name="flower" value=""><span>网上花店</span>
                <input type="radio" name="flower" value=""><span>实体+网上</span>
              </li>
               <li class="clearfix">
                <i>*</i><em>联系人</em><input type="text" name="flower" id="flower3"> 
              </li>
               <li class="clearfix">
                <i>*</i><em>联系电话</em><input type="text" name="phone" id="phone1">
              </li>
              <li class="clearfix">
                <i>*</i><em>联系QQ</em><input type="text" name="qq" id="flower5">
              </li>
              <li class="clearfix">
                <i>*</i><em>联系微信</em><input type="text" name="flower" id="flower6">
              </li>
              <li class="clearfix region">
                <i>*</i><em>所在地区</em><input type="button" name="flower" id="flower7" value="" ><span class="glyphicon glyphicon-chevron-down"></span>
              </li>
              <li class="city-select" id="city">
                <ul class="city-select-tab" id="citySelect">
                    <li class="active">省份</li>
                    <li>城市</li>
                    <li>县区</li>
                    <li>街道</li>
                </ul>
                <div class="city-select-content" id="cityContent">
                    <ul class="city-select-province item1" id="cityA">
                      <li>
                        <dl>
                          <dt>A-G</dt>
                          <dd>
                            <ul class="anhui">
                              <li v-for="v in arr1" class="cityB">{{v}}</li>
                            </ul>
                          </dd>
                        </dl>
                      </li>

                      <li>
                        <dl>
                          <dt>H-K</dt>
                          <dd>
                            <ul class="anhui">
                              <li v-for="v in arr2" class="cityB">{{v}}</li>
                            </ul>
                          </dd>
                        </dl>
                      </li>

                      <li>
                        <dl>
                          <dt>L-S</dt>
                          <dd>
                            <ul class="anhui">
                              <li v-for="v in arr3" class="cityB">{{v}}</li>
                            </ul>
                          </dd>
                        </dl>
                      </li>

                      <li>
                        <dl>
                          <dt>T-Z</dt>
                          <dd>
                            <ul class="anhui">
                              <li v-for="v in arr4" class="cityB">{{v}}</li>
                            </ul>
                          </dd>
                        </dl>
                      </li>
                    </ul>
                    <ul class="city-select-province item1">
                      <li>
                        <dl>
                          <dd>
                            <ul class="anhui beijing">
                              <li v-for="v in arr5" class="cityC">{{v}}</li>
                            </ul>
                          </dd>
                        </dl>
                      </li>
                    </ul>
                    <ul class="city-select-province item1">
                      <li>
                        <dl>
                          <dd>
                            <ul class="anhui ">
                              <li v-for="v in arr6" class="cityD">{{v}}</li>
                            </ul>
                          </dd>
                        </dl>
                      </li>
                    </ul>
                    <ul class="city-select-province item1">
                      <li>
                        <dl>
                          <dd>
                            <ul class="anhui">
                              <li v-for="v in arr7" class="cityE">{{v}}</li>
                            </ul>
                          </dd>
                        </dl>
                      </li>
                    </ul>                   
                </div>
              </li>
              <li class="clearfix">
                <i>*</i><em>详细地址</em><input type="text" name="flower" id="flower8">
              </li>
              <li id="map">
                
              </li>
              <li class="zhuce2">
                <input type="button" name="" value="提交注册" class="btn1" id="tijiao" @click="jump">
              </li>
            </ul>
            <ul id="ul3">
              <div class="ul3-div1">
                <div class="ul3-top"></div>
                <p >恭喜你注册成功!</p>
                <p class="ul3-bottom">{{t}}s后进入跳舞兰</p>
              </div>
            </ul>
          </form>
        </div>      
      </section>

      <footer>
        <p>
          Copyright © 2015-2016 深圳市跳舞兰科技有限公司. All Rights Reserved.
            增值电信业务经营许可证：粤icp备15018909号
        </p>
      </footer>
    </div>

    
    <!-- 在此引入bootstrap -->
    <link rel="stylesheet" type="text/css" href="./css/bootstrap.css">
   	<link rel="stylesheet" type="text/css" href="./css/ruzhu.css">

  </div>
</template>

<script>
  export default {
    name: 'ruzhu',
    data () {
      return {
        iNow: 0,
        arr1:['安徽','北京','重庆','福建','广东','广西','福建','甘肃'],
        arr2:['河北','海南','黑龙江','河南','湖北','湖南','吉林','江苏','江西'],
        arr3:['辽宁','内蒙古','宁夏','青海','山西','上海','山东','四川','陕西'],
        arr4:['天津','西藏','新疆','云南','浙江'],
        arr5:['合肥','安庆','蚌埠','池州','滁州','阜阳','淮北','淮南','黄山','六安','马鞍山','宿州','铜陵','芜湖','宣城','亳州'],
        arr6:['太和','界首','阜南','颍上','颍泉','颍州','颍东'],
        arr7:['闻集','宁老庄','胡总','苏屯','代桥'],
        t:5
      }
    },
    methods:{ 
      map(){
          //创建Map实例
          var map = new BMap.Map("map");

          //创建一个中心点
          var point=new BMap.Point(116.404, 39.915);
          //设置中心点以及缩放
          map.centerAndZoom(point,15);
          //添加地图类型控件
          map.addControl(new BMap.MapTypeControl());
          // 设置地图显示的城市 此项是必须设置的
          map.setCurrentCity("北京");
          //开启鼠标滚轮缩放
          map.enableScrollWheelZoom(true);
          //创建覆盖物
          var marker = new BMap.Marker(point);
          //在地图中添加覆盖物
          map.addOverlay(marker);
      },
      jump(){
          var self=this;
          this.t=5;       
          var tid=setInterval(function(){
           self.t--;
            if (self.t==0) {
              clearInterval(tid);
              window.location.href="/#login";
            }
          },1000)      
      }
    },
    mounted:function(el){
              //1验证是否为空
              //为空 提示空，不为空验正则
              //正则正确提示正确  错误提示err
              //失去焦点
              var reg={
                  user:/^[a-z0-9]{8,16}$/,
                  password:/^[A-Z]\w{6,11}$/,
                  passwords:/^[A-Z]\w{6,11}$/,
                  phone:/^1[3578]\d{9}$/,
                  qq:/^[123456789]\d{4,11}$/
              };

              //1.获取到元素的绝对位置
              function getPosition (obj) {
                  var l = 0;
                  var t = 0;
                  while (obj) {
                      l = l + obj.offsetLeft;
                      t = t + obj.offsetTop;
                      // 找到有定位的父节点
                      obj = obj.offsetParent;
                  }
                  return {left: l,top: t};
              }

             var oF=document.getElementById('next');
             var ul1=document.getElementById('ul1');
             var ul2=document.getElementById('ul2');
             var ul3=document.getElementById('ul3');
             var aLi=ul1.getElementsByTagName('li');
             var n1=document.getElementById('n1');
             var p1=document.getElementById('p1');
             var p2=document.getElementById('p2');
             var p3=document.getElementById('p3');
             var p4=document.getElementById('phone');
             var c1=document.getElementById('c1');
             var oState=document.getElementById('s1');
             var oYan=document.getElementById('yanzheng');
             var oMask=document.getElementById('mask');
             var iNow=0;
             var tmp=0;

             //当失去焦点的时候          
             //如果有name加事件
            function show(obj){ 
                obj.onblur=function(){
                      //内容不能为空
                      if(!this.value){
                          this.nextElementSibling.innerHTML='内容不能为空';
                          return
                      }
                      //判断正则
                                      
                      if(reg[this.name].test(this.value)){
                          this.nextElementSibling.innerHTML='√';
                          iNow++;
                      }else{  
                          this.nextElementSibling.innerHTML=this.dataset.err;
                          return
                      }
                };
            }                
    
            show(n1);
            show(p1);
            show(phone);

            p2.onblur=function(){
              //判断两次密码是否一致    
              var str1=p1.value;
              var str2=p2.value;
              //判断密码不为空
              if(str2==''){
                this.nextElementSibling.innerHTML='内容不能为空';
                return
              }
              if(!(str1==str2)){
               this.nextElementSibling.innerHTML=this.dataset.err;                                
              }else{
               this.nextElementSibling.innerHTML='√';
               iNow++;
              }
            }
            
            //当按提交的时候
             oF.onclick=function(){  
                var s5=iNow;
                ul1.style.display="none";
                ul2.style.display="block";
                oState.style.backgroundImage='url(../image1/state2.png)';
                console.log(iNow);                
                if(s5==6){
                  ul1.style.display="none";
                  ul2.style.display="block";
                  oState.style.backgroundImage='url(../image1/state2.png)';
                }else{
                  return false;
                }
             };
                    
            c1.onclick=function(){
              if (this.checked==false) { iNow--;} else {
                  iNow++;
              }
            }
      
            var bFlag=true;           
            oYan.onmousedown=function (ev) {
              
               if (bFlag) {
                  //鼠标摁下,获取点的坐标            
                 var oEvent=ev||event;
                 // 获取滚动的距离
                 var scrollLeft=document.documentElementScrollLeft||document.body.scrollLeft;
                 var ps3=getPosition(p3).left;
                 var sp3=p3.offsetWidth;
                 var disL=oEvent.clientX+scrollLeft;
                 var s=disL-ps3;
                 var l2=oYan.offsetWidth;
                 var oY=oYan.offsetLeft;
                 var a=l2-(oEvent.clientX-getPosition(oYan).left);
                 var yL=0;
                 // body...
                 if (bFlag) {
                              document.onmousemove=function(ev){
                                    var oEvent=ev||event;
                                    var disX=oEvent.clientX-disL+oY;

                                    if (oEvent.clientX>=ps3&&(oEvent.clientX)<=(ps3+sp3)&&bFlag
                                        ) {
                                            
                                            oYan.style.left=disX+'px';
                                            oMask.style.width=disX-oY+'px';
                                            oMask.style.display='block';
                                            yL=oYan.offsetLeft;

                                            if (yL>=413) { 
                                              oMask.innerHTML='验证通过';
                                              oMask.style.color='white';
                                              oYan.innerHTML='';
                                              oYan.style.backgroundImage='url(../image1/yanzheng2.png)';
                                              oYan.style.color='red';
                                              // oYan.style.left=b+'px';
                                              iNow++;
                                             oYan.style.left=disX+'px';
                                             oMask.style.width=disX-oY+'px';
                                              bFlag=!bFlag;
                                              return;
                                          } 
                                    }                               
                              }
                 } else {}

                 document.onmouseup=function(){ 
                     document.onmousemove=null;
                     document.onmouseup=null;
                     if(yL<413){
                        oYan.style.left='107px';
                        oMask.style.width=0;
                      }
                     oYan.releaseCapture && oYan.releaseCapture();
                 }
                 oYan.setCapture && oYan.setCapture();
                 return false;   
               }           
            }            
                  
            var c1=document.getElementById('flower1');
            var c2=document.getElementById('flower2');
            var c3=document.getElementById('flower3');
            var aIn=c2.getElementsByTagName('input');
            var c4=document.getElementById('phone1');
            var c5=document.getElementById('flower5');
            var c6=document.getElementById('flower6');
            var c7=document.getElementById('flower7');
            var c8=document.getElementById('flower8');
            var c9=document.querySelector('#tijiao');
            var oC=document.getElementById('city');
            var oPro=document.getElementById('protocol');
            var oPro1=document.getElementById('protocol1');
            var oInput=document.querySelectorAll('input');
            var oMask2=document.getElementById('mask2');
            var oCuo=document.getElementById('cuo');
            var bFlag1=true;
            oPro.onclick=function(){
                oPro1.style.display='block';
                oMask2.style.display='block';
                
                // oInput.disabled='true';
                // oInput.style.backgroundColor='grey';
            }
            oCuo.onclick=function(){
              oPro1.style.display='none';
              oMask2.style.display='none';
            }
            
              var oDiv =document.getElementById('protocol1');
              var oUl = document.getElementById('contentBox');
              var oBar = document.getElementById('bar');
              //滚动的距离
              var dis = 0;

              function moveBar (evt) {
                var oEvent = evt || event;
                //定义向上的开关
                var up = true;
                //判断滚动的信息
                if (oEvent.wheelDelta) {
                  //chrome
                  if (oEvent.wheelDelta > 0) {
                    //向上滚
                    up = true;
                  } else {
                    //向下滚
                    up = false;
                  }
                } else {
                  // Firefox
                  if (oEvent.detail > 0) {
                    //向下
                    up = false;
                  } else {
                    //向上
                    up = true;
                  }
                }
                var max_dis = oDiv.clientHeight - oBar.offsetHeight;
                if (up) {
                  // 向上
                  dis = dis - 10; // 10  20 30...
                  if (dis <= 0) {
                    dis = 0;
                  }
                  var scale = dis / max_dis;
                  oUl.style.top = -scale * (oUl.scrollHeight - oDiv.clientHeight) + 'px';
                  oBar.style.top = dis + 'px';
                } else {
                  //向下
                  dis = dis + 10; // 10  20 30...
                  if (dis >= max_dis) {
                    dis = max_dis;
                  }

                  var scale = dis / max_dis;

                  oUl.style.top = -scale * (oUl.scrollHeight - oDiv.clientHeight+100) + 'px';

                  oBar.style.top = dis + 'px';
                }
                //高级浏览器阻止默认事件
                oEvent.preventDefault && oEvent.preventDefault();
                return false; //阻止默认的滚动事件
              }

              if (navigator.userAgent.indexOf('Firefox') != -1) {
                addEvent(oDiv,'DOMMouseScroll',moveBar);
              } else {
                oDiv.onmousewheel = moveBar;
              }
                       
            c1.onblur=function(){
                if (!c1.value=='') {tmp++} ;  
            }
            c3.onblur=function(){
                if (!c3.value=='') {tmp++} ;      
            }
            c4.onblur=function(){
                if (!c4.value=='') {
                  if (reg[c4.name].test(c4.value)) {tmp++}
                } ;
            }
            c5.onblur=function(){
                if (!c5.value=='') {
                  if (reg[c5.name].test(c5.value)) {tmp++}
                } ;
            }
            c6.onblur=function(){
                if (!c6.value=='') {tmp++} ;
            }
            //所在地区选项卡,点击地区,下面弹出一个div
            c7.onblur=function(){
                if (!c7.value=='') {tmp++} ;
            }
            c7.onclick=function(){
              if (bFlag1) {
                oC.style.display="block";
              }else{
                oC.style.display="none";
              }
              bFlag1=!bFlag1;
            }
            c8.onblur=function(){
                if (!c1.value=='') {tmp++} ;
            }
            c9.onclick=function(){
              for (var i = 0; i < aIn.length; i++) {
                if(aIn[i].checked=true){
                    tmp++;
                }
              }
              if (tmp==9) {
                ul2.style.display='none';
                    ul3.style.display='block';
                oState.style.backgroundImage='url(../image1/state3.png)';
              } else {}
            }

            var oSelect=document.getElementById('citySelect');
            var oContent=document.getElementById('cityContent');
            var aLi1=oSelect.getElementsByTagName('li');
            var aUl1=document.querySelectorAll('.item1');
            var oA=document.getElementById('cityA');
            var aUl2=oA.getElementsByTagName('ul');
            var aLi2=document.querySelectorAll('.cityB');
            var aLi3=document.querySelectorAll('.cityC');
            var t1='';
            for (var i = 0;i < aLi1.length;i++) {
              aLi1[i].onclick = function () {
                for (var j = 0;j < aLi1.length;j++) {
                  aLi1[j].className = '';
                  aLi1[j].index = j; // j = 0 1 2
                  // 隐藏所有的div
                  aUl1[j].style.display = 'none';
                }
                // 实现点击变色
                this.className = 'active';
                // alert(this.title);
                aUl1[this.index].style.display = 'block';
                for (var i = 0; i < aLi1.length; i++) {
                  aUl2[i].style.display='block';
                }                
              }
            }
            // tab();
            for (var i = 0;i < aLi2.length;i++) {
              aLi2[i].onclick = function () {
                for (var j = 0;j < aLi2.length;j++) {
                  aLi2[j].index = j; // j = 0 1 2
                  // 隐藏所有的div
                  aLi2[j].style.backgroundColor = '';
                  aLi2[j].style.borderRadius = '';
                }
                this.style.backgroundColor = '#f60';
                this.style.borderRadius = '3px';
                aLi1[0].className='';
                aLi1[1].className='active';
                aUl1[0].style.display='none';                        
                aUl1[1].style.display='block';
                t1=this.innerHTML;  
                c7.value=t1;                      
              }            
            }

            for (var i = 0; i < aLi3.length; i++) {
              aLi3[i].onclick = function () {
                for (var j = 0;j < aLi3.length;j++) {
                  aLi3[j].index = j; // j = 0 1 2
                  // 隐藏所有的div
                  aLi3[j].style.backgroundColor = '';
                  aLi3[j].style.borderRadius = '';
                }
                this.style.backgroundColor = '#f60';
                this.style.borderRadius = '3px';
                aLi1[1].className='';
                aLi1[2].className='active';
                aUl1[1].style.display='none';                        
                aUl1[2].style.display='block';
                t1=t1+'-'+this.innerHTML;
                c7.value=t1;  
                oC.style.display="none";                     
              }
            }

            
    }
  }
</script>

<style lang="scss">
.space-30{
  width: 100%;
  height: 30px;
}
</style>