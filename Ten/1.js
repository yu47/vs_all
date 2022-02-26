// ==UserScript==
// @name         问卷星（单多选）
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @include      *://*wjx.cn/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';


    var num = document.getElementsByClassName("ui-controlgroup").length

    for (var i = 0; i < num; i++) {

        if (document.getElementsByClassName("ui-controlgroup")[i].children[0].children[0].children[0].type == "radio") {
            //单选
            var dan = document.getElementsByClassName("ui-controlgroup")[i].children.length
            document.getElementsByClassName("ui-controlgroup")[i].children[Math.floor(Math.random() * dan)].children[0].click();

        }
        else if (document.getElementsByClassName("ui-controlgroup")[i].children[0].children[0].children[0].type == "checkbox") {
            var duo = document.getElementsByClassName("ui-controlgroup")[i].children.length
            var count = 0;
            var n = document.getElementsByClassName("ui-controlgroup")[i].previousSibling.children[1].innerText.replace(/[^0-9]/ig,"")
            for (var j = 0; j < duo; j++) {

                if (Math.floor(Math.random() * 2) == 1) {
                    count = count + 1
                    document.getElementsByClassName("ui-controlgroup")[i].children[j].children[0].click();
                }
                else {
                    continue;
                }

            }
            if (count < n) {
                for (var k = 0; k < duo; k++) {


                    document.getElementsByClassName("ui-controlgroup")[i].children[k].children[0].click();



                }
            }
        }

    }






 //提交按钮
 //"ctlNext"--vm
 //"submit_button"--vj
 setTimeout(function () {
    document.getElementById("ctlNext").click()
}, 1000);

setInterval(function () {
    document.querySelector("#rectMask").click()
}, 2000);

setInterval(function () {
    var event = document.createEvent('MouseEvents');
    event.initEvent('mousedown', true, false);
    document.querySelector("#nc_1_n1z").dispatchEvent(event);
    event = document.createEvent('MouseEvents');
    event.initEvent('mousemove', true, false);
    Object.defineProperty(event, 'clientX', { get() { return 260; } })
    document.querySelector("#nc_1_n1z").dispatchEvent(event);
}, 2000);

setInterval(function () {
    document.querySelector("#nc_1_refresh1").click()
}, 3000);


//--vm--
var cg = document.getElementById("ValError")
setInterval(function () {
    var current=location.href
    while (cg.textContent == "提交成功！") {
        // self.location.href = "baidu.com"
        window.location.replace(current)
        // alert("111")
       //break
    }
}, 1000)

setInterval(function () {
    while (document.querySelector("#SM_BTN_1").innerText == " 验证失败，请再次点击按钮刷新！") {
        // self.location.href = "baidu.com"
        document.querySelector("#SM_BTN_1").click()
        // alert("111")
        //break
    }
}, 1000)
// Your code here...
})();