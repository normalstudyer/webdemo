// JavaScript Document
var a;
var b;
function start(){
	a = window.setInterval("start1()",100);
	document.getElementById("bt1").disabled = "disabled";
	document.getElementById("bt2").disabled = null;
}
var i = 1;
function start1(){
	 
	 var n = 30*i;
	 i++;
	 
	document.getElementById("tu1").style.transform =" rotate("+n+"deg)";
    
	
}
function stop(){
	window.clearInterval(a);
	document.getElementById("bt2").disabled = "disabled";
	document.getElementById("bt1").disabled = null;
}