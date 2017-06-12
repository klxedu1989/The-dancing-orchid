img:function(e){
      var el = e.target;
      function rnd(n,m){
        return Math.floor(Math.random()*m+n);
      }      
      var oImgDiv = el.previousElementSibling || el.previousSibling;     
      var res='';
      for(var i=0;i<4;i++){
        res+=rnd(1,9);
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
    };