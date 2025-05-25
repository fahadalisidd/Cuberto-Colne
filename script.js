function loader(){
    var timeline = gsap.timeline();
    timeline.from('.loader h1',{
        opacity:0,
        y:+100,
        stagger:0.5,
    })
    timeline.from('.loader video',{
        scale:0,
        trasition: "elastic.inOut(1, 0.3)",
    })
}
function customcursor(){
    document.addEventListener("mousemove", function (dets) {
    console.log(dets.clientX, dets.clientY);
    gsap.to(".crsr", {

        left: dets.x ,
        top: dets.y,
    });
    });

}
function menueffect(){
    var menu = document.querySelector("#menu-icon");
    menu.addEventListener('mouseenter',function(){
        gsap.to(".crsr", {
            scale: 4,
            ease: "elastic.inOut(1, 0.3)",
        });
    })
    menu.addEventListener('mouseover',function(){
        gsap.to(".crsr", {
            scale: 4,
            ease: "elastic.inOut(1, 0.3)",
        });
    })
    menu.addEventListener('mouseleave',function(){
        gsap.to(".crsr", {
            scale: 1,
        });
    })

}

function videocrsr(){
    var page1 = document.querySelector(".page1");
    page1.addEventListener('mousemove',function(dets){
        console.log(dets.clientX, dets.clientY);
        document.querySelector(".crsr").style.opacity=0;
        gsap.to('.videocrsr',{
            left:dets.clientX,
            top:dets.clientY,
            opacity:1,
        })
    });
    page1.addEventListener('mousenter',function(){
        gsap.to('.crsr',{
            opacity:0,
        })
        gsap.to('.videocrsr',{
            opacity:1,
        })
    })
    page1.addEventListener('mouseleave',function(){
        gsap.to('.crsr',{
            opacity:1,
        })
        gsap.to('.videocrsr',{
            opacity:0,
        })
    })
    var page2 = document.querySelector(".page1");
    page2.addEventListener('mousemove',function(dets){
        console.log(dets.clientX, dets.clientY);
        document.querySelector(".crsr").style.opacity=0;
        gsap.to('.videocrsr',{
            left:dets.clientX,
            top:dets.clientY,
            opacity:1,
        })
    });
    page2.addEventListener('mouseenter',function(){
        gsap.to('.crsr',{
            opacity:0,
        })
        gsap.to('.videocrsr',{
            opacity:1,
        })
    })
    page2.addEventListener('mouseleave',function(){
        gsap.to('.crsr',{
            opacity:1,
        })
        gsap.to('.videocrsr',{
            opacity:0,
        })
    })
}

function videoplay()
{
    var page1 = document.querySelector('.page1');
    var page2 = document.querySelector('.page2');
    page1.addEventListener("click",function(){
        document.querySelector('.page1').style.opacity=0;
        gsap.to('.page2',{
            opacity:1,
            top:600,
            duration:1,
        })
        document.querySelector('.vid2').play();
    })
    page2.addEventListener("click",function(dets){
        document.querySelector('.page1').style.opacity=1;
        gsap.to('.page2',{
            opacity:0,
            top:-100,
            duration:1,
        })
        document.querySelector('.vid2').pause();
    })
}
function page4(){
    gsap.from('.page4 h1',{
    y:+200,
    opacity:0,
    // delay:0.5,
    // duration:1,
    trasition:'ease-in-out',
    stagger:1,
    })
    gsap.from('.page4 video',{
        scale:0,
        opacity:1,
        // delay:0.5,
        // duration:1,
        trasition:'ease-in-out',
    })
}
function explore(){
    var cards1 = document.querySelector('.cards1');
    cards1.addEventListener('mousemove',function(dets){
        document.querySelector('.crsr').style.opacity=0;
        gsap.to('.explore',{
            scale:1,
            opacity:1,
            left:dets.clientX, 
            top:dets.clientY,
            trasition:'ease-in-out',
        })
    })
    cards1.addEventListener('mouseleave',function(dets){
        document.querySelector('.crsr').style.opacity=1;
        gsap.to('.explore',{
            opacity:0,
            scale:0,
            trasition:'ease-in-out',
        })
    })
    var card2 = document.querySelector('.card2');
    card2.addEventListener('mousemove',function(dets){
        document.querySelector('.crsr').style.opacity=0;
        gsap.to('.explore',{
            opacity:1,
            left:dets.clientX, 
            top:dets.clientY,
            scale:1,
            trasition:'ease-in-out',
        })
    })
    card2.addEventListener('mouseleave',function(dets){
        document.querySelector('.crsr').style.opacity=1;
        gsap.to('.explore',{
            opacity:0,
            trasition:'ease-in-out',
            scale:0,
        })
    })
}

function drag(){
    var scon = document.querySelector('.scon');
    scon.addEventListener('mousemove',function(dets){
        document.querySelector('.crsr').style.opacity=0;
        gsap.to('.drag',{
            opacity:1,
            left:dets.clientX,
            top:dets.clientY,
        })
    })
        scon.addEventListener('mouseleave',function(dets){
        document.querySelector('.crsr').style.opacity=1;
        gsap.to('.drag',{
            opacity:0,
        })
    })
}

var cuberto = document.querySelector('.cuberto');
cuberto.addEventListener('mousemove',function(){
    gsap.from('.cuberto',{
        opacity:0,
        scale:0,
        y:100,
        
    })
})

drag();
explore();
page4();
videocrsr();
loader();
menueffect();
videoplay();
customcursor();





