<template>
  <div id="weixin">
   		<div class="section">
   			 <img src="../img/131110521.jpg" alt="" />
   		</div>
   		<div class="footer">
  			<span> 2015-2025 深圳市跳舞兰科技有限公司. All Rights Reserved.
        增值电信业务经营许可证：粤B2-20160255 网站备案：</span>
  			<a href="javascript:;" class="footerA">粤icp备15018909号</a>
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
  }
}
</script>

<style>
#weixin {
  width: 100%;
}
.section{
	width:100%;
	border-top:2px solid  #ff6600;
}
.section img{
	width: 100%;
}
.footer{
	width: 100%;
	height:100px;
	border-top:1px solid #999;
	text-align:center;
	font-size:12px;
	color:#999;
	font-family: 宋体, Arial, Helvetica, sans-serif;
	line-height: 100px;
}
.footerA{
	color:#999;
	text-decoration: none;
}


</style>