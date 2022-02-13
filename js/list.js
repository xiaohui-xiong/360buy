/*
@功能：列表页js
@作者：diamondwang
@时间：2013年11月13日
*/

// $(function(){
// 	$(".child h3").click(function(){
// 		$(this).toggleClass("on").parent().find("ul").toggle();
// 	});
// });


let userInfo = null;

window.localStorage.getItem("userInfo") && (userInfo = JSON.parse(localStorage.getItem("userInfo")));
$(function() {
    userInfo && $(".topnav_right>ul>li").eq(0).html('您好,' + userInfo.nickname + '[<a href="login.html">退出</a>]')
})

function getUrlparam(name) {
    //debugger
    let params = location.search.substr(1).split("&");
    for (let i = 0; i < params.length; i++) {
        let keyvalue = params[i].split("=");
        if (keyvalue[0] == name) {
            return keyvalue[1];
        }
        console.log(keyvalue[1]);
    }
}
$(function() {
    let categoryId = getUrlparam("id")
    $.get("http://phpclub.org.cn:8080/api/goods/lists", { categoryId }, response => {
        console.log(response.data);
        let html = "";
    })
})