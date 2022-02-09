$(function($) {
    // 你可以在这里继续使用$作为别名...
    $(".login_btn").click(function(event) {

        let mobile = $('input[name="mobile"]').val();
        let verifyCode = $('input[name="verifyCode"]').val();
        let password = $('input[name="password"]').val();
        $.post("http://phpclub.org.cn:8080/api/user/register", { mobile, verifyCode, password },
            function(data) {
                if (data.code != 0) {
                    alert("注册错误！！！");
                } else {
                    window.location.href = "login.html"
                }
                //debugger

            });



        return false
    })
    $('.getverifyCode').click(function(event) {
        let mobile = $('input[name="mobile"]').val();
        let verifyCode = $('input[name="verifyCode"]');

        //debugger
        $.get("http://phpclub.org.cn:8080/api/user/sendVerify", { mobile },
            function(data) {
                if (data.msg != "ok") {
                    // debugger
                    layer.msg(data.msg);
                }
                console.log("Data Loaded: " + JSON.stringify(data));

                verifyCode.val(data.data.verifyCode);
            });


        return false
    })
});