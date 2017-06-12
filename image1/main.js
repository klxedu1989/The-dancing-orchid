function CheckPassWord(password) {//必须为字母加数字且长度不小于8位
    var str = password;
    if (str == null || str.length < 8) {
        return false;
    }
    var reg1 = new RegExp(/^[0-9A-Za-z]+$/);
    if (!reg1.test(str)) {
        return false;
    }
    var reg = new RegExp(/[A-Za-z].*[0-9]|[0-9].*[A-Za-z]/);
    if (reg.test(str)) {
        return true;
    } else {
        return false;
    }
}

$(function () {
    //协议的显示和隐藏事件
    $('.showMod-btn').bind('click', function () {
        $('.Modals-div').fadeIn('fast');
    });
    $('.close').click(function () {
        $('.Modals-div').fadeOut('fast');
    });

    //第一个模块的表单

    //登录账号的验证
    $('#Login-ID').change(function () {
        $(this).removeClass('actInput').siblings('span').html('');
        if ($.trim($(this).val()) != "") {
            var reg = new RegExp("[`~!#$^&*()=|{}':;',\\[\\].<>/?~！@#￥……&*（）—|{}【】‘；：”“'。，、？]");
            if (reg.test($.trim($(this).val()))) {
                $(this).addClass('actInput').siblings('span').text('×账号包含特殊字符');
            } else if ($.trim($(this).val()).length < 6) {
                $(this).siblings('span').text('账号不能少于6位');
            } else {
                // alert($(this).val()) 
                $.ajax({
                    type: "get", url: "/ajaxuserinfo/chkuname.aspx",
                    data: "uname=" + encodeURIComponent($(this).val()) + "&cc=" + Math.random(),
                    dataType: 'html',
                    //async: false,
                    success: function (result) {
                        // alert(result);
                        $("#Login-ID").siblings('span').html(result);
                    },
                    error: function (msg) {
                        alert(msg);
                    }
                });
            }
        } else {
            return false;
        }
    });
    $('#mobile-phone').change(function () {
        $(this).removeClass('actInput').siblings('span').html('');
        if ($.trim($(this).val()) != "") {
            var reg = /(1[3-9]\d{9}$)/;
            if (!reg.test($(this).val())) {
                $(this).addClass('actInput').siblings('span').html('x请输入正确的手机号码');
                return false;
            }
        }
    }).bind('input propertychange', function () {
        $(this).removeClass('actInput').siblings('span').html('');
        if ($.trim($(this).val()) == "") {
            $(this).removeClass('actInput').siblings('span').html('');
        }
    });

    

    //密码验证
    $('#confirm-pwd').change(function () {
        $(this).removeClass('actInput').siblings('span').html('');
        var pwd = $('#login-pwd').val();
        if ($.trim($(this).val()) != '') {
            if ($(this).val() != pwd) {
                $(this).addClass('actInput').siblings('span').html('x密码输入不一致！');
            }
        }
    }).bind('input propertychange', function () {
        var pwd = $('#login-pwd').val();
        if ($.trim($(this).val()) == "") {
            $(this).removeClass('actInput').siblings('span').html('');
        } else {
            if ($(this).val() == pwd) {
                $(this).removeClass('actInput').siblings('span').html('');
            }
        }
    });
    $('#check-box').click(function () {
        var type = $(this).attr('data-type');
        if (type == 'false') {
            $(this).attr('data-type', 'true');
            $(this).siblings('.hint2').text('');
        } else {
            $(this).attr('data-type', 'false');
            //$(this).siblings('.hint2').text('您未同意跳舞兰服务协议!');
        }
    });


    $('#next-btn').click(function () {
        //alert("aaa");
        if (!CheckPassWord($.trim($('#login-pwd').val()))) {
            alert("密码必须为字母加数字且长度不小于8位")
            return false;
        }
        if (verification()) {
            $('#module-1').hide();
            $('#module-2').fadeIn();
        }
    });

    function verification() {
        if ($.trim($('#Login-ID').val()) == '') {
            $('input').removeClass('actInput');
            $('#Login-ID').focus().addClass('actInput');
            $('.hintLi').show();
            return false;
        } else if ($('#Login-ID').siblings('span').text() != '√恭喜!账号可以注册!') {
            $('input').removeClass('actInput');
            $('#Login-ID').focus().addClass('actInput');
            return false;
        }
        if ($.trim($('#mobile-phone').val()) == '') {
            $('input').removeClass('actInput');
            $('#mobile-phone').focus().addClass('actInput');
            $('.hintLi').show();
            return false;
        } else if ($('#mobile-phone').siblings('span').text() != '') {
            $('input').removeClass('actInput');
            $('#mobile-phone').focus().addClass('actInput');
            return false;
        }

        if ($.trim($('#login-pwd').val()) == '') {
            $('input').removeClass('actInput');
            $('#login-pwd').focus().addClass('actInput');//.siblings('span').text('x密码不能为空');
            $('.hintLi').show();
            return false;
        }
        if ($.trim($('#confirm-pwd').val()) == '') {
            $('input').removeClass('actInput');
            $('#confirm-pwd').focus().addClass('actInput');//.siblings('span').text('x确认密码不能为空');
            $('.hintLi').show();
            return false;
        } else if ($('#confirm-pwd').siblings('span').text() != '') {
            $('input').removeClass('actInput');
            $('#confirm-pwd').focus().addClass('actInput');
            return false;
        }
        if (!$('#drag .handler').is('.handler_ok_bg')) {
            $('#drag').siblings('span').text('x 验证没通过!');
            $('.hintLi').show();
            return false;
        }
        if ($('#check-box').siblings('.hint2').text().length > 1) {
            //$('.hintLi').show();
            return false;
        } else if (!$('#check-box').is(':checked')) {
            //$('.hintLi').show();
            $('#check-box').siblings('.hint2').text('您未同意跳舞兰服务协议!');
            return false;
        }
       
        return true;
    }

    function verification2() {
        if ($.trim($('#flowShop-name').val()) == '') {
            $('input').removeClass('actInput');
            $('#flowShop-name').focus().addClass('actInput');
            $('.hintLi2').show();
            return false;
        }
        if ($.trim($('#realNamebox').val()) == '') {
            $('input').removeClass('actInput');
            $('#flowShop-name').focus().addClass('actInput');
            $('.hintLi2').show();
            return false;
        }
        if ($("#phoneNum").val() == '') {
            $('input').removeClass('actInput');
            $('#phoneNum').focus().addClass('actInput');
            $('.hintLi2').show();
            return false;
        } else if (isNaN($.trim($("#phoneNum").val()))) {
            $('#phoneNum').focus().addClass('actInput').siblings('.hint2').text('联系电话不能为字符!');
            return false;
        }
        if ($("#QQNumber").val() == '') {
            $('input').removeClass('actInput');
            $('#QQNumber').focus().addClass('actInput');
            $('.hintLi2').show();
            return false;
        } else if (isNaN($.trim($("#QQNumber").val()))) {
            $('#QQNumber').focus().addClass('actInput').siblings('.hint2').text('QQ号码不能为字符!');
            return false;
        }
        var site1 = $('#province').text(), site2 = $('#city').text(), site3 = $('#district').text(), site4 = $('#street').text();
        var region = site1 + site2 + site3 + site4;
        $('#region').val(region);
        if ($('#region').val() == '') {
            $('input').removeClass('actInput');
            $('.analog-input').addClass('actInput');
            $('.hintLi2').show();
            return false;
        }
        if ($('.address-location').val() == '') {
            $('input').removeClass('actInput');
            $('.address-location').focus().addClass('actInput');
            $('.hintLi').show();
            return false;
        }
        return true;

    }

    $('input[type="radio"]').change(function () {
        var seldrop = $("input[type='radio']:checked").val();
        if (seldrop == "2" || seldrop == "3") {
            $("#hdurl").show().find('input').focus();
        } else {
            $("#hdurl").hide();
        }
    });


    //模块2的事件
    $('#submitBtn').click(function () {
        if (verification2()) {
            var login_id = $('#login_id').val(),
                login_pwd = hex_md5($('#login_pwd').val()),
                mobile_phone = $('#mobile_phone').val();
            var flowShop_name = $('#flowShop-name').val(),
                flowerStore = $('input[type="radio"]:checked').val(),
                hdurl = $('#hdurl').val();
            var realNamebox = $('#realNamebox').val(),
                phoneNum = $('#phoneNum').val(),
                QQNumber = $('#QQNumber').val(),
                weiXin = $('#weiXin').val();
            var province = $('#province').text(),
                city = $('#city').text(),
                district = $('#district').text(),
                street = $('#street').text(),
                address_location = $('.address-location').val(),
                lng = $('#lng').val(),
                lat = $('#lat').val();
            var dataString = { 'login_id': login_id, 'login_pwd': login_pwd, 'mobile_phone': mobile_phone, 'flowShop_name': flowShop_name, 'flowerStore': flowerStore, 'hdurl': hdurl, 'realNamebox': realNamebox, 'phoneNum': phoneNum, 'QQNumber': QQNumber, 'weiXin': weiXin, 'address_location': address_location, 'lng': lng, 'lat': lat, 'province': province, 'city': city, 'district': district, 'street': street };


            $.ajax({
                type: "post",
                url: "/ajaxUserInfo/ajaxReg.aspx?cc=" + Math.random(),
                data: dataString,
                dataType: "json",
                success: function (data) {
                    if (data.code == '1') { 
                        $('#module-3').fadeIn().siblings('section').hide();
                        var wait = 5;
                        timeOut();
                        function timeOut() {
                            if (wait == 0) {
                                window.location.href = '/login/'
                            } else {
                                setTimeout(function () {
                                    wait--;
                                    $('.second').text(wait);
                                    timeOut();
                                }, 1000)
                            }
                        }
                    } else {
                        alert("0");
                    }
                },
                error: function (jqXHR, textStatus, errorThrown) {//请求错误     function (msg)  中的msg  表示错误信息
                    alert(jqXHR.status);
                    alert(jqXHR.readyState);
                    alert(jqXHR.statusText);
                }
            });
        }
    });

});

