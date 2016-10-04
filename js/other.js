var pics=["url(images/p2.png)",
			"url(images/p4.jpg)",
			"url(images/p3.jpg)",
			"url(images/p2.png)",
			"url(images/p5.jpg)"];
var current=1;
function change(flag){
	var fan=document.getElementById("fan");
	var fanz=fan.getElementsByTagName("div")[0];
	if(flag){
		current=current+1>pics.length?1:current+1;
	}else{
		current=current-1<1?pics.length:current-1;
	}
	fan.style.backgroundImage=pics[current-1];
	fan.style.animationName='cont';
	if(flag){
		fanz.style.animationName="fanR";
	}
	else{
		fanz.style.animationName="fanL";
	}
	setTimeout(function(){
				fan.style.animationName="none";
				fanz.style.backgroundImage=pics[current-1];
				fanz.style.animationName="none";	
	},3000);

}
var aps=null,ahs=null,azs=null,app=null,ahh=null,azz=null,divs=null;
function storeAll(){
	var ap=document.getElementById("pen").getElementsByTagName("a");
	var ah=document.getElementById("home").getElementsByTagName("a");
	var az=document.getElementById("zoom").getElementsByTagName("a");
	var div=document.getElementById("allThing").getElementsByTagName("div");
	divs=Array.prototype.slice.call(div,0);
	aps=Array.prototype.slice.call(ap,0);
	ahs=Array.prototype.slice.call(ah,0);
	azs=Array.prototype.slice.call(az,0);
	app=divs.filter(function(v,i,arr){return v.title=='盆栽';});
	ahh=divs.filter(function(v,i,arr){return v.title=='家居';});
	azz=divs.filter(function(v,i,arr){return v.title=='空间';});
}
function allNo(flag,arr){
	for(var m=0;m<arr.length;m++){
		if(flag){
			arr[m].style.display="inline-block";
		}
		else{
			arr[m].style.display="none";
		}
		
	}
	
}
function selectT(){
	for(var i=0;i<aps.length;i++){
		aps[i].onclick=function(){
			allNo(true,app);
			allNo(false,ahh);
			allNo(false,azz);
		}	
	}	
}
function selectY(){
	for(var i=0;i<ahs.length;i++){
		ahs[i].onclick=function(){
			allNo(true,ahh);
			allNo(false,app);
			allNo(false,azz);
		}
	}
}
function selectX(){
	for(var i=0;i<azs.length;i++){
		azs[i].onclick=function(){
			allNo(true,azz);
			allNo(false,ahh);
			allNo(false,app);
		}
	}
}
window.onload=function(){
	storeAll();

	var h=document.getElementsByClassName("menu")[0].getElementsByTagName("h1")[0];
	h.onclick=function(){
		allNo(true,azz);
		allNo(true,ahh);
		allNo(true,app);
	}
	selectT();selectX();selectY();
	document.getElementById("left").onclick=function(){change(false);}
	document.getElementById("right").onclick=function(){change(true);}
	
}