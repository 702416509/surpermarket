$(document).ready(function(){
			$("#loginbtn").click(function(){
				$.ajax({
					url:"loginServlet",
					data:{"action":"login","username":$("#inputEmail").val(),"password":$("#inputPassword").val()},
					type:"post",
					dataType:"json",
					beforeSend:function(){$("#msg").html("正在登录...");},
					success:function(data,state){
						if(data==1){
							window.location.href ="index.jsp";
						}else if(data == 0){
							$("#msg").html("请登录");
							$("#errorlogin").html("您的账号或者密码输入错误,请重新输入");
							$("#inputEmail").val("");
							$("#inputPassword").val("");
						}else if(data == -1){
							$("#msg").html("请登录");
							$("#errorlogin").html("不存在该用户");
							$("#inputEmail").val("");
							$("#inputPassword").val("");
						}
					}
				});
			});
		});