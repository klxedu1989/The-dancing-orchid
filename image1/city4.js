
 $(function(){
	 //显示选择地址模块
	 $('.analog-input').click(function(){
		$('.city-select').fadeToggle();
	 });

	 //省份  城市  区县 街道的切换
	 $('#tab_province').click(function(){
		 $(this).addClass('current').siblings('a').removeClass('current');
		 $('#city-province').addClass('current').siblings('div').removeClass('current');
	 });
	 $('#tab_city').click(function(){
		 $(this).addClass('current').siblings('a').removeClass('current');
		 $('#city-city').addClass('current').siblings('div').removeClass('current');
	 });
	 $('#tab_district').click(function(){
		 $(this).addClass('current').siblings('a').removeClass('current');
		 $('#city-district').addClass('current').siblings('div').removeClass('current');
	 });
	 $('#tab_street').click(function(){
		 $(this).addClass('current').siblings('a').removeClass('current');
		 $('#city-street').addClass('current').siblings('div').removeClass('current');
	 });

	var province='',cityN='',districtN='';
	 //省份
	$('#city-province li a').click(function(){
		$('#city-province li a').removeClass('selected');
		$(this).addClass('selected');

		$('#province').text($(this).text());
		$('#city').text('');
		$('#district').text('');
		$('#street').text('');

		province=$(this).attr('value');
		//alert(valNum)
		//拿到该省城市的数组
		var cityS=dsy.Items['0_'+province];
		var cityUl='<ul class="clearFloat">';
		for(var i=0;i<cityS.length;i++){
			cityUl+='<li><a href="javascript:void(0)"  alt="'+cityS[i]+'">'+cityS[i]+'</a></li>'
		}
		cityUl+='</ul>';

		$('#city-city').html(cityUl);
		$('#city-district').html('');
		$('#city-street').html('');

		setTimeout(function(){
			$('#city-city').addClass('current').siblings('div').removeClass('current');
			$('#tab_city').addClass('current').siblings('a').removeClass('current');
		},100);

		city();
	});
	 //城市
	 function city(){
		 $('#city-city li a').click(function(){
			 $('#city-city li a').removeClass('selected');
			 $(this).addClass('selected');
			 var text=$(this).text();
			 $('#city').text(text);
			 cityN=$('#city-city li a').index($(this));
			 //拿到该省城市的数组
			 var cityS2=dsy.Items['0_'+province+'_'+cityN];
			 var cityUl2='<ul class="clearFloat">';
			 for(var i=0;i<cityS2.length;i++){
				 cityUl2+='<li><a href="javascript:void(0)"  alt="'+cityS2[i]+'">'+cityS2[i]+'</a></li>'
			 }
			 cityUl2+='</ul>';
			 $('#city-district').html(cityUl2);
			 $('#city-street').html('');

			 setTimeout(function(){
				 $('#city-district').addClass('current').siblings('div').removeClass('current');
				 $('#tab_district').addClass('current').siblings('a').removeClass('current');
			 },100);
			district();
		 });

	 }
	 //区县
	 function district(){
		 $('#city-district li a').click(function(){
			 $('#city-district li a').removeClass('selected');
			 $(this).addClass('selected');
			 var text=' '+$(this).text();
			 $('#district').text(text);
			 districtN=$('#city-district li a').index($(this));
			 //拿到该省城市的数组
			 var cityS3=dsy.Items['0_'+province+'_'+cityN+'_'+districtN];
			 if(cityS3!=undefined){
				 var cityUl3='<ul class="clearFloat">';
				 for(var i=0;i<cityS3.length;i++){
					 cityUl3+='<li><a href="javascript:void(0)"  alt="'+cityS3[i]+'">'+cityS3[i]+'</a></li>'
				 }
				 cityUl3+='</ul>';
				 $('#city-street').html(cityUl3);
			 }else{
				 $('.city-select').hide();
				 $('.analog-input').removeClass('actInput');
			 }


			 setTimeout(function(){
				 $('#city-street').addClass('current').siblings('div').removeClass('current');
				 $('#tab_street').addClass('current').siblings('a').removeClass('current');
			 },100);
			 street()
		 })
	 }

	 //街道
	 function street(){
		 $('#city-street li a').click(function(){
			 $('#city-street li a').removeClass('selected');
			 $(this).addClass('selected');
			 var text=' '+$(this).text();
			 $('#street').text(text);
			$('.city-select').hide();
		 })
	 }


 });