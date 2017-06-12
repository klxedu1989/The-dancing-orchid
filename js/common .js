//闭包
function(){
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
	
	//2. 事件绑定的封装
	function addEvent (obj,type,fn) {
		if (obj.addEventListener) {
			//在高级浏览器
			 obj.addEventListener(type,fn,false);
		} else {
			obj.attachEvent('on'+type,fn)
		}
	}

	//3.事件移除的封装
	function removeEvent(obj,type,fn) {
		if (obj.removeEventListener) {
			obj.removeEventListener(type,fn,false);
		} else {
			obj.detachEvent('on'+type,fn);
		}
	}

	//4.先加载完html+css再加载音频、视频
	function addReady(fn) {
		if (document.addEventListener) {
			document.addEventListener('DOMContentLoaded',
				fn,false);
		} else {
			document.attachEvent('onreadystatechange',
			function(){
				if(document.readyState=='complete') { fn() }
			})
		}
	}

	
	//5.设置cookie
	function setCookie (name,value,day) {
		//当前时间
		var oDate = new Date();
		if (day) {
			//设置到第几天的时间
			oDate.setDate(oDate.getDate()+day);
			document.cookie = name+'='+value+';path=/;expires='+oDate;
		} else {
			document.cookie = name+'='+value+';path=/';
		}
		
	}


	// value = getCookie('username');
	//6.获取cookie
	function getCookie(name) {
		// cookie: username=zs; age=18; height=180
		//name: username
		var cookies = document.cookie;
		var arr = cookies.split('; ');
		//arr[0] : username=zs
		//arr[1] : age=18
		for (var i = 0;i < arr.length;i++) {
			var arr2 = arr[i].split('=');
			// arr2[0]: username  age    height
			// arr2[1]:   zs	   18      180
			if (arr2[0] == name) {
				return arr2[1];
			}
		}
		return ' ';
	}


	//7.删除cookie
	function removeCookie(name) {
		//根据过期时间来删除
		setCookie(name,'sadqwewq',-20);
	}
	
	//8.获取元素属性
	function getStyle(obj,sName){
	    return (obj.currentStyle||getComputedStyle(obj,false))[sName];
	}

	//9.封装运动,必须结合8使用
	function animate(obj,json,options){//obj,sName,end
	    var options=options || {};
	    var duration=options.duration || 1000; //总时间
	    //var start=parseFloat(getStyle(obj,sName));       //开始位置
	    var start={};//width:XX,height:XXX
	    var end={};       //结束位置

	    for(var name in json){
	        start[name]=parseFloat(getStyle(obj,name));
	        end[name]=json[name];
	    }

	    //var total=end-start;  //总路程
	    var step=Math.ceil(duration/30); //总步数

	    var n=0; //记录步数
	    //动
	    clearInterval(obj.timer);
	    obj.timer=setInterval(function(){
	        n++;

	        for(var name in json){
	            if(name=='opacity'){
	                obj.style.opacity=start[name]+n*(end[name]-start[name])/step;
	            }else{
	                obj.style[name]=start[name]+n*(end[name]-start[name])/step+'px';
	            }
	        }

	        if(n==step){
	            clearInterval(obj.timer);
	            options.complete && options.complete();
	        }
	    },30)
	}

	//10.封装选项卡
	function tab(selector1,selector2,action) {
		$(selector1)[action](function(){
				//移出所有的样式
			$(selector1).removeClass('active');
			$(selector2).removeClass('active');
				//添加显示的样式: active
			$(this).addClass('active');
			$(selector2).eq($(this).index()).addClass('active');
		});
	}












	
}()