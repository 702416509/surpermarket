function flashbydata(choosequery,data){
	var str="";
	if($("#current").text()=="1"){
		$("#previous a").removeClass("hdp-hand");
		$("#previous").removeClass("active");
		$("#previous").addClass("disabled");
	}else{
		$("#previous").removeClass("disabled");
		$("#previous").addClass("active");
		$("#previous a").addClass("hdp-hand");
	}
	if($("#current").text()==$("#all").text()){
		$("#next a").removeClass("hdp-hand");
		$("#next").removeClass("active");
		$("#next").addClass("disabled");
	}else{
		$("#next").removeClass("disabled");
		$("#next").addClass("active");
		$("#next a").addClass("hdp-hand");
	}
	if(choosequery=="goods"){
		str+="<tr>";
		str+="<td>商品条码</td>";
		str+="<td>商品名称</td>";
		str+="<td>商品种类</td>";
		str+="<td>规格等级</td>";
		str+="<td>单位</td>";
		str+="<td>报警数量</td>";
		str+="<td>零售价</td>";
		str+="<td>会员价</td>";
		str+="<td>库存量</td>";
		str+="<td colspan='2'>操作</td>";
		str+="</tr>";
		$.each(data.goodslist,function(index,item){
			if(item.gAmount<item.gMinNumber){
				str+="<tr style='background-color:#f00 !important;'>";
			}else{
				str+="<tr>";
			}
			str+="<td>"+item.gId+"</td>";
			str+="<td id='"+item.gId+"gName'>"+item.gName+"</td>";
			str+="<td id='"+item.gId+"cName'>"+item.goodsClass.cName+"</td>";
			str+="<td id='"+item.gId+"gSpec'>"+item.gSpec+"</td>";
			str+="<td id='"+item.gId+"gUName'>"+item.goodsUnit.gUName+"</td>";
			str+="<td id='"+item.gId+"gMinNumber'>"+item.gMinNumber+"</td>";
			str+="<td id='"+item.gId+"salePrice'>"+item.salePrice+"</td>";
			str+="<td id='"+item.gId+"vipPrice'>"+item.vipPrice+"</td>";
			str+="<td id='"+item.gId+"gAmount'>"+item.gAmount+"</td>";
			str+="<td><button type='button' class='btn btn-success btn-sm' id='"+item.gId+"btn' onclick='query(\""+$.session.get('choosequery')+"\","+item.gId+")'>修改</button></td>";
			str+="<td><button type='button' class='btn btn-danger btn-sm' id='"+item.gId+"btn' onclick='del(\""+$.session.get('choosequery')+"\","+item.gId+")'>删除</button></td>";
			str+="</tr>";
		});
		$("#hdp-body-tb-data").html(str);
	}else if(choosequery=="provider"){
		str+="<tr>";
		str+="<td>供货商编码</td>";
		str+="<td>供货商名称</td>";
		str+="<td>电话</td>";
		str+="<td>地址</td>";
		str+="<td>单位</td>";
		str+="<td>联系人</td>";
		str+="<td colspan='2'>操作</td>";
		str+="</tr>";
		$.each(data.goodsproviderlist,function(index,item){
			str+="<tr>";
			str+="<td>"+item.gPId+"</td>";
			str+="<td id='"+item.gPId+"gPName'>"+item.gPName+"</td>";
			str+="<td id='"+item.gPId+"gPPhone'>"+item.gPPhone+"</td>";
			str+="<td id='"+item.gPId+"gPAddress'>"+item.gPAddress+"</td>";
			str+="<td id='"+item.gPId+"gPLinkman'>"+item.gPLinkman+"</td>";
			str+="<td><button type='button' class='btn btn-success btn-sm' id='"+item.gPId+"btn' onclick='query(\""+$.session.get('choosequery')+"\","+item.gPId+")'>修改</button></td>";
			str+="<td><button type='button' class='btn btn-danger btn-sm' id='"+item.gPId+"btn' onclick='del(\""+$.session.get('choosequery')+"\","+item.gPId+")'>删除</button></td>";
			str+="</tr>";
		});
		$("#hdp-body-tb-data").html(str);
	}else if(choosequery=="shopvip"){
		str+="<tr>";
		str+="<td>会员卡号</td>";
		str+="<td>姓名</td>";
		str+="<td>生日</td>";
		str+="<td>电话</td>";
		str+="<td>消费总金额</td>";
		str+="<td>积分</td>";
		str+="<td>消费次数</td>";
		str+="<td>积分率</td>";
		str+="<td>余额</td>";
		str+="<td colspan='2'>操作</td>";
		str+="</tr>";
		$.each(data.shopviplist,function(index,item){
			str+="<tr>";
			str+="<td>"+item.vId+"</td>";
			str+="<td id='"+item.vId+"vName'>"+item.vName+"</td>";
			str+="<td id='"+item.vId+"vBirthday'>"+item.vBirthday+"</td>";
			str+="<td id='"+item.vId+"vPhone'>"+item.vPhone+"</td>";
			str+="<td id='"+item.vId+"consumeSum'>"+item.consumeSum+"</td>";
			str+="<td id='"+item.vId+"consumeScore'>"+item.consumeScore+"</td>";
			str+="<td id='"+item.vId+"consumeCount'>"+item.consumeCount+"</td>";
			str+="<td id='"+item.vId+"consumeRate'>"+item.consumeRate+"</td>";
			str+="<td id='"+item.vId+"vBalance'>"+item.vBalance+"</td>";
			str+="<td><button type='button' class='btn btn-success btn-sm' id='"+item.vId+"btn' onclick='query(\""+$.session.get('choosequery')+"\","+item.vId+")'>修改</button></td>";
			str+="<td><button type='button' class='btn btn-danger btn-sm' id='"+item.vId+"btn' onclick='del(\""+$.session.get('choosequery')+"\","+item.vId+")'>删除</button></td>";
			str+="</tr>";
		});
		$("#hdp-body-tb-data").html(str);
	}else if(choosequery=="user"){
		str+="<tr>";
		str+="<td>账号</td>";
		str+="<td>密码</td>";
		str+="<td>真实姓名</td>";
		str+="<td>角色</td>";
		str+="<td colspan='2'>操作</td>";
		str+="</tr>";
		$.each(data.userlist,function(index,item){
			str+="<tr>";
			str+="<td>"+item.uId+"</td>";
			str+="<td id='"+item.uId+"uPassword'>"+item.uPassword+"</td>";
			str+="<td id='"+item.uId+"uName'>"+item.uName+"</td>";
			str+="<td id='"+item.uId+"rName'>"+item.rolesClass.rName+"</td>";
			str+="<td><button type='button' class='btn btn-success btn-sm' id='"+item.uId+"btn' onclick='query(\""+$.session.get('choosequery')+"\",\""+item.uId+"\")'>修改</button></td>";
			str+="<td><button type='button' class='btn btn-danger btn-sm' id='"+item.uId+"btn' onclick='del(\""+$.session.get('choosequery')+"\",\""+item.uId+"\")'>删除</button></td>";
			str+="</tr>";
		});
		$("#hdp-body-tb-data").html(str);
	}else if(choosequery=="role"){
		str+="<tr>";
		str+="<td>编号</td>";
		str+="<td>角色名称</td>";
		str+="<td colspan='2'>操作</td>";
		str+="</tr>";
		$.each(data.rolelist,function(index,item){
			str+="<tr>";
			str+="<td>"+item.rId+"</td>";
			str+="<td id='"+item.rId+"rName'>"+item.rName+"</td>";
			str+="<td><button type='button' class='btn btn-success btn-sm' id='"+item.rId+"btn' onclick='query(\""+$.session.get('choosequery')+"\","+item.rId+")'>修改</button></td>";
			str+="<td><button type='button' class='btn btn-danger btn-sm' id='"+item.rId+"btn' onclick='del(\""+$.session.get('choosequery')+"\","+item.rId+")'>删除</button></td>";
			str+="</tr>";
		});
		$("#hdp-body-tb-data").html(str);
	}else if(choosequery=="goodsunit"){
		str+="<tr>";
		str+="<td>编号</td>";
		str+="<td>单位名称</td>";
		str+="<td colspan='2'>操作</td>";
		str+="</tr>";
		$.each(data.goodsunitlist,function(index,item){
			str+="<tr>";
			str+="<td>"+item.gUId+"</td>";
			str+="<td id='"+item.gUId+"gUName'>"+item.gUName+"</td>";
			str+="<td><button type='button' class='btn btn-success btn-sm' id='"+item.gUId+"btn' onclick='query(\""+$.session.get('choosequery')+"\","+item.gUId+")'>修改</button></td>";
			str+="<td><button type='button' class='btn btn-danger btn-sm' id='"+item.gUId+"btn' onclick='del(\""+$.session.get('choosequery')+"\","+item.gUId+")'>删除</button></td>";
			str+="</tr>";
		});
		$("#hdp-body-tb-data").html(str);
	}else if(choosequery=="goodsclass"){
		str+="<tr>";
		str+="<td>类别编号</td>";
		str+="<td>类别名称</td>";
		str+="<td colspan='2'>操作</td>";
		str+="</tr>";
		$.each(data.goodsclasslist,function(index,item){
			str+="<tr>";
			str+="<td>"+item.cId+"</td>";
			str+="<td id='"+item.cId+"cName'>"+item.cName+"</td>";
			str+="<td><button type='button' class='btn btn-success btn-sm' id='"+item.cId+"btn' onclick='query(\""+$.session.get('choosequery')+"\","+item.cId+")'>修改</button></td>";
			str+="<td><button type='button' class='btn btn-danger btn-sm' id='"+item.cId+"btn' onclick='del(\""+$.session.get('choosequery')+"\","+item.cId+")'>删除</button></td>";
			str+="</tr>";
		});
		$("#hdp-body-tb-data").html(str);
	}else if(choosequery=="instore"){
		str+="<tr>";
		str+="<td>进货流水号</td>";
		str+="<td>商品条码</td>";
		str+="<td>供应商名称</td>";
		str+="<td>进货时间</td>";
		str+="<td>进货数量</td>";
		str+="<td>进货价格</td>";
		str+="</tr>";
		$.each(data.instorelist,function(index,item){
			str+="<tr>";
			str+="<td>"+item.inStoreId+"</td>";
			str+="<td>"+item.goods.gId+"</td>";
			str+="<td>"+item.goodsprovider.gPName+"</td>";
			str+="<td>"+item.inStoreTime+"</td>";
			str+="<td>"+item.inStoreAmount+"</td>";
			str+="<td>"+item.purchasePrice+"</td>";
			str+="</tr>";
		});
		$("#hdp-body-tb-data").html(str);
	}else if(choosequery=="sell"){
		str+="<tr>";
		str+="<td>销售流水号</td>";
		str+="<td>会员卡号</td>";
		str+="<td>销售时间</td>";
		str+="<td>销售总金额</td>";
		str+="<td>销售总数</td>";
		str+="<td>收银员</td>";
		str+="</tr>";
		$.each(data.selllist,function(index,item){
			str+="<tr>";
			str+="<td>"+item.sId+"</td>";
			str+="<td>"+item.vId+"</td>";
			str+="<td>"+item.sTime+"</td>";
			str+="<td>"+item.sCountPrice+"</td>";
			str+="<td>"+item.sCount+"</td>";
			str+="<td>"+item.supermarketUser.uId+"</td>";
			str+="</tr>";
		});
		$("#hdp-body-tb-data").html(str);
	}else if(choosequery=="selldetail"){
		str+="<tr>";
		str+="<td>销售明细流水号</td>";
		str+="<td>销售流水号</td>";
		str+="<td>商品标号</td>";
		str+="<td>单品数量</td>";
		str+="<td>销售单价</td>";
		str+="</tr>";
		$.each(data.selldetaillist,function(index,item){
			str+="<tr>";
			str+="<td>"+item.sellDetailId+"</td>";
			str+="<td>"+item.sell.sId+"</td>";
			str+="<td>"+item.goods.gId+"</td>";
			str+="<td>"+item.sQuantity+"</td>";
			str+="<td>"+item.sSalePrice+"</td>";
			str+="</tr>";
		});
		$("#hdp-body-tb-data").html(str);
	}else if(choosequery=="vipsavemoney"){
		str+="<tr>";
		str+="<td>充值流水号</td>";
		str+="<td>会员名称</td>";
		str+="<td>缴费时间</td>";
		str+="<td>缴费金额</td>";
		str+="<td>充值员</td>";
		str+="</tr>";
		$.each(data.vipsavemoneylist,function(index,item){
			str+="<tr>";
			str+="<td>"+item.vSId+"</td>";
			str+="<td>"+item.shopVip.vId+"</td>";
			str+="<td>"+item.vTime+"</td>";
			str+="<td>"+item.vMoney+"</td>";
			str+="<td>"+item.supermarketUser.uId+"</td>";
			str+="</tr>";
		});
		$("#hdp-body-tb-data").html(str);
	}
	
}
function flashfirst(choosequery){
if(choosequery=="goods"){
		$("#hdp-body-title").text("商品查询");
		$("#hdp-body-search").attr("placeholder","输入关键字(条码,名称,类别)查询");//改成随数据刷新
		var str="";
		$.ajax({
			url:"managerServlet",
			type:"post",
			data:{"action":"goodsquery"},
			dataType:"json",
			success:function(data,state){
				$("#all").text(data.allpage);
				$("#searchlist").val(data.searchlist);
				$("#current").text("1");
				flashbydata(choosequery,data);
			}
		});
	}else if(choosequery=="provider"){
		$("#hdp-body-title").text("供货商查询");
		$("#hdp-body-search").attr("placeholder","输入关键字(供货商名称/电话)查询");
		var str="";
		$.ajax({
			url:"managerServlet",
			type:"post",
			data:{"action":"providerquery"},
			dataType:"json",
			success:function(data,state){
				$("#all").text(data.allpage);
				$("#searchlist").val(data.searchlist);
				$("#current").text("1");
				flashbydata(choosequery,data);
			}
		});
	}else if(choosequery=="shopvip"){
		$("#hdp-body-title").text("会员查询");
		$("#hdp-body-search").attr("placeholder","输入关键字(卡号/姓名/电话)查询");
		var str="";
		$.ajax({
			url:"managerServlet",
			type:"post",
			data:{"action":"shopvipquery"},
			dataType:"json",
			success:function(data,state){
				$("#all").text(data.allpage);
				$("#searchlist").val(data.searchlist);
				$("#current").text("1");
				flashbydata(choosequery,data);
			}
		});
	}else if(choosequery=="user"){
		$("#hdp-body-title").text("用户查询");
		$("#hdp-body-search").attr("placeholder","输入关键字(账号)查询");
		var str="";
		$.ajax({
			url:"managerServlet",
			type:"post",
			data:{"action":"userquery"},
			dataType:"json",
			success:function(data,state){
				$("#all").text(data.allpage);
				$("#searchlist").val(data.searchlist);
				$("#current").text("1");
				flashbydata(choosequery,data);
				
			}
		});
	}else if(choosequery=="role"){
		$("#hdp-body-title").text("角色查询");
		$("#hdp-body-search").attr("placeholder","输入关键字(角色名/编号)查询");
		var str="";
		$.ajax({
			url:"managerServlet",
			type:"post",
			data:{"action":"rolequery"},
			dataType:"json",
			success:function(data,state){
				$("#all").text(data.allpage);
				$("#searchlist").val(data.searchlist);
				$("#current").text("1");
				flashbydata(choosequery,data);
				
			}
		});
	}else if(choosequery=="goodsunit"){
		$("#hdp-body-title").text("单位查询");
		$("#hdp-body-search").attr("placeholder","输入关键字(单位名称/编号)查询");
		var str="";
		$.ajax({
			url:"managerServlet",
			type:"post",
			data:{"action":"goodsunitquery"},
			dataType:"json",
			success:function(data,state){
				$("#all").text(data.allpage);
				$("#searchlist").val(data.searchlist);
				$("#current").text("1");
				flashbydata(choosequery,data);
				
			}
		});
	}else if(choosequery=="goodsclass"){
		$("#hdp-body-title").text("类别查询");
		$("#hdp-body-search").attr("placeholder","输入关键字(类别名称/编号)查询");
		var str="";
		$.ajax({
			url:"managerServlet",
			type:"post",
			data:{"action":"goodsclassquery"},
			dataType:"json",
			success:function(data,state){
				$("#all").text(data.allpage);
				$("#searchlist").val(data.searchlist);
				$("#current").text("1");
				flashbydata(choosequery,data);
			}
		});
	}else if(choosequery=="instore"){
		$("#hdp-body-title").text("进货明细查询");
		$("#hdp-body-search").attr("type","calendar");
		var str="";
		$.ajax({
			url:"managerServlet",
			type:"post",
			data:{"action":"instorequery"},
			dataType:"json",
			success:function(data,state){
				$("#all").text(data.allpage);
				$("#searchlist").val(data.searchlist);
				$("#current").text("1");
				flashbydata(choosequery,data);
			}
		});
	}else if(choosequery=="sell"){
		$("#hdp-body-title").text("销售单查询");
		$("#hdp-body-search").attr("type","calendar");
		var str="";
		$.ajax({
			url:"managerServlet",
			type:"post",
			data:{"action":"sellquery"},
			dataType:"json",
			success:function(data,state){
				$("#all").text(data.allpage);
				$("#searchlist").val(data.searchlist);
				$("#current").text("1");
				flashbydata(choosequery,data);
				
			}
		});
	}else if(choosequery=="selldetail"){
		$("#hdp-body-title").text("销售明细查询");
		$("#hdp-body-search").attr("type","calendar");
		var str="";
		$.ajax({
			url:"managerServlet",
			type:"post",
			data:{"action":"selldetailquery"},
			dataType:"json",
			success:function(data,state){
				$("#all").text(data.allpage);
				$("#searchlist").val(data.searchlist);
				$("#current").text("1");
				flashbydata(choosequery,data);
				
			}
		});
	}else if(choosequery=="vipsavemoney"){
		$("#hdp-body-title").text("充值记录查询");
		$("#hdp-body-search").attr("type","calendar");
		var str="";
		$.ajax({
			url:"managerServlet",
			type:"post",
			data:{"action":"vipsavemoneyquery"},
			dataType:"json",
			success:function(data,state){
				$("#all").text(data.allpage);
				$("#searchlist").val(data.searchlist);
				$("#current").text("1");
				flashbydata(choosequery,data);
				
			}
		});
	}
}
function del(choosequery,gId){
	$.ajax({
		url:"managerServlet",
		type:"post",
		data:{"action":"del","GId":gId,"choosequery":$.session.get('choosequery')},
		dataType:"json",
		success:function(data,state){
			if(data!="0"){
				flashfirst($.session.get('choosequery'));
			}
		}
	});
}
//找到这个数据并且修改这个样式
function query(choosequery,gId){
	if(choosequery=="goods"){
		$.ajax({
			url:"managerServlet",
			type:"post",
			data:{"action":"query","choosequery":choosequery},
			dataType:"json",
			success:function(data,state){
				var str="<select id='"+gId+"cNameinp'>";
				$.each(data.goodsClasslist,function(index,item){
					if(item.cName==$("#"+gId+"cName").text()){
						str+="<option value='"+item.cId+"' selected='selected'>";
						str+=item.cName;
						str+="</option>";
					}else{
						str+="<option value='"+item.cId+"'>";
						str+=item.cName;
						str+="</option>";
					}
				});
				str+="</select>";
				$("#"+gId+"cName").html(str);
				var str2="<select id='"+gId+"gUNameinp'>";
				$.each(data.goodsUnitlist,function(index,item){
					if(item.gUName==$("#"+gId+"gUName").text()){
						str2+="<option value='"+item.gUId+"' selected='selected'>";
						str2+=item.gUName;
						str2+="</option>";
					}else{
						str2+="<option value='"+item.gUId+"'>";
						str2+=item.gUName;
						str2+="</option>";
					}
				});
				str2+="</select>";
				$("#"+gId+"gUName").html(str2);
			}
		});
		$("#"+gId+"gName").html("<input type='text' id='"+gId+"gNameinp' value='"+$("#"+gId+"gName").text()+"'/>");
		$("#"+gId+"gSpec").html("<input type='text' id='"+gId+"gSpecinp' value='"+$("#"+gId+"gSpec").text()+"'/>");
		$("#"+gId+"gMinNumber").html("<input type='number' id='"+gId+"gMinNumberinp' value='"+$("#"+gId+"gMinNumber").text()+"'/>");
		$("#"+gId+"salePrice").html("<input type='number' id='"+gId+"salePriceinp' value='"+$("#"+gId+"salePrice").text()+"'/>");
		$("#"+gId+"vipPrice").html("<input type='number' id='"+gId+"vipPriceinp' value='"+$("#"+gId+"vipPrice").text()+"'/>");
		$("#"+gId+"btn").text("确定").attr("onclick","edit(\""+$.session.get('choosequery')+"\","+gId+")");
	}else if(choosequery=="provider"){
		$("#"+gId+"gPName").html("<input type='text' id='"+gId+"gPNameinp' value='"+$("#"+gId+"gPName").text()+"'/>");
		$("#"+gId+"gPPhone").html("<input type='text' id='"+gId+"gPPhoneinp' value='"+$("#"+gId+"gPPhone").text()+"'/>");
		$("#"+gId+"gPAddress").html("<input type='text' id='"+gId+"gPAddressinp' value='"+$("#"+gId+"gPAddress").text()+"'/>");
		$("#"+gId+"gPLinkman").html("<input type='text' id='"+gId+"gPLinkmaninp' value='"+$("#"+gId+"gPLinkman").text()+"'/>");
		$("#"+gId+"btn").text("确定").attr("onclick","edit(\""+$.session.get('choosequery')+"\","+gId+")");
	}else if(choosequery=="shopvip"){
		$("#"+gId+"vName").html("<input type='text' id='"+gId+"vNameinp' value='"+$("#"+gId+"vName").text()+"'/>");
		$("#"+gId+"vPhone").html("<input type='text' id='"+gId+"vPhoneinp' value='"+$("#"+gId+"vPhone").text()+"'/>");
		$("#"+gId+"consumeSum").html("<input type='number' id='"+gId+"consumeSuminp' value='"+$("#"+gId+"consumeSum").text()+"'/>");
		$("#"+gId+"consumeScore").html("<input type='text' id='"+gId+"consumeScoreinp' value='"+$("#"+gId+"consumeScore").text()+"'/>");
		$("#"+gId+"consumeCount").html("<input type='number' id='"+gId+"consumeCountinp' value='"+$("#"+gId+"consumeCount").text()+"'/>");
		$("#"+gId+"consumeRate").html("<input type='number' id='"+gId+"consumeRateinp' value='"+$("#"+gId+"consumeRate").text()+"'/>");
		$("#"+gId+"vBirthday").html("<input type='text' id='"+gId+"vBirthdayinp' value='"+$("#"+gId+"vBirthday").text()+"'/>");
		$("#"+gId+"vBalance").html("<input type='number' id='"+gId+"vBalanceinp' value='"+$("#"+gId+"vBalance").text()+"'/>");
		$("#"+gId+"btn").text("确定").attr("onclick","edit(\""+$.session.get('choosequery')+"\","+gId+")");
	}else if(choosequery=="user"){
		$.ajax({
			url:"managerServlet",
			type:"post",
			data:{"action":"query","choosequery":choosequery},
			dataType:"json",
			success:function(data,state){
				var str="<select id='"+gId+"rNameinp'>";
				$.each(data,function(index,item){
					if(item.rName==$("#"+gId+"rName").text()){
						str+="<option value='"+item.rId+"' selected='selected'>";
						str+=item.rName;
						str+="</option>";
					}else{
						str+="<option value='"+item.rId+"'>";
						str+=item.rName;
						str+="</option>";
					}
				});
				str+="</select>";
				$("#"+gId+"rName").html(str);
			}
		});
		$("#"+gId+"uPassword").html("<input type='text' id='"+gId+"uPasswordinp' value='"+$("#"+gId+"uPassword").text()+"'/>");
		$("#"+gId+"uName").html("<input type='text' id='"+gId+"uNameinp' value='"+$("#"+gId+"uName").text()+"'/>");
		$("#"+gId+"btn").text("确定").attr("onclick","edit(\""+$.session.get('choosequery')+"\",\""+gId+"\")");
	}else if(choosequery=="role"){
		$("#"+gId+"rName").html("<input type='text' id='"+gId+"rNameinp' value='"+$("#"+gId+"rName").text()+"'/>");
		$("#"+gId+"btn").text("确定").attr("onclick","edit(\""+$.session.get('choosequery')+"\","+gId+")");
	}else if(choosequery=="goodsunit"){
		$("#"+gId+"gUName").html("<input type='text' id='"+gId+"gUNameinp' value='"+$("#"+gId+"gUName").text()+"'/>");
		$("#"+gId+"btn").text("确定").attr("onclick","edit(\""+$.session.get('choosequery')+"\","+gId+")");
	}else if(choosequery=="goodsclass"){
		$("#"+gId+"cName").html("<input type='text' id='"+gId+"cNameinp' value='"+$("#"+gId+"cName").text()+"'/>");
		$("#"+gId+"btn").text("确定").attr("onclick","edit(\""+$.session.get('choosequery')+"\","+gId+")");
	}
}
function edit(choosequery,gId){
	if(choosequery=="goods"){
	var gName = $("#"+gId+"gNameinp").val();
	var gSpec = $("#"+gId+"gSpecinp").val();
	var cId = $("#"+gId+"cNameinp").val();
	var gUId = $("#"+gId+"gUNameinp").val();
	var gMinNumber = $("#"+gId+"gMinNumberinp").val();
	var salePrice = $("#"+gId+"salePriceinp").val();
	var vipPrice = $("#"+gId+"vipPriceinp").val();
	var gAmount = $("#"+gId+"gAmount").text();
	var goods = {"gName":gName,"gSpec":gSpec,"cId":cId,"gUId":gUId,"gId":gId,"salePrice":salePrice,"vipPrice":vipPrice,"gAmount":gAmount,"gMinNumber":gMinNumber};
	$.ajax({
		url:"managerServlet",
		type:"post",
		data:{"action":"edit","goods":JSON.stringify(goods),"choosequery":choosequery},
		dataType:"json",
		success:function(data,state){
			if(data=="1"){
				$("#"+gId+"gName").html(gName);
				$("#"+gId+"gSpec").html(gSpec);
				$("#"+gId+"cName").html($("#"+gId+"cNameinp option:selected").text());
				$("#"+gId+"gUName").html($("#"+gId+"gUNameinp option:selected").text());
				$("#"+gId+"gMinNumber").html(gMinNumber);
				$("#"+gId+"salePrice").html(salePrice);
				$("#"+gId+"vipPrice").html(vipPrice);
			}
		}
	});
	$("#"+gId+"btn").text("修改").attr("onclick","query("+gId+")");
	}else if(choosequery=="provider"){
		var gPName = $("#"+gId+"gPNameinp").val();
		var gPPhone = $("#"+gId+"gPPhoneinp").val();
		var gPAddress = $("#"+gId+"gPAddressinp").val();
		var gPLinkman = $("#"+gId+"gPLinkmaninp").val();
		var goods = {"gPName":gPName,"gPPhone":gPPhone,"gPAddress":gPAddress,"gPLinkman":gPLinkman,"gId":gId};
		$.ajax({
			url:"managerServlet",
			type:"post",
			data:{"action":"edit","goods":JSON.stringify(goods),"choosequery":choosequery},
			dataType:"json",
			success:function(data,state){
				if(data=="1"){
					$("#"+gId+"gPName").html(gPName);
					$("#"+gId+"gPPhone").html(gPPhone);
					$("#"+gId+"gPAddress").html(gPAddress);
					$("#"+gId+"gPLinkman").html(gPLinkman);
				}
			}
		});
		$("#"+gId+"btn").text("修改").attr("onclick","query("+gId+")");
	}else if(choosequery=="shopvip"){
		var vName = $("#"+gId+"vNameinp").val();
		var vPhone = $("#"+gId+"vPhoneinp").val();
		var consumeSum = $("#"+gId+"consumeSuminp").val();
		var consumeScore = $("#"+gId+"consumeScoreinp").val();
		var consumeCount = $("#"+gId+"consumeCountinp").val();
		var consumeRate = $("#"+gId+"consumeRateinp").val();
		var vBirthday = $("#"+gId+"vBirthdayinp").val();
		var vBalance = $("#"+gId+"vBalanceinp").val();
		var goods = {"vBalance":vBalance,"vBirthday":vBirthday,"vName":vName,"vPhone":vPhone,"consumeSum":consumeSum,"consumeScore":consumeScore,"gId":gId,"consumeCount":consumeCount,"consumeRate":consumeRate};
		$.ajax({
			url:"managerServlet",
			type:"post",
			data:{"action":"edit","goods":JSON.stringify(goods),"choosequery":choosequery},
			dataType:"json",
			success:function(data,state){
				if(data=="1"){
					$("#"+gId+"vName").html(vName);
					$("#"+gId+"vPhone").html(vPhone);
					$("#"+gId+"consumeSum").html(consumeSum);
					$("#"+gId+"consumeScore").html(consumeScore);
					$("#"+gId+"consumeCount").html(consumeCount);
					$("#"+gId+"consumeRate").html(consumeRate);
					$("#"+gId+"vBirthday").html(vBirthday);
					$("#"+gId+"vBalance").html(vBalance);
				}
			}
		});
		$("#"+gId+"btn").text("修改").attr("onclick","query("+gId+")");
	}else if(choosequery=="user"){
		var uPassword = $("#"+gId+"uPassword").val();
		var uName = $("#"+gId+"uName").val();
		var rId = $("#"+gId+"rId").val();
		var goods = {"uPassword":uPassword,"uName":uName,"rId":rId,"gId":gId};
		$.ajax({
			url:"managerServlet",
			type:"post",
			data:{"action":"edit","goods":JSON.stringify(goods),"choosequery":choosequery},
			dataType:"json",
			success:function(data,state){
				if(data=="1"){
					$("#"+gId+"uPassword").html(uPassword);
					$("#"+gId+"uName").html(uName);
					$("#"+gId+"rId").html(rId);
				}
			}
		});
		$("#"+gId+"btn").text("修改").attr("onclick","query("+gId+")");
	}else if(choosequery=="role"){
		var rName = $("#"+gId+"rName").val();
		var goods = {"rName":rName,"gId":gId};
		$.ajax({
			url:"managerServlet",
			type:"post",
			data:{"action":"edit","goods":JSON.stringify(goods),"choosequery":choosequery},
			dataType:"json",
			success:function(data,state){
				if(data=="1"){
					$("#"+gId+"rName").html(rName);
				}
			}
		});
		$("#"+gId+"btn").text("修改").attr("onclick","query("+gId+")");
	}else if(choosequery=="goodsunit"){
		var gUName = $("#"+gId+"gUName").val();
		alert(gUName);
		var goods = {"gUName":gUName,"gId":gId};
		$.ajax({
			url:"managerServlet",
			type:"post",
			data:{"action":"edit","goods":JSON.stringify(goods),"choosequery":choosequery},
			dataType:"json",
			success:function(data,state){
				if(data=="1"){
					$("#"+gId+"gUName").html(gUName);
				}
			}
		});
		$("#"+gId+"btn").text("修改").attr("onclick","query("+gId+")");
	}else if(choosequery=="goodsclass"){
		var cName = $("#"+gId+"cName").val();
		var goods = {"cName":cName,"gId":gId};
		$.ajax({
			url:"managerServlet",
			type:"post",
			data:{"action":"edit","goods":JSON.stringify(goods),"choosequery":choosequery},
			dataType:"json",
			success:function(data,state){
				if(data=="1"){
					$("#"+gId+"cName").html(cName);
				}
			}
		});
		$("#"+gId+"btn").text("修改").attr("onclick","query("+gId+")");
	}
}















$(document).ready(function(){
	//选择了哪个查询就记录下
	if($.session.get('choosequery')==null){
		$.session.set('choosequery',"");
	}
	if($.session.get('choosequery')==""){
		$("#hdp-body").hide();
		$("#hdp-welcome").show();
	}else{
		$("#hdp-welcome").hide();
		$("#hdp-body").show();
	}
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
	
	flashfirst($.session.get('choosequery'));
	
	
	
	
	
	
				
			$("#previous").click(function(){
				if($("#current").text()!="1"){
					var choosequery = $.session.get('choosequery');
					$.ajax({
						url:"managerServlet",
						type:"post",
						data:{"action":"goodspage","currentpage":$("#current").text(),"direction":"previous","searchlist":$("#searchlist").val(),"searchcontent":$("#hdp-body-search").val(),"choosequery":choosequery},
						dataType:"json",
						success:function(data,state){
							var current = $("#current").text();
							$("#current").text(parseInt(current)-1);
							flashbydata(choosequery,data);
						}
					});
					}
			});
			$("#next").click(function(){
				if($("#current").text()!=$("#all").text()){
					var choosequery = $.session.get('choosequery');
					$.ajax({
						url:"managerServlet",
						type:"post",
						data:{"action":"goodspage","currentpage":$("#current").text(),"direction":"next","searchlist":$("#searchlist").val(),"searchcontent":$("#hdp-body-search").val(),"choosequery":choosequery},
						dataType:"json",
						success:function(data,state){
							var current = $("#current").text();
							$("#current").text(parseInt(current)+1);
							flashbydata(choosequery,data);
						}
					});
				}
			});
			$("#hdp-body-search-btn").click(function(){
				var choosequery = $.session.get('choosequery');
				$.ajax({
					url:"managerServlet",
					type:"post",
					data:{"action":"goodssearch","searchcontent":$("#hdp-body-search").val(),"choosequery":choosequery},
					dataType:"json",
					success:function(data,state){
						$("#all").text(data.allpage);
						$("#searchlist").text(data.searchlist);
						$("#current").text("1");
						flashbydata(choosequery,data);
					}
				});
			});
		});