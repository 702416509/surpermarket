$(document).ready(function(){
	$("#goodsquery,#goodsadd").click(function(){
		$.session.set('choosequery',"goods");
	});
	$("#providerquery,#provideradd").click(function(){
		$.session.set('choosequery',"provider");
	});
	$("#shopvipquery,#shopvipadd,#shopvipsavemoney").click(function(){
		$.session.set('choosequery',"shopvip");
	});
	$("#userquery,#useradd").click(function(){
		$.session.set('choosequery',"user");
	});
	$("#rolequery,#roleadd").click(function(){
		$.session.set('choosequery',"role");
	});
	$("#goodsunitquery,#goodsunitadd").click(function(){
		$.session.set('choosequery',"goodsunit");
	});
	$("#goodsclassquery,#goodsclassadd").click(function(){
		$.session.set('choosequery',"goodsclass");
	});
	$("#instorequery").click(function(){
		$.session.set('choosequery',"instore");
	});
	$("#sellquery").click(function(){
		$.session.set('choosequery',"sell");
	});
	$("#selldetailquery").click(function(){
		$.session.set('choosequery',"selldetail");
	});
	$("#vipsavemoneyquery").click(function(){
		$.session.set('choosequery',"vipsavemoney");
	});
	
	$("#hdp-update-UPassword").bind("change blur",function(){
		var updatepwd = $("#hdp-update-UPassword").val();
		$.ajax({
			url:"loginServlet",
			data:{"action":"compareTopwd","updatepwd":updatepwd},
			type:"post",
			dataType:"json",
			success:function(data,state){
				if(data=="0"){
					$("#upadtepwdtip").html("可以").css("color","green");
				}else{
					$("#upadtepwdtip").html("不可以和上次密码相同").css("color","red");
					$("#hdp-update-UPassword")[0].focus();
				}
			}
		});
	});
	$("#hdp-update-reUPassword").change(function(){
		var reupdatepwd = $("#hdp-update-reUPassword").val();
		var updatepwd = $("#hdp-update-UPassword").val();
		if(updatepwd==reupdatepwd){
			$("#reupdatepwdtip").html("可以").css("color","green");
		}else{
			$("#reupdatepwdtip").html("不可以").css("color","green");
		}
	});
	$("#updatepwd-btn").click(function(){
		var reupdatepwd = $("#hdp-update-reUPassword").val();
		var updatepwd = $("#hdp-update-UPassword").val();
		if(updatepwd==reupdatepwd){
			$.ajax({
				url:"loginServlet",
				data:{"action":"updatepwdnow","updatepwd":updatepwd},
				type:"post",
				dataType:"json",
				success:function(data,state){
					if(data=="1"){
						alert("请重新登录!");
						$.session.clear();
						window.location.href ="login.jsp";
					}
				}
			});
		}else{
			$("#hdp-update-reUPassword")[0].focus();
		}
	});
	
	
});