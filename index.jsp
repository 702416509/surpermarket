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
    <script src="js/jquery-3.2.1.min.js"></script>
	<script src="bootstrap-3.3.7-dist/js/jquery.min.js"></script>
	<script src="bootstrap-3.3.7-dist/js/bootstrap.min.js"></script>
	<script src="js/jquerysession.js"></script>
	<script src="js/manager.js"></script>
	<script src="js/dataadd.js"></script>
	<script src="js/time.js"></script>
	
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
							<li role="separator" class="divider"></li>
							<li><a href="cashServlet?action=saleallmoney">收入记录</a></li>
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
	<div class="hdp-welcome col-md-offset-3 col-md-6" id="hdp-welcome"><span>欢迎使用中信超市收银系统</span></div>
	<div class="hdp-body" id="hdp-body">
		<div class="container-fluid" id="hdp-body-tb">
			<div class="panel panel-default">
			  <div class="panel-heading" id="hdp-body-title">标题</div>
			  <div class="panel-body">
				<div class="row">
				  <div class="col-lg-6 col-lg-offset-3">
					<div class="input-group">
					  <input type="text" class="form-control" placeholder="Search for..." id="hdp-body-search">
					  <span class="input-group-btn">
					  	<input type="hidden" id="searchlist"/>
						<button class="btn btn-default" type="button" id="hdp-body-search-btn">查询</button>
					  </span>
					</div>
				  </div>
				</div>
			  </div>
			  <table class="table table-striped hdp-body-tb-data" id="hdp-body-tb-data">
					
			  </table>
			  <div class="panel-footer">
				<nav aria-label="...">
				  <ul class="pager">
					<li class="previous" id="previous"><a><span aria-hidden="true">&larr;</span> 上一页</a></li>
					<li class="current"><a>当前第<span aria-hidden="true" id="current">1</span>页</a></li>
					<li class="current"><a>总共<span aria-hidden="true" id="all">1</span>页</a></li>
					<li class="next" id="next"><a>下一页 <span aria-hidden="true">&rarr;</span></a></li>
				  </ul>
				</nav>
			  </div>
			</div>
		</div>
	</div>
	<div class="hdp-footer">
		<span class="hdp-footer-wel"><i class="fa fa-flag"></i>&nbsp;&nbsp;中信超市收银系统&nbsp;·&nbsp;作者:余杰</span>
		<span class="hdp-footer-time" id="showDate"></span>
	</div>
  </body>
</html>
