// ==UserScript==
// @name         问卷星
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.wjx.cn/vj/tjqdvAe.aspx
// @match        https://www.wjx.cn/vj/OXrxdlS.aspx
// @icon         https://www.google.com/s2/favicons?domain=wjx.cn
// @grant        none
// ==/UserScript==

function select_3(items){
    //    var items = [1,2,3];
        var i = items[Math.floor(Math.random() * items.length)];
        return i.toString()
    }
    
    function select_4(items){
    //    var items = [1,2,3,4];
        var i = items[Math.floor(Math.random() * items.length)];
        return i.toString()
    }
    
    
    function select_5(items){
    //    var items = [1,2,3,4,5];
        var i = items[Math.floor(Math.random() * items.length)];
        return i.toString()
    }
    
    function select_6(items){
    //    var items = [1,2,3,4,5,6];
        var i = items[Math.floor(Math.random() * items.length)];
        return i.toString()
    }
    
    function post(){
    
        var i_1 = [1,1,1,1,1,2,2,2,4,4,4,4,4,3];
        $("#q1_"+select_4(i_1)).click();
    
        var i_2 = [1,1,1,1,2,2,4,3,3,3,3,5,5];
        $("#q2_"+select_5(i_2)).click();
    
        var i_3 = [1,1,2,2,2,2,2,3,3,3];
        $("#q3_"+select_3(i_3)).click();
    
        var i_4 = [1,1,1,2,3,3,3,3,3,3,4,4];
        $("#q4_"+select_4(i_4)).click();
    
        var i_5 = [1,1,1,1,1,1,1,1,1,2,2,2,2,3,3,3,3,4,4,5,6,6];
        $("#q5_"+select_6(i_5)).prop("checked",true);
        $("#q5_"+select_6(i_5)).prop("checked",true);
    
        var i_6 = [1,1,1,1,1,2,3,3,3,3,4,4,2];
        $("#q6_"+select_4(i_6)).click();
    
        var i_7 = [1,1,1,1,3,3,3,3,4,4,4,5,5,5];
        $("#q7_"+select_4(i_7)).prop("checked",true);
        $("#q7_"+select_4(i_7)).prop("checked",true);
    
        var i_8 = [1,1,1,1,2,2,3,3,3,3,4,4];
        $("#q9_"+select_4(i_8)).click();
    
        var i_9 = [1,1,1,2,2,2,2,3,3,4];
        $("#q10_"+select_4(i_9)).click();
    
        var i_10 = [1,1,2,2,2,2,2,2,3,3,3,3,3,4,4];
        $("#q11_"+select_4(i_10)).click();
    
        setTimeout(() => {
               $("#submit_button").click();
            }, 28000)
    
    }
    
    
        var timeout=30;
    var count=0
    var current=location.href; // 获取当前的URL
    if(timeout>0){
    reload();
    }
    else
        location.replace(current);  // 时间间隔不大于0，仅刷新一次
    
    function reload(){
        post();
       setTimeout(() => {
              'reload()'
            }, 1000*timeout); // timeout秒后执行reload函数，实现无限循环刷新
        count++;
        console.log('每（'+timeout+'）秒自动刷新,刷新次数：'+count);
        var fr4me='<frameset cols=\'*\'>\n<frame src=\''+current+'\'/>';
        fr4me+='</frameset>';
        with(document)
        {
            write(fr4me);
            void(close())
        };
        console.log('每（'+timeout+'）秒新,刷新次数：'+count);
    }
    
    (function() {
        'use strict';
    
        // Your code here...
    })();