function choice(){
    var spans=document.getElementById("load").getElementsByTagName("span");
    var divs=document.getElementById("showMore").getElementsByTagName("div");
    var len=spans.length;
    for(var i=0;i<len;i++){
        spans[i].index=i;
        spans[i].onclick=function(){
            for(var j=0;j<len;j++){
                spans[j].className="";
                divs[j].className="";
            }
            this.className="choice";
            divs[this.index].className="show";
        };
    }
}
// ======================表单验证========================//
function makeSure(m){
    var str=/^[0-9a-zA-Z]*$/g;
    if(!str.test(m)){
        alert("密码为数字和字母组成，请重新设定你的密码");
    } 
}
function right(){
    var inputs=document.getElementById("showMore").getElementsByTagName("input");
    var place={};
    for(var j=0;j<inputs.length;j++){
        place[j]=inputs[j].placeholder;
    }
    for(var i=0;i<inputs.length;i++){
        inputs[i].index=i;
        inputs[i].onfocus=function(){
            if(this.placeholder==place[this.index])
                this.placeholder="";
        }
        inputs[i].onblur=function(){   
            if(this.value==""){
                this.placeholder=place[this.index];
            }
            else{
                if(this.index==1||this.index==3){
                    makeSure(this.value);
                }
                if(this.index==4&&inputs[3].value!=""&&inputs[3].value!=this.value){
                    alert("你输入的密码不一致");
                }
            } 
        }       
    }
}
window.onload=function(){
    choice();
    right();
};