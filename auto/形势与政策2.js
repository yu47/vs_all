// ==UserScript==
// @name         形式与政策
// @namespace    http://tampermonkey.net/
// @version      1.2
// @description  用于刷形势与政策的课程，模拟用户移动鼠标，定时观看时间。
// @author       yu47
// @match        http://xsyzc.gzcc.cn/*
// @grant       none
/* globals jQuery, $, waitForKeyElements */
// ==/UserScript==

var count = 0;
(function () {
    'use strict';
    function x_y() {
        var x = Math.random() * 1000;
        var y = Math.random() * 1000;
        x = parseInt(x).toString();
        y = parseInt(y).toString();
        $("#xID").attr("value", x);
        $("#yID").attr("value", y);
        // console.log("X坐标：" + $("#xID").attr("value"));
        // console.log("Y坐标：" + $("#yID").attr("value"));
        if (count == 8) {
            alert("恭喜全部课程已刷成功！！！")
            return true;
        } 
        setTimeout(() => {
            x_y()
        }, 5000)
    }

    function reload() {
        $('#win').window('close');
        count += 2;
        if (count == 8) {
            alert("恭喜全部课程已刷成功！！！")
            return true;
        } 
        document.querySelectorAll(".nav-item .dropdown-menu li a")[count].click();
        setTimeout(() => {
            reload();
        }, need_time(count));
        // console.log('第' + (count / 2 + 1) + '完成！！！');

    }
    function stop() {
        $('#win').window('close');
        document.querySelectorAll(".nav-item .dropdown-menu li a")[count].click();
    }

    function start() {

        document.querySelectorAll(".nav-item .dropdown-menu li a")[count].click();

        setTimeout(() => {
            stop();
        }, 2000)
        // console.log('第' + (count / 2 + 1) + '完成！！！');


        setTimeout(() => {
            reload();
        }, need_time(count))
        // console.log('第' + (count / 2 + 1) + '完成！！！');


        setTimeout(() => {
            x_y()
        }, 5000)
    }
    function need_time(count) {
        console.log("#timeCount_" + (118 + (count / 2 + 1)).toString())
        var src = document.querySelector("#timeCount_" + (118 + (count / 2 + 1)).toString()).textContent;

        var bbb = /[0-9]+/g
        var ccc = src.match(bbb)
        var feng = ccc[0]
        var miao = ccc[1]
        var all = (parseInt(feng) * 60 + parseInt(miao)) * 1000;
        var need = times - all;
        // console.log(feng + "        " + miao);
        // console.log(all + "        " + need);
        if (need < 0) {
            // console.log("error");
            return 5000;
        }
        return need
    }
    var access = document.querySelector(".page-title .icon-dashboard");
    if (access){
        var msg = "本插件所提供的信息，只供参考学习交流。特此申明！\n由此引起的一切后果均须自行承担责任，与插件无关。\n         请问是否继续~";
        if (confirm(msg)==true){
            var times=prompt("请输入所观看时间（单位：分钟）");
            times = times*60*1000;
            if (times <= 0){
                return alert("时间输入错误！！！");
            }
            start();
        }else{
            alert("退出成功")
        }
    }


})();