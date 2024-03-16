//============================ 类手风琴
function show(){
	var uld=document.getElementById("uld");
	var lis=document.getElementsByTagName("li");
	for(var i=0;i<lis.length;i++){
		lis[i].onclick=function(){
			for(var j=0;j<lis.length;j++){
				lis[j].className="";
			}
			this.className="hover";
		};
	}
}
// ==============================最in消息轮流变色
var current=0;
function change(){
	var right=document.getElementById("rightC");
	var ass=right.getElementsByTagName("a");
	ass[current].className="";
	current=current+1>12?0:current+1;
	ass[current].className="change";
}
// =======================轮播之一，span img同步变化
var here=0;
function showPic(){
	var car=document.getElementById("cc");
	var acar=document.getElementById("acar");
	var ul=acar.getElementsByTagName("ul")[0];
	var lis=ul.getElementsByTagName("li");
	var spans=car.getElementsByTagName("span");
	var ulL=ul.offsetWidth;
	var len=lis.length;
	var longa=lis[0].offsetWidth;
	if(here<4){
		here=here+1;
		ul.style.transition=1+"s";
		ul.style.left=-here*longa+"px";
		for(var j=0;j<spans.length;j++)
			spans[j].className="";
		spans[here].className="white";
	}else{
		spans[here].className="";
		here=0;
		ul.style.transition=0+"s";
		ul.style.left="0px";
		spans[here].className="white";
	}
}
// ===========================换肤===================================
function changeSkin(){
		var skin=document.getElementById("skin");
		var ss=document.getElementById("ss");
		var aps=ss.getElementsByTagName("a");
		var btn=ss.getElementsByTagName("button")[0];
		var aass=ss.getElementsByTagName("span");
		skin.onclick=function(){
			ss.style.display="block";
		};
		btn.onclick=function(){
			ss.style.display="none"
		};
		for(var i=0;i<aps.length;i++){
			aps[i].index=i;
			aps[i].onclick=function(){
				for(var j=0;j<aass.length;j++)
					aass[j].className="";
				aass[this.index].className="selected";
				var link=document.getElementById("cssfile");
				link.href=link.href.replace(/(\w+)(.css)$/,this.id+"$2")
			}
		}
	}
// function skinY(){
// 	var skin=document.getElementById("skin");
// }
window.onload=function(){
	show();
	changeSkin();
	var timera=setInterval(showPic,3000);
	var timer=setInterval(change,500);
	var ul=document.getElementById("acar").getElementsByTagName("ul")[0];
	var spans=document.getElementById("cc").getElementsByTagName("span");
	var right=document.getElementById("rightC");
	var lis=ul.getElementsByTagName("li");
	var longa=lis[0].offsetWidth;
	ul.onmouseover=function(){clearInterval(timera);};
	ul.onmouseout=function(){timera=setInterval(showPic,3000);};
	right.onmouseover=function(){clearInterval(timer);};
	right.onmouseout=function(){timer=setInterval(change,500);};
	// ==========================轮播之二 span可控ul的left
	for(var i=0;i<spans.length;i++){
		spans[i].index=i;
		spans[i].onmouseover=function(){
			clearInterval(timera);
			ul.style.left=-(this.index)*longa+"px";
			for(var j=0;j<spans.length;j++)
				spans[j].className="";
			this.className="white";
		};
		spans[i].onmouseout=function(){
			timera=setInterval(showPic,3000);
		}
	}
};