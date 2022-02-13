let userInfo = null;
window.localStorage.getItem("userInfo") && (userInfo = JSON.parse(localStorage.getItem("userInfo")));
$(function() {
    userInfo && $(".topnav_right>ul>li").eq(0).html('您好,' + userInfo.nickname + '[<a href="login.html">退出</a>]')
})
console.log(userInfo);

$(function() {

    $.get("http://phpclub.org.cn:8080/api/system/category",
            function(response) {
                console.log(response);
                // debugger
                let html = '';
                response.data.forEach((item, index) => {
                    html += '<div class="cat"><h3><a>' + item.cateName + '</a><b></b></h3><div class="cat_detail">';
                    item.children && item.children.forEach((item2, index2) => {
                        console.log(item2);
                        html += `<dl class= "${index2 == 0? 'dl_1st':''}"><dt><a href="/showList.html?Id=${item2.id}">${item2.cateName}</a></dt>`;
                        item2.children && item2.children.forEach((item3, index3) => {
                            html += `<dd><a href="/showList.html?Id=${item3.id}">${item3.cateName}</a></dd>`;
                        })
                        html += '</dl>';

                    })

                    html += '</div></div>'


                })
                console.log(html);
                $(".cat_bd").html(html);
                $(".cat").hover(function() {
                    $(this).find(".cat_detail").show();
                    $(this).find("h3").addClass("on");
                }, function() {
                    $(this).find(".cat_detail").hide();
                    $(this).find("h3").removeClass("on");
                });
            })
        //导航菜单效果
})