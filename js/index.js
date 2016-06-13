/**
 * Created by Administrator on 2016/6/9.
 */
$(function(){
    var obj1={num:0}
    $(obj1).animate({num:2016},{
        duration:1000,
        step:function(){
            $(".jz").html(Math.ceil(obj1.num))
            if(Math.ceil(obj1.num)==2016){
                $(".jz").css("color","#fff")
                $(".boxbg").fadeOut(900)
            }
        }
    })
    $(".ebtu").each(function(index){
        $(".ebtu").eq(index).hover(function(){
            $(".ebz1").eq(index).css("animation","scoreT 0.5s linear forwards")
            $(".ebz1").eq(index).css("animation","scoreT 0.5s linear forwards")
        },function(){
            $(".ebz1").eq(index).css("animation","scoreF 0.3s linear forwards")
            $(".ebz1").eq(index).css("animation","scoreF 0.3s linear forwards")
        })
    })
    $(".start").click(function(){
        var Hheight=$(".bannertu").height()
        $("body,html").animate({scrollTop:Hheight})
    })

    var aboutzi1=$(".aboutzi1")
    var aboutzi2=$(".aboutzi2")
    var name=$(".name")
    var name1=$(".name1")
    $(window).on("scroll",function(){
        var top=$(window).scrollTop();
        var abouth=aboutzi1[0].offsetTop
        if(top>abouth){
            aboutzi1.css("animation", "aboutzi1 1s cubic-bezier(0.935, -0.600, 0.425, 1.650) forwards")
            aboutzi2.css("animation", "aboutzi1 1s cubic-bezier(0.935, -0.600, 0.425, 1.650) forwards")
            name.css("animation", "name 1s ease forwards")
            name1.css("animation", "name 1s ease forwards")


        }
    })




    

    var canvas1=document.getElementsByClassName("canvas1")[0];
    var cobj=canvas1.getContext("2d");
    var speed=5;
    var a=0;
    function move(){
        a+=speed;
        if(a>320){
            a=320;
            window.webkitCancelAnimationFrame(t)
        }else{
            cobj.clearRect(0,0,200,200);
            cobj.save();
            cobj.translate(100,100);
            cobj.beginPath();
            cobj.lineWidth=3;
            cobj.strokeStyle="#fff";
            cobj.arc(0,0,50,0,a*Math.PI/180);
            cobj.stroke();
            cobj.lineWidth=1;
            cobj.textAlign="center";
            cobj.textBaseline="hanging";
            var num=(a/360*100).toFixed(2);
            cobj.strokeText(num+"%",0,0);
            cobj.restore();
            t=window.webkitRequestAnimationFrame(move)
        }
    }
    move();
    var canvas2=document.getElementsByClassName("canvas2")[0];
    var cobj2=canvas2.getContext("2d");
    var speed2=5;
    var a2=0;
    function move2(){
        a2+=speed2;
        if(a2>340){
            a2=340;
            window.webkitCancelAnimationFrame(t2)
        }else{
            cobj2.clearRect(0,0,200,200);
            cobj2.save();
            cobj2.translate(100,100);
            cobj2.beginPath();
            cobj2.lineWidth=3;
            cobj2.strokeStyle="#fff";
            cobj2.arc(0,0,50,0,a2*Math.PI/180);
            cobj2.stroke();
            cobj2.lineWidth=1;
            cobj2.textAlign="center";
            cobj2.textBaseline="hanging";
            var num2=(a3/360*100).toFixed(2);
            cobj2.strokeText(num2+"%",0,0);
            cobj2.restore();
            t2=window.webkitRequestAnimationFrame(move2)
        }
    }
    move2();
    var canvas3=document.getElementsByClassName("canvas3")[0];
    var cobj3=canvas3.getContext("2d");
    var speed3=5;
    var a3=0;
    function move3(){
        a3+=speed3;
        if(a3>330){
            a3=330;
            window.webkitCancelAnimationFrame(t3)
        }else{
            cobj3.clearRect(0,0,200,200);
            cobj3.save();
            cobj3.translate(100,100);
            cobj3.beginPath();
            cobj3.lineWidth=3;
            cobj3.strokeStyle="#fff";
            cobj3.arc(0,0,50,0,a3*Math.PI/180);
            cobj3.stroke();
            cobj3.lineWidth=1;
            cobj3.textAlign="center";
            cobj3.textBaseline="hanging";
            var num3=(a3/360*100).toFixed(2);
            cobj3.strokeText(num3+"%",0,0);
            cobj3.restore();
            t3=window.webkitRequestAnimationFrame(move3)
        }
    }
    move3();

    var canvas4=document.getElementsByClassName("canvas4")[0];
    var cobj4=canvas4.getContext("2d");
    var speed4=5;
    var a4=0;
    function move4(){
        a4+=speed4;
        if(a4>295){
            a4=295;
            window.webkitCancelAnimationFrame(t4)
        }else{
            cobj4.clearRect(0,0,200,200);
            cobj4.save();
            cobj4.translate(100,100);
            cobj4.beginPath();
            cobj4.lineWidth=3;
            cobj4.strokeStyle="#fff";
            cobj4.arc(0,0,50,0,a4*Math.PI/180);
            cobj4.stroke();
            cobj4.lineWidth=1;
            cobj4.textAlign="center";
            cobj4.textBaseline="hanging";
            var num4=(a4/360*100).toFixed(2);
            cobj4.strokeText(num4+"%",0,0);
            cobj4.restore();
            t4=window.webkitRequestAnimationFrame(move4)
        }
    }
    move4();
    var canvas5=document.getElementsByClassName("canvas5")[0];
    var cobj5=canvas5.getContext("2d");
    var speed5=5;
    var a5=0;
    function move5(){
        a5+=speed5;
        if(a5>305){
            a5=305;
            window.webkitCancelAnimationFrame(t5)
        }else{
            cobj5.clearRect(0,0,200,200);
            cobj5.save();
            cobj5.translate(100,100);
            cobj5.beginPath();
            cobj5.lineWidth=3;
            cobj5.strokeStyle="#fff";
            cobj5.arc(0,0,50,0,a5*Math.PI/180);
            cobj5.stroke();
            cobj5.lineWidth=1;
            cobj5.textAlign="center";
            cobj5.textBaseline="hanging";
            var num5=(a5/360*100).toFixed(2);
            cobj5.strokeText(num5+"%",0,0);
            cobj5.restore();
            t5=window.webkitRequestAnimationFrame(move5)
        }
    }
    move5();
    var canvas6=document.getElementsByClassName("canvas6")[0];
    var cobj6=canvas6.getContext("2d");
    var speed6=5;
    var a6=0;
    function move6(){
        a6+=speed6;
        if(a6>285){
            a6=285;
            window.webkitCancelAnimationFrame(t6)
        }else{
            cobj6.clearRect(0,0,200,200);
            cobj6.save();
            cobj6.translate(100,100);
            cobj6.beginPath();
            cobj6.lineWidth=3;
            cobj6.strokeStyle="#fff";
            cobj6.arc(0,0,50,0,a6*Math.PI/180);
            cobj6.stroke();
            cobj6.lineWidth=1;
            cobj6.textAlign="center";
            cobj6.textBaseline="hanging";
            var num6=(a6/360*100).toFixed(2);
            cobj6.strokeText(num6+"%",0,0);
            cobj6.restore();
            t6=window.webkitRequestAnimationFrame(move6)
        }
    }
    move6();
    var ot=$(".ebbg")[0].offsetTop;
    var og=$(".sibg")[0].offsetTop;
    $(window).scroll(function(){
        var stop=$(window).scrollTop()
        //alert(stop)
        if(stop>ot+$(window).height()){
            $(".ebtu").css("animation","shang 1.5s linear forwards")
        }
        if(stop>og+$(window).height()){
            $(".sibox").css("animation","fangda 1s linear 0.5s forwards")
        }
    })

})
