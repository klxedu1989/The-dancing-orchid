var c = new kinerCode({
    //需要产生的验证码长度
    len:4,

    chars:[1,2,3,4,5,6,7,8,9,0,'q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','z','x','c','v','b','n','m'],
    //经典模式:指定产生验证码的词典，若不给或数组长度为0则试用默认字典
    question: false,
    //是否允许复制产生的验证码
    copy: false,
    //背景颜色[与背景图任选其一设置],bgImg: "bg.jpg",
    bgColor: "pink",
    //若选择背景图片，则背景颜色失效
    randomBg: false,
    //若选true则采用随机背景颜色，此时设置的bgImg和bgColor将失效
    //输入验证码的input对象绑定【 HTMLInputElement 】
    inputArea: inp,
    //验证码放置的区域【HTMLDivElement 】
    codeArea: code,
    //是否点击验证码刷新验证码
    click2refresh: true,
    //在填错验证码后是否刷新验证码
    false2refresh: true,
    //触发验证的方法名，如click，blur等
    validateEven: "blur",
    validateFn: function(result, code) { //验证回调函数
        if (result) {
            alert('验证成功');
        } else { 
            if (this.opt.question) {
                alert('验证失败:' + code.answer);
            } else {
                alert('验证失败:' + code.strCode);
                alert('验证失败:' + code.arrCode);
            }
        }
    }

})