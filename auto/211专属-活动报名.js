
dialogs.alert("211专属自动抢学时\n\n请开启无障碍和悬浮窗权限");
toast("211专属自动抢学时启动成功！！！")
auto.waitFor();

console.show();

console.setPosition(400, 100);

function clock() {
    console.clear();
    now = new Date();
    h = now.getHours();
    m = now.getMinutes();
    s = now.getSeconds();
    console.log("当前时间为："+h + ":", m  + ":", s);
    }




while(true){
    clock();
    var time1 = Date.parse( new Date());
    sleep(1000);
    if(text("立即报名").exists()){
        log("报名时间到！！！冲冲冲~")
        text("立即报名").findOne().click();

        sleep(1000);

        
        if(text("姓名").exists()){
            let name = text("姓名").findOne().bounds();
        click(name.centerX(),name.centerY()+100);
        click(name.centerX(),name.centerY()+100);
        click(name.centerX(),name.centerY()+100);
        click(name.centerX(),name.centerY()+100);
        sleep(0);
        setText("林嘉发");

        log("姓名填写成功！");}


        if(text("手机号").exists()){
            let ipone = text("手机号").findOne().bounds();
        click(ipone.centerX(),ipone.centerY()+100);
        click(ipone.centerX(),ipone.centerY()+100);
        click(ipone.centerX(),ipone.centerY()+100);
        click(ipone.centerX(),ipone.centerY()+100);
        sleep(0);
        setText("15038671490");

        log("手机号填写成功！");}


        
        if(text("班级").exists()){
            let cla = text("班级").findOne().bounds();
        click(cla.centerX(),cla.centerY()+100);
        click(cla.centerX(),cla.centerY()+100);
        click(cla.centerX(),cla.centerY()+100);
        click(cla.centerX(),cla.centerY()+100);
        sleep(0);
        setText("计科 1902");

        log("班级填写成功！");
}

        
        if(text("性别").exists()){
            let sex = text("性别").findOne().bounds();
        click(sex.centerX(),sex.centerY()+100);
        click(sex.centerX(),sex.centerY()+100);
        click(sex.centerX(),sex.centerY()+100);
        click(sex.centerX(),sex.centerY()+100);
        sleep(0);
        setText("男");

        log("性别填写成功！");}




        if(text("学院").exists()){
        let xue = text("学院").findOne().bounds();
        click(xue.centerX(),xue.centerY()+100);
        click(xue.centerX(),xue.centerY()+100);
        click(xue.centerX(),xue.centerY()+100);
        click(xue.centerX(),xue.centerY()+100);
        sleep(0);
        setText("信息技术与工程学院");

        log("学院填写成功！");}


        
        if(text("专业").exists()){
            let zhuanye = text("专业").findOne().bounds();
        click(zhuanye.centerX()/2,zhuanye.centerY()+100);
        click(zhuanye.centerX()/2,zhuanye.centerY()+100);
        click(zhuanye.centerX()/2,zhuanye.centerY()+100);
        click(zhuanye.centerX()/2,zhuanye.centerY()+100);
        sleep(0);
        setText("计算机科学与技术");

        log("专业填写成功！");}
        

        
        if(text("年级").exists()){
            let grade = text("年级").findOne().bounds();
        click(grade.centerX(),grade.centerY()+100);
        click(grade.centerX(),grade.centerY()+100);
        click(grade.centerX(),grade.centerY()+100);
        click(grade.centerX(),grade.centerY()+100);
        sleep(0);
        setText("1902");

        log("年级填写成功！");}

        
        if(text("学号").exists()){
        let id = text("学号").findOne().bounds();
        click(id.centerX()/2,id.centerY()+100);
        click(id.centerX()/2,id.centerY()+100);
        click(id.centerX()/2,id.centerY()+100);
        click(id.centerX()/2,id.centerY()+100);
        sleep(0);
        setText("201906110068");

        log("学号填写成功！");}

        log("全部填写成功")
        text("提交").findOne().click();
        text,click();
        toast("报名成功！！！！！")
        var time2 = Date.parse( new Date());
        time =(time2-time1)/1000
        console.log("用时："+time +"秒");
        exit();
        break;
    }
}
