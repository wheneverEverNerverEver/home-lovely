function here(){
	var divs=document.getElementsByClassName("myPic");
	var as=document.getElementsByClassName("first");
	for(var i=0;i<divs.length;i++){
		as[i].index=i;
		as[i].onclick=function(){
			divs[this.index].className="myPic"+" hover";
		}
		divs[i].onmouseout=function(){
			this.className="myPic";
		}
	}
}
var speed=-5;
function gunMo(){
	var gun=document.getElementsByClassName("gunMo")[0]
	var oUl=gun.getElementsByTagName("ul")[0];
	var aLi=gun.getElementsByTagName("li");
	var img=oUl.getElementsByTagName("img");
	oUl.innerHTML+=oUl.innerHTML;
	oUl.style.height=aLi[0].offsetHeight*aLi.length+"px";
	setInterval(function(){
		if(oUl.offsetTop<-oUl.offsetHeight/2)
		{
			oUl.style.top="0px";
		}
		else{
			oUl.style.top=oUl.offsetTop+speed+"px";		
		}
	},100);
}
function option(){
	var option=document.getElementsByClassName("option")[0];
	var imgs=option.getElementsByTagName("img");
	var gun=document.getElementsByClassName("gunMo")[0];
	gun.onmousemove=function(e){
		e=e||window.event;
		option.style.display="block";
		var top=e.clientY-gun.offsetTop;
		if(e.clientX-option.offsetLeft>-100){
			top=100;
		}
		option.style.top=top+"px";
	}
	gun.onmouseout=function(){
		option.style.display="none";
	}
	imgs[0].onclick=function(){speed=speed-5;if(speed==0){speed=speed-5}};
	imgs[1].onclick=function(){speed=speed+5;if(speed==0){speed=speed+5}}

}
function ran(){
	var conn=document.getElementsByClassName("myPic");
	var pic=document.getElementsByClassName("picIs");
	var desc1=document.getElementsByClassName("myPicOne");
	var desc=document.getElementsByClassName("myPicTwo");
	var one=["rotateY(90deg) translateZ(150px)",
			"rotateY(270deg) translateZ(150px)",
			"rotateX(90deg) translateZ(140px) translateY(10px)",
			"rotateX(270deg) translateZ(140px) translateY(-10px)"];
	var two=["rotateY(-90deg)",
				"rotateY(90deg)",
				"rotateX(-90deg)",
				"rotateX(90deg)"];
	var c=0;
	function cc(){return c=Math.floor(Math.random()*4);}
	for(var i=0;i<pic.length;i++){
		pic[i].index=i;
		var time=setInterval(cc,2000);
		pic[i].onmouseover=function(){
			clearInterval(time);
			desc[this.index].style.transform=one[c];
			conn[this.index].style.transform=two[c];
		};
		pic[i].onmouseout=function(){
			conn[this.index].style.transform="rotateY(0deg) rotateX(0deg)";
			time=setInterval(cc,2000);
		}
	}
}
window.onload=function(){
	here();
	gunMo();
	option();
	ran();
}
window.onscroll=function(){
	var top=document.documentElement.scrollTop||document.body.scrollTop;
	var back=document.getElementById("return");
	if(top>=300){
		back.style.display="block";
	}
	else{
		back.style.display="none";
	}
}