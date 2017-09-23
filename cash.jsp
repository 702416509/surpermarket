<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML>
<html lang="zh-CN">
  <head>
    <base href="<%=basePath%>">
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>中信超市收银系统</title>
    <link href="bootstrap-3.3.7-dist/css/bootstrap.min.css" rel="stylesheet">
	<link rel="stylesheet" href="font-awesome-4.7.0/css/font-awesome.min.css"></link>
	<link rel="stylesheet" href="css/supermcss.css"></link>
	<link rel="stylesheet" href="css/cashcss.css"></link>
    <script src="js/jquery-3.2.1.min.js"></script>
	<script src="bootstrap-3.3.7-dist/js/jquery.min.js"></script>
	<script src="bootstrap-3.3.7-dist/js/bootstrap.min.js"></script>
	<script src="js/jquerysession.js"></script>
	<script src="js/cash.js"></script>
	<script src="js/time.js"></script>
	<script src="js/jquerysession.js"></script>
	<script src="js/choosequery.js"></script>
  </head>
  
  <body>
  <c:if test="${sessionScope.user eq null}"><c:redirect url="login.jsp"/></c:if>
    <div class="hdp-header">
		<div class="container-fluid">
			<div class="row">
				<nav class="navbar navbar-default hdp-header-nav">
				  <div class="container-fluid">
					<!-- Brand and toggle get grouped for better mobile display -->
					<div class="navbar-header">
					  <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
						<span class="sr-only">Toggle navigation</span>
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
					  </button>
					  <a class="navbar-brand" href="#">
						<i class="fa fa-shopping-bag"></i>&nbsp;中信超市收银系统
					  </a>
					</div>

					<!-- Collect the nav links, forms, and other content for toggling -->
					<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
					  <ul class="nav navbar-nav">
						<li class="dropdown">
						  <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">商品管理<span class="caret"></span></a>
						  <ul class="dropdown-menu">
							<li><a href="index.jsp" id="goodsquery">查询</a></li>
							<li role="separator" class="divider"></li>
							<li><a href="dataaddServlet?action=add" id="goodsadd">资料维护</a></li>
							<li role="separator" class="divider"></li>
							<li><a href="dataaddServlet?action=addgoods" id="addgoods">商品进货</a></li>
							
						  </ul>
						</li>
						<li class="dropdown">
						  <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">供货管理<span class="caret"></span></a>
						  <ul class="dropdown-menu">
							<li><a href="index.jsp" id="providerquery">查询</a></li>
							<li role="separator" class="divider"></li>
							<li><a href="dataaddServlet?action=addprovider" id="provideradd">资料维护</a></li>
						  </ul>
						</li>
						<li class="dropdown">
						  <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">会员管理<span class="caret"></span></a>
						  <ul class="dropdown-menu">
							<li><a href="index.jsp" id="shopvipquery">会员查询</a></li>
							<li role="separator" class="divider"></li>
							<li><a href="dataaddServlet?action=addshopvip" id="shopvipadd">会员信息维护</a></li>
							<li role="separator" class="divider"></li>
							<li><a href="dataaddServlet?action=addvipmoney" id="shopvipsavemoney">充值/兑奖</a></li>
						  </ul>
						</li>
						<li class="dropdown">
						  <a href="index.jsp" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">用户管理<span class="caret"></span></a>
						  <ul class="dropdown-menu">
							<li><a href="index.jsp" id="userquery">查询</a></li>
							<li role="separator" class="divider"></li>
							<li><a href="dataaddServlet?action=adduser" id="useradd">资料维护</a></li>
						  </ul>
						</li>
						<li class="dropdown">
						  <a href="index.jsp" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">角色管理<span class="caret"></span></a>
						  <ul class="dropdown-menu">
							<li><a href="index.jsp" id="rolequery">查询</a></li>
							<li role="separator" class="divider"></li>
							<li><a href="dataaddServlet?action=addrole" id="roleadd">资料维护</a></li>
						  </ul>
						</li>
						<li class="dropdown">
						  <a href="index.jsp" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">单位管理<span class="caret"></span></a>
						  <ul class="dropdown-menu">
							<li><a href="index.jsp" id="goodsunitquery">查询</a></li>
							<li role="separator" class="divider"></li>
							<li><a href="dataaddServlet?action=addunit" id="goodsunitadd">资料维护</a></li>
						  </ul>
						</li>
						<li class="dropdown">
						  <a href="index.jsp" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">类别管理<span class="caret"></span></a>
						  <ul class="dropdown-menu">
							<li><a href="index.jsp" id="goodsclassquery">查询</a></li>
							<li role="separator" class="divider"></li>
							<li><a href="dataaddServlet?action=addclass" id="goodsclassadd">资料维护</a></li>
						  </ul>
						</li>
						<li class="dropdown">
						  <a href="index.jsp" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">系统管理<span class="caret"></span></a>
						  <ul class="dropdown-menu">
							<li><a href="index.jsp" id="instorequery">进货明细</a></li>
							<li role="separator" class="divider"></li>
							<li><a href="index.jsp" id="sellquery">销售情况</a></li>
							<li><a href="index.jsp" id="selldetailquery">销售明细</a></li>
							<li role="separator" class="divider"></li>
							<li><a href="#" id="vipsavemoneyquery">充值记录</a></li>
						  </ul>
						</li>
						<li><a href="index.jsp">关于系统</a></li>
					  </ul>
					  <ul class="nav navbar-nav navbar-right">
						<li><a href="cash.jsp">收银台</a></li>
						<li class="dropdown">
						  <a href="index.jsp" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">${sessionScope.user.rolesClass.RName }:${sessionScope.user.UId }<span class="caret"></span></a>
						  <ul class="dropdown-menu">
							<li><a href="loginServlet?action=updatepwd">修改密码</a></li>
							<li role="separator" class="divider"></li>
							<li><a href="loginServlet?action=exit">注销</a></li>
						  </ul>
						</li>
					  </ul>
					</div>
				  </div>
				</nav>
			</div>
		</div>
	</div>
	<div class="hdp-body" id="hdp-body">
			<div class="panel panel-primary">
			  <div class="panel-heading">收银台</div>
			  <div class="panel-body">
			    <div class="row">
				  <div class="col-lg-6">
				  	<div class="input-group">
					 	<span class="input-group-addon" id="basic-addon1">商品数量</span>
  						<input type="number" class="form-control" id="hdp-cash-Gnumber" placeholder="商品数量" aria-describedby="basic-addon1" value="1">
					</div>
				  </div>
				  <div class="col-lg-6">
					<div class="input-group">
					  <input type="text" class="form-control" placeholder="输入商品条码" id="hdp-cash-GId">
					  <span class="input-group-btn">
						<button class="btn btn-default" type="button" id="hdp-cash-add-btn">查询商品</button>
					  </span>
					</div>
				  </div>
				</div>
			  </div>
			
			  <!-- Table -->
			  <div class="hdp-cash-tb-div-head">
				  <table class="table table-striped table-bordered" id="hdp-cash-head-tb">
				  	<tr>
					   	<td>商品条码</td>
						<td>商品名称</td>
						<td>规格等级</td>
						<td>单位</td>
						<td>当前库存</td>
						<td>会员价</td>
						<td>零售价</td>
						<td>数量</td>
						<td>金额</td>
					</tr>
				  </table>
			  </div>
			  <div class="hdp-cash-tb-div-body" id="hdp-cash-tb-div-body">
				  <table class="table table-striped table-bordered hdp-cash-tb" id="hdp-cash-tb">
				  	
				  </table>
			  </div>
			  <div class="panel-footer">
			  		<div class="row vip">
					  <div class="col-lg-3">
					  	<div class="input-group">
						 	<span class="input-group-addon" id="basic-addon1">会员卡号</span>
	  						<input type="text" class="form-control" id="hdp-cash-VId" placeholder="会员卡号" aria-describedby="basic-addon1">
						</div>
					  </div>
					  <div class="col-lg-2">
						<div class="input-group">
						  	<span class="input-group-addon" id="basic-addon1">姓名</span>
	  						<input type="text" class="form-control" id="hdp-cash-VName" aria-describedby="basic-addon1" readonly="readonly">
						</div>
					  </div>
					  <div class="col-lg-2">
						<div class="input-group">
						  	<span class="input-group-addon" id="basic-addon1">积分</span>
	  						<input type="text" class="form-control" id="hdp-cash-ConsumeScore" aria-describedby="basic-addon1" readonly="readonly">
						</div>
					  </div>
					  <div class="col-lg-2">
						<div class="input-group">
						  	<span class="input-group-addon" id="basic-addon1">余额</span>
	  						<input type="text" class="form-control" id="hdp-cash-VBalance" aria-describedby="basic-addon1" readonly="readonly">
						</div>
					  </div>
					  <div class="col-lg-offset-1 col-lg-1">
						<div class="input-group">
						  	<button type="button" class="btn btn-success" id="hdp-vip-final-btn">余额结账</button>
						</div>
					  </div>
					</div>
			  		<div class="row novip">
					  <div class="col-lg-3">
					  	<div class="input-group">
						 	<span class="input-group-addon" id="basic-addon1">共计:￥</span>
	  						<input type="text" class="form-control" id="hdp-cash-allgoodsmoney" aria-describedby="basic-addon1" value="0" readonly="readonly">
	  						<span class="input-group-addon" id="basic-addon2">元</span>
						</div>
					  </div>
					  <div class="col-lg-2">
						<div class="input-group">
						  	<span class="input-group-addon" id="basic-addon1">实收:￥</span>
	  						<input type="text" class="form-control" id="hdp-cash-realgetmoney" aria-describedby="basic-addon1">
						</div>
					  </div>
					  <div class="col-lg-2">
						<div class="input-group">
	  						<input type="number" class="form-control" id="hdp-cash-sumclassgoods" aria-describedby="basic-addon1" readonly="readonly" value="0" >
	  						<span class="input-group-addon" id="basic-addon2">种商品</span>
						</div>
					  </div>
					  <div class="col-lg-2">
						<div class="input-group">
						  	<span class="input-group-addon" id="basic-addon1">找零:￥</span>
	  						<input type="text" class="form-control" id="hdp-cash-giveleftmoney" aria-describedby="basic-addon1" value="0.00" readonly="readonly">
						</div>
					  </div>
					  <div class="col-lg-offset-1 col-lg-1">
						<div class="input-group">
						  	<button type="button" class="btn btn-success" id="hdp-cash-final-btn">现金结账</button>
						</div>
					  </div>
					</div>
			  </div>
			</div>
	</div>
	<div class="hdp-footer">
		<span class="hdp-footer-wel"><i class="fa fa-flag"></i>&nbsp;&nbsp;中信超市收银系统&nbsp;·&nbsp;销售总金额:<div id="allsalemoney"></div></span>
		<span class="hdp-footer-time" id="showDate"></span>
	</div>
  </body>
</html>
