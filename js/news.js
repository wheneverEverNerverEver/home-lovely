var picSrc=["images/news/nn1.png","images/news/n (17).jpg","images/news/nn2.png","images/news/n (16).jpg","images/news/nn3.png","images/news/n (13).jpg","images/news/nn1.png","images/news/n (15).jpg","images/news/nn4.png","images/news/n (13).jpg","images/news/nn5.png","images/news/n (11).jpg","images/news/nn6.png","images/news/n (12).jpg","images/news/nn1.png","images/news/n (10).jpg","images/news/nn2.png","images/news/n (7).jpg","images/news/n (1).jpg","images/news/nn3.png","images/news/n (9).jpg"];


var last=0;
var now=0;
function lunboLike(){
	for(var i=0;i<len-1;i++){
		imgs[i].src=imgs[i+1].src;
	}
	last=last+1>picSrc.length-1?0:last+1;
	imgs[len-1].src=picSrc[last];
	imgss[le-1].src=imgs[0].src;
	for(var j=0;j<le-1;j++){
		imgss[j].src=imgss[j+1].src;
	}
}
var imgs=null,imgss=null,le=0,len=0;
function initIm(){
	var data=document.getElementById("data1");
	var img=data.getElementsByTagName("img");
	var imgs1=document.getElementById("data").getElementsByTagName("img");
	imgs=Array.prototype.slice.call(img,0);
	imgss=Array.prototype.slice.call(imgs1,0);
	len=imgs.length;
	le=imgss.length;


}
function lessMore(){
	initIm();
	var divs=document.getElementsByClassName("less");
	var spans=document.getElementsByTagName("span");
	for(var i=0;i<divs.length;i++){
		spans[i].innerHTML="点击这里可查看内容摘要";
		spans[i].index=i;
		spans[i].onclick=function(){
			if(divs[this.index].offsetHeight>=350){
				divs[this.index].className="less";
			}
			else{
				for(var j=0;j<divs.length;j++){
					divs[j].className="less";
				}
				divs[this.index].className="less more";
			}
			
		}
	}
}
var big=4;
// function bigger(){
// 	var liss=document.getElementById("data1").getElementsByTagName("li");
// 	liss[big].style.borderColor="white";
// 	big=big-1<0?4:big-1;
// 	liss[big].style.borderColor="#f3aad1";

// }
window.onload=function(){
	lessMore();
	// var timer1=setInterval(bigger,1000);
	var timer=setInterval(lunboLike,1000);
	var data=document.getElementById("data1");
	var data1=document.getElementById("data");
	var liss=document.getElementById("data1").getElementsByTagName("li");
	data1.onmouseover=function(){
		clearInterval(timer);
		clearInterval(timer1);
	}

	data1.onmouseout=function(){
		timer=setInterval(lunboLike,2000);
		// timer1=setInterval(bigger,1000)
	}
	data.onmouseover=function(){
		clearInterval(timer);
		// clearInterval(timer1);
	}

	data.onmouseout=function(){
		timer=setInterval(lunboLike,2000);
		// timer1=setInterval(bigger,1000)
	}
}