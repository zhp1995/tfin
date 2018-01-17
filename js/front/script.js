var g_bMoveLeft=true;
var g_oTimer=null;
var g_oTimerOut=null;

var g_iSpeed=3;

window.onload=function ()
{
    var Oyin= document.getElementById('yincang');
    var Inform = document.getElementById('Inform');
    var wrap = document.getElementById('IDwrap');

    window.onresize = function () {            //改变浏览器大小后适应页面的功能
      var Bwidth = document.documentElement.clientWidth;
      var Nhead=document.getElementById('Nhead');
      var Nheada=Nhead.getElementsByTagName('a')[0];
      var Nheadp=Nhead.getElementsByTagName('p')[0];
      
          if (Bwidth <= 975) {              //搜索框
          Inform.style.display = 'none';
        }else{
          Inform.style.display = 'block';
        }

        if (Bwidth<=728) {                 //无缝滚动
          wrap.style.width = Bwidth+'px';
        };
        if(Bwidth<=295){                  //标题字体大小
          Nheada.style.fontSize = 1.2+'em';
          Nheadp.style.fontSize = 0.5+'em';
          Nheadp.style.textIndent = 0+'px';
        }else if (Bwidth<=345) {
          Nheada.style.fontSize = 1.5+'em';
          Nheadp.style.fontSize = 0.65+'em';
          Nheadp.style.textIndent = 0+'px';
          
        }else if(Bwidth<=400){
          Nheada.style.fontSize = 2+'em';
          Nheadp.style.fontSize = 0.8+'em';
          Nheadp.style.textIndent = 10+'px';
        }else{
          Nheada.style.fontSize = 2.5+'em';
          Nheadp.style.fontSize = 0.95+'em';
        };

      };
//$(".img-responsive").addClass("carousel-inner");
 

    /*无缝滚动实现代码*/
  var oDiv=document.getElementById('roll');
  var oUl=oDiv.getElementsByTagName('ul')[0];
  var aLi=oUl.getElementsByTagName('li');
  var aA=oDiv.getElementsByTagName('a');
  
  var i=0;
  
  var str=oUl.innerHTML+oUl.innerHTML;
  
  oUl.innerHTML=str;
  
  oUl.style.width=aLi[0].offsetWidth*aLi.length+'px';

  
  
  for(i=0;i<aLi.length;i++)
  {
    aLi[i].onmouseover=function ()
    {
      stopMove();
    };
    
    aLi[i].onmouseout=function ()
    {
      startMove(g_bMoveLeft);
    };
  }
  
  aA[0].onmouseover=function ()
  {
    startMove(true);
  };
  
  aA[1].onmouseover=function ()
  {
    startMove(false);
  };
  
  startMove(true);
};

function startMove(bLeft)
{
  g_bMoveLeft=bLeft;
  
  if(g_oTimer)
  {
    clearInterval(g_oTimer);
  }
  g_oTimer=setInterval(doMove, 45);
}

function stopMove()
{
  clearInterval(g_oTimer);
  g_oTimer=null;
}

function doMove()
{
  var oDiv=document.getElementById('roll');
  var oUl=oDiv.getElementsByTagName('ul')[0];
  var aLi=oUl.getElementsByTagName('li');
  
  var l=oUl.offsetLeft;
  
  if(g_bMoveLeft)
  {
    l-=g_iSpeed;
    if(l<=-oUl.offsetWidth/2)
    {
      l+=oUl.offsetWidth/2;
    }
  }
  else
  {
    l+=g_iSpeed;
    if(l>=0)
    {
      l-=oUl.offsetWidth/2;
    }
  }
  
  oUl.style.left=l+'px';
}
