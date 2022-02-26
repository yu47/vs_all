function validateForm(){
	var x=document.forms["myForm"]["email"].value;
	var atpos=x.indexOf("@");
	var dotpos=x.lastIndexOf(".");
	if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length){
		alert("不是一个有效的 e-mail 地址");
  		return false;
	}
}

function validateForm(){
	var x=document.forms["myForm"]["fname"].value;
	if (x==null || x==""){
	  alert("姓名必须填写");
	  return false;
	  }
	}
function validateForm(){
	var x=document.forms["myForm"]["phone"].value;
	if (x==null || x==""){
	  alert("联系电话不能为空");
	  return false;
	  }
	}

//百度地图API功能
var map = new BMap.Map("allmap");    // 创建Map实例
map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);  // 初始化地图,设置中心点坐标和地图级别
//添加地图类型控件
map.addControl(new BMap.MapTypeControl({
  mapTypes:[
          BMAP_NORMAL_MAP,
          BMAP_HYBRID_MAP
      ]}));   
map.setCurrentCity("北京");          // 设置地图显示的城市 此项是必须设置的
map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩