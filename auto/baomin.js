//bounds("38,328,1001,457")
// text("自动填写").findOne().click();


toast("211专属自动抢学时启动成功！！！")
liji=text("立即报名").findOne();
log(liji.bounds().weigh)





while(true){
    if(liji!=null){
        liji.click();

        sleep(1000);

        
        if(text("姓名").exists()){
            let name = text("姓名").findOne().bounds();
        click(name.centerX(),name.centerY()+100);
        click(name.centerX(),name.centerY()+100);
        setText("钟昱生");}


        if(text("手机号").exists()){
            let ipone = text("手机号").findOne().bounds();
        click(ipone.centerX(),ipone.centerY()+100);
        click(ipone.centerX(),ipone.centerY()+100);
        setText("19124334562");}


        
        if(text("班级").exists()){
            let cla = text("班级").findOne().bounds();
        click(cla.centerX(),cla.centerY()+100);
        click(cla.centerX(),cla.centerY()+100);
        setText("计科 1902");
}

        
        if(text("性别").exists()){
            let sex = text("性别").findOne().bounds();
        click(sex.centerX(),sex.centerY()+100);
        click(sex.centerX(),sex.centerY()+100);
        setText("男");}



        
        if(text("学院").exists()){
            let xue = text("学院").findOne().bounds();
        click(xue.centerX(),xue.centerY()+100);
        click(xue.centerX(),xue.centerY()+100);
        setText("信息技术与工程学院");}


        
        if(text("专业").exists()){
            let zhuanye = text("专业").findOne().bounds();
        click(zhuanye.centerX(),zhuanye.centerY()+100);
        click(zhuanye.centerX(),zhuanye.centerY()+100);
        setText("计算机科学与技术");}
        

        
        if(text("年级").exists()){
            let grade = text("年级").findOne().bounds();
        click(grade.centerX(),grade.centerY()+100);
        click(gradee.centerX(),grade.centerY()+100);
        setText("1902");}

        
        if(text("学号").exists()){
        let id = text("学号").findOne().bounds();
        click(id.centerX(),id.centerY()+100);
        click(id.centerX(),id.centerY()+100);
        setText("201906110069");}


        //text("提交").findOne().click();
        log("成功")
        toast("填写成功！！！！！")
        break;
    }
}
