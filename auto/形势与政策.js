function x_y() {
    var x = Math.random() * 1000;
    var y = Math.random() * 1000;
    x = parseInt(x).toString();
    y = parseInt(y).toString();
    $("#xID").attr("value", x);
    $("#yID").attr("value", y);
    //   console.log("X坐标："+$("#xID").attr("value"));
    //   console.log("Y坐标："+$("#yID").attr("value"));
    setTimeout('x_y()', 5000);
}
function reload() {

    $('#win').window('close');
    count += 2;
       if (count == 8) {
        alert("恭喜全部课程已刷成功！！！")
    } document.querySelectorAll(".nav-item .dropdown-menu li a")[count].click();
    setTimeout('reload()', need_time(count));
    console.log('第' + (count / 2 + 1) + '完成！！！');

}
function stop() {
    $('#win').window('close');
    document.querySelectorAll(".nav-item .dropdown-menu li a")[count].click();
}
function need_time(count) {
    console.log("#timeCount_" + (118 + (count / 2 + 1)).toString())
    var src = document.querySelector("#timeCount_" + (118 + (count / 2 + 1)).toString()).textContent;

var bbb = /[0-9]+/g
var ccc = src.match(bbb)
    feng = ccc[0]
    miao =ccc[1]
    all = (parseInt(feng) * 60 + parseInt(miao)) * 1000;
    need = 720000 - all;
    console.log(feng + "        " + miao);
    console.log(all + "        " + need);
    if (need < 0) {
        console.log("error");
        return 5000;
    }
    return need
}



count = 0;
document.querySelectorAll(".nav-item .dropdown-menu li a")[count].click();
setTimeout('stop()', 2000);
setTimeout('x_y()', 5000);
setTimeout('reload()', need_time(count));