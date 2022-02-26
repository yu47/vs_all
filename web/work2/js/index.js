$(document).ready(function () {
    // join();
    function join(){
        var times=prompt("请输入:哇塞！！  i了i了  怎么会有这么好看的导航");
        if (times == "哇塞！！  i了i了  怎么会有这么好看的导航"){
             alert("谢谢宁的评价~");
        }
        else{
            alert("输入错误！！！再见！！！");
            alert("再给你一次机会！！");
            join();
            }
    }

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
                $("#search-keyword").attr("name", "wd");
                $("#search-keyword").attr("placeholder", "高清电影搜索");
                $("#search-form").attr("action", "https://www.zhenbuka2.com/vodsearch/-------------/")
            }
            if (index == 4) {
                $("#search-keyword").attr("name", "q");
                $("#search-keyword").attr("placeholder", "必应搜索");
                $("#search-form").attr("action", "https://cn.bing.com/search")
            }
            if (index == 5) {
                $("#search-keyword").attr("name", "q");
                $("#search-keyword").attr("placeholder", "图片搜索");
                $("#search-form").attr("action", "https://www.google.com.hk/search")
            }
        })
    })
})
