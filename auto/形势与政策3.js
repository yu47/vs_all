// ==UserScript==
// @name         形势与政策自动挂机脚本
// @namespace    http://tampermonkey.net/
// @version      2.2
// @description  GCC形势与政策自动挂机脚本,一键挂机.
// @author       CodeLorin
// @match        http://xsyzc.gzcc.cn/index.php?m=member
// @match        http://xsyzc.gzcc.cn/index.php?m=member&c=index
// @grant        none
// ==/UserScript==
var flag = 0;
var time = 82 * 60 * 1000;
var stu_len = document.querySelectorAll(".nav-item .dropdown-menu li:nth-child(2n-1) a").length;
console.log(stu_len);
(function () {
    'use strict';



    //运行主函数
    function run(flag) {


        if (stu_len == flag) {
            alert("所有课程已经全部刷好!!!")
            return
        }

        let temp = document.querySelectorAll(".nav-item .dropdown-menu li:nth-child(2n-1) a")[flag]
        temp.click()
        let res = calculation_time(flag)
        console.log(res)

        setTimeout(function () {

            $('#win').window('close');

            flag = flag + 1
            run(flag)
        }, calculation_time(flag))

        //每隔5秒移动一次鼠标

        setInterval(() => {
            simulation_move()
        }, 5000)




    }
    // 模拟移动鼠标函数
    function simulation_move() {

        let x = Math.random() * 1000;
        let y = Math.random() * 1000;
        x = parseInt(x).toString();
        y = parseInt(y).toString();
        $("#xID").attr("value", x);
        $("#yID").attr("value", y);
    }

    function calculation_time(flag) {
        console.log("#timeCount_" + (119 + flag).toString())
        let src = document.querySelector("#timeCount_" + (119 + flag).toString()).textContent;

        let re = /\d+/g
        let temp = src.match(re)

        console.log(temp)

        let min = temp[0]
        let second = temp[1]
        let all = (parseInt(min) * 60 + parseInt(second)) * 1000;
        let need = time - all;

        if (need < 0) {

            return 3000;
        }
        console.log(need)
        return need
    }

    const info = $("        <div\n" +
        "            class='alert'\n" +
        "            style='\n" +
        "               border-color: transparent transparent #cccccc;\n"+
        "                height: 80px;\n" +
        "                width: 250px;\n" +
        "                border-radius: 19px;\n" +
        "                position: absolute;\n" +
        "                right: 550px;\n" +
        "                top: 65px;\n" +
        "                margin-bottom: 0;\n" +
        "            '\n" +
        "        >\n" +
        "            <button type='button' class='close' data-dismiss='alert'>&times;</button>\n" +
        "            <strong style='display: block; margin-bottom: 5px; text-align: center'>提示!</strong>\n" +
        "            <div>因为服务器原因，页面显示的时间是错误的,不影响正常挂机。</div>\n" +
        "            <div style='text-align: center'><button class='btn btn-warning start'>一键挂机</button></div>\n" +
        "        </div>")
    $("html").append(info)
    $(".start").click(() => {

        run(flag)
    })


})
    ();

