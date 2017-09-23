$(document).ready(function(){
	$(function(){ 
		setInterval("getTime();",1000); 
	}) 
	
});
function getTime(){ 
	var myDate = new Date(); 
	var year = myDate.getFullYear();
	var month = myDate.getMonth();
	var day = myDate.getDate();
	var time = myDate.toLocaleTimeString();
	var week = myDate.getDay();
	$("#showDate").html(year+"年"+month+"月"+day+"日"+" "+time+" "+"星期"+week); 
} 