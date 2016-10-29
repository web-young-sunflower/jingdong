 window.onload=function(){
 //bannertu轮播
 var centertu=$(".centertu")[0];
 var imgs=$("a",centertu);
 var cw=parseInt(getStyle(centertu,"width"));
 console.log(cw);
 var lis=$("li",centertu);
 lis[0].classList.add("hotyuan");
 imgs[0].style.opacity=1;
 for(var i=1;i<imgs.length;i++){
    imgs[i].style.opacity=0;
  }
  var t=setInterval(move,3000);
    var now=0;
    var next=0;
  function move(){
    next++;
    if(next==imgs.length){
      next=0;
    }
   animate(imgs[now],{opacity:0})
   animate(imgs[next],{opacity:1},function(){
   	flag=true;
   })
   for(var i=0;i<imgs.length;i++){
		imgs[i].style.zIndex=2;
		}
	lis[next].classList.add("hotyuan");
	lis[now].classList.remove("hotyuan");
    imgs[next].style.zIndex=10;
    imgs[now].style.zIndex=10;
    now=next;
  }
    function movel(){
    next--;
    if(next<0){
      next=imgs.length-1;
    }
   animate(imgs[now],{opacity:0})
   animate(imgs[next],{opacity:1},function(){flag=true;})
   for(var i=0;i<imgs.length;i++){
		imgs[i].style.zIndex=2;
		}
	lis[next].classList.add("hotyuan");
	lis[now].classList.remove("hotyuan");
    imgs[next].style.zIndex=10;
    imgs[now].style.zIndex=10;
    now=next;
  }
  var btn_l=$(".btn-a-l",centertu)[0];
  var btn_r=$(".btn-a-r",centertu)[0];
  var flag=true;
  btn_r.onclick=function(){
  	  if(flag){
  	  	flag=false;
  	  	move();
  	  }
     	
     }
  btn_l.onclick=function(){
  	if(flag){
  		flag=false;
  		movel();
  	     }  	
   }
  centertu.onmouseover=function(){  //移入banner图时停止
  	clearInterval(t);
  }
  centertu.onmouseout=function(){  //移出banner图时轮播
  	t=setInterval(move,3000)
  }
 //banner下的轮播
 var navxiaright=$(".navxiaright",$(".navxia")[0])[0];
 // console.log(navxiaright);
 var n_r_lb=$(".n-r-lb",navxiaright);
 var nw=parseInt(getStyle(n_r_lb[0],"width"));
 console.log(n_r_lb.length);
 console.log(nw);
 var n_now=0;
 var n_next=0;
 n_r_lb[0].style.left=0;
 for(var i=1;i<n_r_lb.length;i++){
 	n_r_lb[i].style.left=nw+"px";
 }
 var n_btn_l=$(".btn-a-l",navxiaright)[0];
 var n_btn_r=$(".btn-a-r",navxiaright)[0];
 var flag=true;
 console.log(n_btn_r);
 console.log(n_btn_l);
 n_btn_r.onclick=function(){
 	if(flag){
 		flag=false;
 		 n_next++;
 	if(n_next>n_r_lb.length-1){
      n_next=0;
 	}
 	   n_r_lb[n_next].style.left=nw+"px";
     animate(n_r_lb[n_next],{left:0},3000);
     animate(n_r_lb[n_now],{left:-nw},3000,function(){
     	flag=true;
     });
     n_now=n_next;
 	}
 }
 n_btn_l.onclick=function(){
 	if(flag){
 		flag=false;
 		n_next--;
 		if(n_next<0){
       n_next=n_r_lb.length-1;
 	}
 	 n_r_lb[n_next].style.left=-nw+"px";
     animate(n_r_lb[n_next],{left:0},3000);
     animate(n_r_lb[n_now],{left:nw},3000,function(){
     	flag=true;
     });
     n_now=n_next;
 	}
 }
 //楼层跳转
  var zuocebian=$(".zuocebian")[0];
  var floors=$(".floor");
  var zcb_li=$("li",zuocebian);
  console.log(zcb_li.length)
  console.log(floors.length)
  var piaozi=$(".piaozi",zuocebian);
  console.log(piaozi)
  var cw=document.documentElement.clientWidth;
  var ch=document.documentElement.clientHeight;
  console.log(cw,ch);
  // var flag=true;
  // var flag2=true;
   for(var i=0;i<floors.length;i++){
   	 floors[i].h=floors[i].offsetTop;
   	 console.log(floors[i].h);
   }
   window.onscroll=function(){
   		  var obj=document.body.scrollTop?document.body:document.documentElement;
		  var top=obj.scrollTop;
		  // console.log(top)
		  for(var i=0;i<floors.length;i++){
			if(top>=floors[i].h-300){
			zuocebian.style.display="block";
			var zh=zuocebian.offsetHeight;
            zuocebian.style.top=(ch-zh)/2+"px"; 
            for(var j=0;j<zcb_li.length;j++){
					// zcb_li[j].style.backgroundColor="#fff";
					piaozi[j].style.display="none"; 
				}
			 // zcb_li[i].style.backgroundColor="#ccc";
			 piaozi[i].style.display="block"; 
			 now=i;
		}
		if(top<floors[0].h-300||top>floors[floors.length-1].h+300){
			zuocebian.style.display="none";
		}

	}	
   }
   
   for(var i=0;i<zcb_li.length;i++){
   	zcb_li[i].index=i;
   	zcb_li[i].onclick=function(){
     	var obj=document.body.scrollTop?document.body:document.documentElement;
		  animate(obj,{scrollTop:floors[this.index].h})
   }
   zcb_li[i].onmouseover=function(){
   	  piaozi[this.index].style.display="block";
   }
    zcb_li[i].onmouseout=function(){
    	if(this.index==now){
 	  		return;
 	  	}
   	  piaozi[this.index].style.display="none";
   }
   }
   
//1楼
 var main_1_2=$(".main-1-2")[0];
 var as=$(".tupiao-a",main_1_2);
 var asw=parseInt(getStyle(as[0],"width"));
 console.log(asw)
 var f_1_yuan=$(".f-1-yuan")[0];
 var lis_1f=$("li",main_1_2);
 console.log(lis_1f)
 var as_t=setInterval(f1move,3000);
 var as_now=0;
 var as_next=0;
  as[0].style.left=0;
 for(var i=1;i<as.length;i++){
  as[i].style.left=asw+"px";
 }
 main_1_2.onmouseover=function(){
  clearInterval(as_t);
 }
main_1_2.onmouseout=function(){
  as_t=setInterval(f1move,3000);
 }
 function f1move(){
  as_next++;
  if(as_next>as.length-1){
     as_next=0;
  }
  as[as_next].style.left=asw+"px";
  animate(as[as_next],{left:0},600)
  animate(as[as_now],{left:-asw},600,function(){
    flag_1=true;
  })
  lis_1f[as_next].classList.add("first");
  lis_1f[as_now].classList.remove("first");
  as_now=as_next;
 }
 function f1movel(){
  as_next--;
  if(as_next<0){
     as_next=as.length-1;
  }
  as[as_next].style.left=-asw+"px";
  animate(as[as_next],{left:0},600)
  animate(as[as_now],{left:asw},600,function(){
    flag_1=true;
  })
  lis_1f[as_next].classList.add("first");
  lis_1f[as_now].classList.remove("first");
  as_now=as_next;
 }
  var leftarrw_1f=$(".leftarrw",main_1_2)[0];
  var rightarrw_1f=$(".rightarrw",main_1_2)[0];
  var flag_1=true;
  rightarrw_1f.onclick=function(){
    if(flag_1){
      flag_1=false;
      f1move();
    }
  }
  leftarrw_1f.onclick=function(){
    if(flag_1){
      flag_1=false;
      f1movel();
    }
  }
 //2f  2f   2f  2f  2f 2f

 function f2(obj){


 // var mx2_2=$(".mx2-2")[0];
 var bao=$(".bao",obj);
 var lis_2f=$("li",obj);
 var baow=parseInt(getStyle(bao[0],"width"));
 console.log(lis_2f)
  var f2_t=setInterval(f2move,3000);
 var bao_now=0;
 var bao_next=0;
  bao[0].style.left=0;
 for(var i=1;i<bao.length;i++){
  bao[i].style.left=asw+"px";
 }
 obj.onmouseover=function(){
  clearInterval(f2_t);
 }
  obj.onmouseout=function(){
  f2_t=setInterval(f2move,3000);
 }
 function f2move(){
  bao_next++;
  if(bao_next>bao.length-1){
     bao_next=0;
  }
  bao[bao_next].style.left=asw+"px";
  animate(bao[bao_next],{left:0},600)
  animate(bao[bao_now],{left:-baow},600,function(){
    flag_2=true;
  })
  lis_2f[bao_next].classList.add("first");
  lis_2f[bao_now].classList.remove("first");
  bao_now=bao_next;
 }
 function f2movel(){
  bao_next--;
  if(bao_next<0){
     bao_next=bao.length-1;
  }
  bao[bao_next].style.left=asw+"px";
  animate(bao[bao_next],{left:0},600)
  animate(bao[bao_now],{left:-baow},600,function(){
    flag_2=true;
  })
  lis_2f[bao_next].classList.add("first");
  lis_2f[bao_now].classList.remove("first");
  bao_now=bao_next;
 }
 var leftarrw_2f=$(".leftarrw",obj)[0];
  var rightarrw_2f=$(".rightarrw",obj)[0];
  console.log(leftarrw_2f)
  var flag_2=true;
  rightarrw_2f.onclick=function(){
    if(flag_2){
      flag_2=false;
      f2move();
    }
  }
  leftarrw_2f.onclick=function(){
    if(flag_2){
      flag_2=false;
      f2movel();
    }
  }

  }
  var mx2_2=$(".mx2-2")[0];
  f2(mx2_2);
  var mx6_3_1=$(".mx6-3-1");
  console.log(mx6_3_1[0])
  // f2(mx6_3_1[0]);
  // f2(mx6_3_1[1]);
  // f2(mx6_3_1[2]);
//3f
 function f3(obj){
 // var mx3_2_1=$(".mx3-2-1")[0];
 var bao1=$(".bao1",obj)[0];
 var as_3f=$(".tupiao-a",bao1);
  console.log(bao1)
 var lis_3f=$("li",obj);
 var bao1w=parseInt(getStyle(as_3f[0],"width"));
 console.log(lis_3f)
  var f3_t=setInterval(f3move,3000);
 var bao3_now=0;
 var bao3_next=0;
  as_3f[0].style.left=0;
 for(var i=1;i<as_3f.length;i++){
  as_3f[i].style.left=bao1w+"px";
 }
 bao1.onmouseover=function(){
    clearInterval(f3_t);
  }
   bao1.onmouseout=function(){
    f3_t=setInterval(f3move,3000);
  }
 function f3move(){
  bao3_next++;
  if(bao3_next>as.length-1){
     bao3_next=0;
  }
  as_3f[bao3_next].style.left=bao1w+"px";
  animate(as_3f[bao3_next],{left:0},600)
  animate(as_3f[bao3_now],{left:-bao1w},600,function(){
    flag_3=true;
  })
  lis_3f[bao3_next].classList.add("first");
  lis_3f[bao3_now].classList.remove("first");
  bao3_now=bao3_next;
 }
   function f3movel(){
  bao3_next--;
  if(bao3_next<0){
     bao3_next=as.length-1;
  }
  as_3f[bao3_next].style.left=-bao1w+"px";
  animate(as_3f[bao3_next],{left:0},600)
  animate(as_3f[bao3_now],{left:bao1w},600,function(){
    flag_3=true;
  })
  lis_3f[bao3_next].classList.add("first");
  lis_3f[bao3_now].classList.remove("first");
  bao3_now=bao3_next;
 }
  var leftarrw_3f=$(".leftarrw",obj)[0];
  var rightarrw_3f=$(".rightarrw",obj)[0];
  var flag_3=true;
 console.log(rightarrw_3f)
  rightarrw_3f.onclick=function(){
   if(flag_3){
    flag_3=false;
    f3move();
   } 
  }
  leftarrw_3f.onclick=function(){
    if(flag_3){
      flag_3=false;
      f3movel();
  }
}

 }
  var mx3_2_1s=$(".mx3-2-1");
  console.log(mx3_2_1s[2])
 f3(mx3_2_1s[0]);
 f3(mx3_2_1s[2]);
 f3(mx3_2_1s[4]);
 f3(mx3_2_1s[6]);

 //6ffffffffff
 function f6(obj){
  var bao6=$(".bao",obj);
  var lis_6f=$("li",obj);
  var bao6w=parseInt(getStyle(bao6[0],"width"));
  var f6_t=setInterval(f6move,3000);
  var bao6_now=0;
  var bao6_next=0;
  bao6[0].style.left=0;
   for(var i=1;i<bao6.length;i++){
    bao6[i].style.left=bao6w+"px";
   }
   obj.onmouseover=function(){
    clearInterval(f6_t);
   }
   obj.onmouseout=function(){
    f6_t=setInterval(f6move,3000);
   }
 function f6move(){
  bao6_next++;
  if(bao6_next>bao6.length-1){
     bao6_next=0;
  }
  bao6[bao6_next].style.left=bao6w+"px";
  animate(bao6[bao6_next],{left:0},600)
  animate(bao6[bao6_now],{left:-bao6w},600,function(){
    flag_6=true;
  })
  lis_6f[bao6_next].classList.add("first");
  lis_6f[bao6_now].classList.remove("first");
  bao6_now=bao6_next;
 }
 function f6movel(){
  bao6_next--;
  if(bao6_next<0){
     bao6_next=bao6.length-1;
  }
  bao6[bao6_next].style.left=-bao6w+"px";
  animate(bao6[bao6_next],{left:0},600)
  animate(bao6[bao6_now],{left:bao6w},600,function(){
    flag_6=true;
  })
  lis_6f[bao6_next].classList.add("first");
  lis_6f[bao6_now].classList.remove("first");
  bao6_now=bao6_next;
 }
 var leftarrw_6f=$(".leftarrw",obj)[0];
  var rightarrw_6f=$(".rightarrw",obj)[0];
  var flag_6=true;
 console.log(rightarrw_6f)
  rightarrw_6f.onclick=function(){
   if(flag_6){
    flag_6=false;
    f6move();
   } 
  }
  leftarrw_6f.onclick=function(){
    if(flag_6){
      flag_6=false;
      f6movel();
  }
}
}
var mx6_3_1=$(".mx6-3-1");
f6(mx6_3_1[0]);
f6(mx6_3_1[1]);
f6(mx6_3_1[2]);
f6(mx6_3_1[3]);
//10ffffff
  var mx10_3_1=$(".mx10-3-1")[0];
  var bao10=$(".bao1",mx10_3_1);
  var as_10=$(".tupiao-a",bao10[0]);
  console.log(as_10)
  var lis_10f=$("li",mx10_3_1);
  var bao10w=parseInt(getStyle(bao10[0],"width"));
  var f10_t=setInterval(f10move,3000);
  var bao10_now=0;
  var bao10_next=0;
  bao10[0].style.left=0;
   for(var i=1;i<as_10.length;i++){
    as_10[i].style.left=bao10w+"px";
   }
   mx10_3_1.onmouseover=function(){
    clearInterval(f10_t);
   }
   mx10_3_1.onmouseout=function(){
    f10_t=setInterval(f10move,3000);
   }
 function f10move(){
  bao10_next++;
  if(bao10_next>as_10.length-1){
     bao10_next=0;
  }
  as_10[bao10_next].style.left=bao10w+"px";
  animate(as_10[bao10_next],{left:0},600)
  animate(as_10[bao10_now],{left:-bao10w},600,function(){
    flag_10=true;
  })
  lis_10f[bao10_next].classList.add("first");
  lis_10f[bao10_now].classList.remove("first");
  bao10_now=bao10_next;
 } 
 function f10movel(){
  bao10_next--;
  if(bao10_next<0){
     bao10_next=as_10.length-1;
  }
  as_10[bao10_next].style.left=-bao10w+"px";
  animate(as_10[bao10_next],{left:0},600)
  animate(as_10[bao10_now],{left:bao10w},600,function(){
    flag_10=true;
  })
  lis_10f[bao10_next].classList.add("first");
  lis_10f[bao10_now].classList.remove("first");
  bao10_now=bao10_next;
 }
 var leftarrw=$(".leftarrw",mx10_3_1)[0];
 var rightarrw=$(".rightarrw",mx10_3_1)[0];
 var flag_10=true;
 console.log(leftarrw)
  rightarrw.onclick=function(){
   if(flag_10){
    flag_10=false;
    f10move();
   } 
  }
  leftarrw.onclick=function(){
    if(flag_10){
      flag_10=false;
      f10movel();
  }
}

//12f
function f12(obj){
 // var f12_a=$(".f12-a")[0];
var as_12=$(".tupiao-a",obj);
var lis_12f=$("li",obj);
  var  as12w=parseInt(getStyle(as_12[0],"width"));
  var f12_t=setInterval(f12move,3000);
  var bao12_now=0;
  var bao12_next=0;
  as_12[0].style.left=0;
   for(var i=1;i<as_12.length;i++){
    as_12[i].style.left=as12w+"px";
   }
   obj.onmouseover=function(){
    clearInterval(f12_t);
   }
   obj.onmouseout=function(){
    f12_t=setInterval(f12move,3000);
   }
 function f12move(){
  bao12_next++;
  if(bao12_next>as_12.length-1){
     bao12_next=0;
  }
  as_12[bao12_next].style.left=as12w+"px";
  animate(as_12[bao12_next],{left:0},600)
  animate(as_12[bao12_now],{left:-as12w},600,function(){
    flag_12=true;
  })
  lis_12f[bao12_next].classList.add("first");
  lis_12f[bao12_now].classList.remove("first");
  bao12_now=bao12_next;
 } 
 function f12movel(){
  bao12_next--;
  if(bao12_next<0){
     bao12_next=as_12.length-1;
  }
  as_12[bao12_next].style.left=-as12w+"px";
  animate(as_12[bao12_next],{left:0},600)
  animate(as_12[bao12_now],{left:as12w},600,function(){
    flag_12=true;
  })
  lis_12f[bao12_next].classList.add("first");
  lis_12f[bao12_now].classList.remove("first");
  bao12_now=bao12_next;
 }
 var leftarrw=$(".leftarrw",obj)[0];
 var rightarrw=$(".rightarrw",obj)[0];
 var flag_12=true;
 console.log(leftarrw)
  rightarrw.onclick=function(){
   if(flag_12){
    flag_12=false;
    f12move();
   } 
  }
  leftarrw.onclick=function(){
    if(flag_12){
      flag_12=false;
      f12movel();
  }
}
} 
var f12_a=$(".f12-a");
f12(f12_a[0]);
f12(f12_a[1]);

//楼层选项卡
function xuan(obj){

var bao_con=$(".bao-con",obj)[0];
var mains=$(".main",bao_con);
var fmt=$(".fmt",obj);
var floor_right=$(".floor-right",fmt[0])[0];
var floor_lis=$("li",floor_right);
// console.log(bao_con);
console.log(fmt.length);
for(var i=1;i<mains.length;i++){
  mains[i].style.display="none";
}
for(var i=0;i<mains.length;i++){
   floor_lis[i].index=i;
      floor_lis[i].onmouseover=function(){
        for(var j=0;j<floor_lis.length;j++){
        mains[j].style.display="none";
        floor_lis[j].className="";
        }
        mains[this.index].style.display="block";
        this.className="lihover";
}
}
}

var floors=$(".floor");
console.log(floors[0])
xuan(floors[0]);
xuan(floors[1]);
xuan(floors[2]);
xuan(floors[3]);
xuan(floors[4]);
xuan(floors[5]);
xuan(floors[6]);
xuan(floors[7]);
xuan(floors[8]);
xuan(floors[9]);
xuan(floors[10]);

var yc=$("li",$(".youlan1")[0]);
    for(var i=0;i<yc.length;i++){
        yc[i].index=i;
        yc[i].onmouseover=function(){
            this.style.backgroundColor="#c81623";
            animate($("span",this)[0],{left:-60},200);
        }
        yc[i].onmouseout=function(){
            var that=this.index;
            animate($("span",this)[0],{left:0},200,function(){
               yc[that].style.backgroundColor="#7a6e6e";
            })
        }
    }



}
  