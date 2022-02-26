$(document).ready(function () {
    // each遍历li标签事件
    $('.nav').children("li").each(function (index, element) {
        $(this).click(function () {
            // 所点击导航块为active
            $(this).addClass('active').siblings().removeClass('active')

            // 所点击内容页为block，其他为none
            $($(".tab-content").children()[index]).css("display", "block")
            $($(".tab-content").children()[index]).siblings().css("display", "none")
        })
    })


    // 实现输入框搜索内容
    $('.search-tab').children("span").each(function (index, element) {
        console.log(element);
        $(this).click(function () {
            $(this).addClass('active').siblings().removeClass('active')
            $(this).addClass('search').siblings().removeClass('search')
            // 拼接url实现搜索框搜索
            if (index == 0) {

                $("#search-keyword").attr("name", "word");
                $("#search-keyword").attr("placeholder", "百度搜索");
                $("#search-form").attr("action", "https://www.baidu.com/s")
            }
            if (index == 1) {

                $("#search-keyword").attr("name", "q");
                $("#search-keyword").attr("placeholder", "Google 搜索");
                $("#search-form").attr("action", "https://www.google.com/search")
            }
            if (index == 2) {
                $("#search-keyword").attr("name", "q");
                $("#search-keyword").attr("placeholder", "GitHub搜索");
                $("#search-form").attr("action", "https://github.com/search")
            }
            if (index == 3) {
                $("#search-keyword").attr("name", "q");
                $("#search-keyword").attr("placeholder", "必应搜索");
                $("#search-form").attr("action", "https://cn.bing.com/search")
            }
            if (index == 4) {
                $("#search-keyword").attr("name", "q");
                $("#search-keyword").attr("placeholder", "图片搜索");
                $("#search-form").attr("action", "https://www.google.com.hk/search")
            }
            if (index == 5) {
                $("#search-keyword").attr("name", "q");
                $("#search-keyword").attr("placeholder", "学术搜索");
                $("#search-form").attr("action", "https://scholar.google.com/scholar")
            }
        })
    })
})
