function $(id){
	return document.getElementById(id);
}
$("nav-l-b").onmouseenter=function(){
	$("nav-l-b-u").style.display="block";
	$("nav-l-b-u").style.zIndex=999;
}
$("nav-l-b").onmouseleave=function(){
	$("nav-l-b-u").style.display="none";
	$("nav-l-b-u").style.zIndex=-999;
}
$("nav-l-b-u").onmouseover=function(e){
	var e=e||event;
	var target=e.target ||e.srcElement;
	if(target.tagName=="LI"){
		target.children[0].style.display="block"
	}
}
$("nav-l-b-u").onmouseout=function(e){
	var e=e||event;
	var target=e.target ||e.srcElement;
	if(target.tagName=="LI"){
		target.children[0].style.display="none"
	}
}
