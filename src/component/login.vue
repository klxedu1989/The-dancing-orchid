<template>
  <div id="login">
		<div class='section'>
				<img src="../img/011529381.jpg" alt="" />
				<form method='post' action='https://hua.tiaowulan.com/login/?0.46000017595068465' class="section-info">
						<div class="sectionH">
							<span style="font-size:20px;">花店登录</span>
							<span>v1.6.2</span>
						</div>
							<ul class="sectionUl">
								<li class="L1">
									<img src="../img/uname.png" alt="">
									<div>
										<input type="text" placeholder="请输入用户名" id="L1Inp" />
										<span id="s1"></span>
									</div>
								</li>
								<li class="L1">
									<img src="../img/pwd.png" alt="">
									<div>
										<input type="text" placeholder="请输入密码" id="L1Inp2" />
										<span id="s2"></span>
									</div>
								</li>
								<li class="L1">
									<img src="../img/uname.png" alt="">
									<div class="confirm lianxi" style="height:50px">
							          <label for="code_input"></label><input type="text" name="text1" id="code_input" class="lianxi-inp confirm-inp" value="" placeholder="请输入验证码"/><div id="v_container"></div>
							          <a href="javascript:;" id="v_container-a" >换一换</a>
			                        </div>
								</li>
								<span class="UlSpan"><a href="javascript:;">忘记登录密码？</a></span>
								<li class="L1">
									<div>
										<input type="submit" value="登录" class="L1S" />
									</div>
								</li>
								<li class="UlL"><a href="JavaScript:;">免费注册</a></li>
							</ul>
				</form>
		</div>
		<div class="footer">
			<span class="footerS"> 2015-2017 深圳市跳舞兰科技有限公司. All Rights Reserved.<br>
			<span>增值电信业务经营许可证:<a href="javascript:;">粤icp备15018909号</a></span>
			</span>
		</div>
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
  mounted:function(){
  	var oImgDiv = document.getElementById('v_container');
  	var oConfirm = document.getElementById('code_input');
  	var text =document.getElementById('L1Inp');
  	var pass =document.getElementById('L1Inp2');
  	var s1=document.getElementById('s1');
	var s2 =document.getElementById('s2');
	var reg1 =/^1[35678]\d{9}$/;
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
    text.onblur =function(){
					var str =text.value;
					var istrue=reg1.test(str);
					if(str==''){
						s1.style.color='palevioletred';
						s1.innerHTML="手机号码不能为空";
						return
					}
					if(istrue){
						s1.style.color='yellow';
						s1.innerHTML='手机验证通过';
					}else{
						s1.style.color='red';
						s1.innerHTML="手机号码不正确"
					}
				};
	pass.onblur =function(){
					var reg2 =/^\w{6,15}|_$/;
					var str =pass.value;
					var istrue=reg2.test(str);
					if(istrue){
						s2.style.color='yellow';
						s2.innerHTML='验证通过';
					}else{
						s2.style.color='red';
						s2.innerHTML="密码格式有误"
					}
				};
  }
}
</script>

<style>
*{
	margin: 0;
	padding: 0;
	list-style: none;
}
#login {
		width:100%;
		background:rgb(255,202,0);
		
}
.section{
  width:1200px;
  margin:0 auto;
  position:relative;
  	
  }
  .section-info{
  	width:314px;
  	height: 388px;
  	position:absolute;
  	border-top:2px solid #f49c00;
  	background:#fff;
  	top:100px;
  	right:90px;
  }
  .sectionH{
  	width:260px;
  	border-bottom:1px solid #f39800;
  	margin:0 auto;
  	color:#ff6a00;
  	line-height:50px;
  }
  .sectionUl{
  	width:259px;
  	margin:0 auto;
  }
  .L1{
  	height:40px;
  	margin-top:20px;
  }
  .L1 img{
  	width:37px;
  	height: 39px;
  	display:inline-block;
  	float:left;
  	border-radius:2px 0 0 2px;
  	
  }
  #L1Inp,#L1Inp2{
  	padding:10px 8px;
  	width:200px;
  	float:left;
  }
  #code_input{
  	padding:10px 8px;
  	width:80px;
  	float:left;
  }
  #v_container{
  width: 50px;
  height: 27px;
  display:inline-block;
  border:1px solid #eee;  
  text-align: center;
  overflow: hidden;
  position: relative;
  right:-18px;
  top:5px;
  }
  #v_container-a{
  	display: inline-block;
  	float: right;
  	color:red;
  	text-decoration: none;
  	font-size: 12px;
  	padding: 9px;
  }
  #s1,#s2{
  	font-size: 12px;
  	float: right;
  }
  .UlSpan{
  	float:right;
  	margin-top:15px;
  	
  }
  .UlSpan a{
  	text-decoration:none;
  	font-size:12px;
  	color: #666;
  	
  }
  .L1S{
  	padding:10px 8px;
  	width:259px;
  	float:left;
  	background:#ff6a00;
  	font-size:18px;
  	color:#fff;
  	border:none;
  	margin-top: 20px;
  }
  .UlL{
  	float:right;
  	margin-top:15px;
  }
  .UlL a{
  	color:red;
  	text-decoration:none;
  	font-size:12px;
  }
  .footer{
  	width: 100%;
  	position:absolute;
  	height:100px;
  	text-align:center;
  	font-size:12px;
  	color:#999;
  	line-height:24px;
  	font-family:'Microsoft YaHei',"宋体",Arial, Helvetica, sans-serif;
  }
  .footerS{
  	margin-top:40px;
  	display:inline-block;
  }
  .footerS a{
  	color:#999;
  	text-decoration:none;
  }
</style>