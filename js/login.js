$(function($) {
    // 你可以在这里继续使用$作为别名...
    $(".login_btn").click(function(event) {

        let mobile = $('input[name="mobile"]').val();
        let password = $('input[name="password"]').val();
        $.post("http://phpclub.org.cn:8080/api/user/login", { mobile, password },
            function(data) {
                if (data.code != 0) {
                    alert("登录错误！！！");
                } else {
                    window.location.href = "index.html"
                }
                // debugger

            });



        return false
    })

});