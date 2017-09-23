$(document).ready(function(){
	var goodslist = [];
	$.session.set('goodslist',goodslist);
	$("#hdp-cash-add-btn").click(function(){
		if($("#hdp-cash-tb").height()>179){
			$("#hdp-cash-head-tb").width(1004);
		}
		var GId = $("#hdp-cash-GId").val();//商品条码
		var Gnumber = $("#hdp-cash-Gnumber").val();//商品数量
		var ishas = 0;
		$.each($.session.get('goodslist'),function(index,item){
			if(item.gId==GId){
				item.gnumber = parseInt(item.gnumber)+parseInt(Gnumber);
				item.summoney = (item.salePrice*item.gnumber).toFixed(2);
				$("#hdp-cash-allgoodsmoney").val((parseFloat($("#hdp-cash-allgoodsmoney").val())+item.salePrice).toFixed(2));
				$("#"+GId+"Gnumber").text(item.gnumber);
				$("#"+GId+"Summoney").text(item.summoney);
				$("#hdp-cash-GId").val("");
				ishas = 1;
			}
		});
		if(ishas==0){
			var str = "";
			var goods = {};
			$.ajax({
				url:"cashServlet",
				data:{"action":"querygoods","GId":GId},
				type:"post",
				dataType:"json",
				success:function(data,state){
					str+="<tr>";
					str+="<td>"+data.gId+"</td>";
					str+="<td>"+data.gName+"</td>";
					str+="<td>"+data.gSpec+"</td>";
					str+="<td>"+data.goodsUnit.gUName+"</td>";
					str+="<td>"+data.gAmount+"</td>";
					str+="<td>"+data.vipPrice+"</td>";
					str+="<td>"+data.salePrice+"</td>";
					str+="<td id='"+GId+"Gnumber'>"+Gnumber+"</td>";
					str+="<td id='"+GId+"Summoney'>"+(Gnumber*data.salePrice)+"</td>";
					str+="</tr>";
					goods = {"gId":data.gId,"gName":data.gName,"gSpec":data.gSpec,"gUName":data.goodsUnit.gUName,"gAmount":data.gAmount,"vipPrice":data.vipPrice,"salePrice":data.salePrice,"gnumber":Gnumber,"summoney":(Gnumber*data.salePrice)};
					$("#hdp-cash-allgoodsmoney").val((parseFloat($("#hdp-cash-allgoodsmoney").val())+data.salePrice).toFixed(2));
					$("#hdp-cash-sumclassgoods").val(parseInt($("#hdp-cash-sumclassgoods").val())+1);
					$.session.get('goodslist').push(goods);
					$("#hdp-cash-tb").append(str);
					$("#hdp-cash-GId").val("");
				}
			});
		}
		
		
	});
	//余额结账
	$("#hdp-vip-final-btn").click(function(){
		var VId = $("#hdp-cash-VId").val();
			$.ajax({
				url:"cashServlet",
				data:{"action":"querycashvip","VId":VId,"goodslistmap":JSON.stringify($.session.get('goodslist'))},
				type:"post",
				dataType:"json",
				success:function(data,state){
					$("#hdp-cash-allgoodsmoney").val(data.SCountPrice);
					$("#hdp-cash-sumclassgoods").val(data.SCount);
					if(data.isvip=="1"){
						var vName = data.shopvip.vName;
						var consumeScore = data.shopvip.consumeScore;
						var vBalance = data.shopvip.vBalance;
						if(data.leftmoney!=null){
							$("#hdp-vip-final-btn").before("还需支付"+data.leftmoney).css("color","#f00");
						}
						$("#hdp-cash-VName").val(vName);
						$("#hdp-cash-ConsumeScore").val(consumeScore);
						$("#hdp-cash-VBalance").val(vBalance);
					}else{
						$("#hdp-vip-final-btn").before("不存在该会员").css("color","#f00");
					}
				}
			});
			alert("结账成功");
			$("#hdp-cash-tb").html("");
	});
	//现金结账
	$("#hdp-cash-final-btn").click(function(){
		$.ajax({
			url:"cashServlet",
			data:{"action":"querycash","goodslistmap":JSON.stringify($.session.get('goodslist'))},
			type:"post",
			dataType:"json",
			success:function(data,state){
			},
			complete:function(){
				alert("结账成功");
				$("#hdp-cash-tb").html("");
				$("#hdp-cash-VId").val("");
				$("#hdp-cash-realgetmoney").val("");
				$("#hdp-cash-allgoodsmoney").val("0");
				$("#hdp-cash-sumclassgoods").val("0");
				$("#hdp-cash-giveleftmoney").val("0.00");
				
			}
		});
	});
	
	$("#hdp-cash-VId").blur(function(){
		$.ajax({
			url:"cashServlet",
			data:{"action":"queryvip","VId":$("#hdp-cash-VId").val()},
			type:"post",
			dataType:"json",
			success:function(data,state){
				$("#hdp-cash-VName").val(data.vName);
				$("#hdp-cash-ConsumeScore").val(data.consumeScore);
				$("#hdp-cash-VBalance").val(data.vBalance);
			}
		});
	});
	$("#hdp-cash-realgetmoney").blur(function(){
		$("#hdp-cash-giveleftmoney").val(($("#hdp-cash-realgetmoney").val()-$("#hdp-cash-allgoodsmoney").val()).toFixed(2));
	});
	
	
	
});