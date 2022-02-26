
$(function () {
  $("#btn_login").click(function () {
      var login=$("#txt_name").val();
      var pwd=$("#txt_pwd").val();
      if (login == "" && pwd == "") {
          alert("账户或密码不能为空！");
          return false
      }
      else
      {
          if(pwd.length<6){
              alert("密码长度不能小于6位");
          return false
        }
      }
      $.post(
          "http://localhost:8080/web_1_war_exploded/AjaxServlet", // 请求路径
          { // 请求参数
              action:"jQueryPost",
              username:login,
              password:pwd,
              date:new Date()
          },
          function(data){ if(data == "1"){
              $(".cen1").csscss("display", "none");
              $(".cen1").csscss("display", "block");
          } }, // 成功的回调函数
          "text" // 返回的数据类型
      );
});

});

var row_index=0;



$(function () {
    $("#btn_post").click(function () {
        var login=$("#username").val();
        var pwd=$("#pwd").val();
        var repwd=$("#repwd").val();
        if (login == "" && pwd == ""&& repwd == "") {
            alert("账户或密码不能为空！");
        }
        else
        {
          if(pwd.length<6){
            $("#pwd_error").html("密码长度不能小于6位");
            return false
          }
          else{
            $("#pwd_error").html("");
            if(pwd != repwd){
              $("#pwd_error").html("");
              $("#repwd_error").html("两次密码不一致");
            }
            else{
              $("#repwd_error").html("");
            }
            
          }
            // $("#pwd_error").html("密码输入错误");
        }
    });


});
  $("#btn_reset").click(function () {
    $("#username").val("");
    $("#pwd").val("");
    $("#repwd").val("");
    $("#name_error").html("");
    $("#pwd_error").html("");
    $("#repwd_error").html("");
});

function  add_row()   
{   
  var text = $("#address").val();
  var table2 = document.getElementById("address_add");
  row_index++;  
  var new_row=table2.insertRow(table2.rows.length);  
  new_row.setAttribute("id", "row"+row_index);   
  var new_col=new_row.insertCell(0);  
  new_col.innerHTML="<input type='text' value='"+text+"' name='filename"+row_index+"' style='margin-left: 25%;'''>";  
  var new_col=new_row.insertCell(1);  
  new_col.innerHTML="&nbsp;<input type='button' id='btn_det' value='删除' onclick='delete_row(this.parentNode.parentNode.rowIndex)'>";    
}   

function delete_row(rowIndex)   
{  
  var table2 = document.getElementById("address_add");
  table2.deleteRow(rowIndex);  
} 