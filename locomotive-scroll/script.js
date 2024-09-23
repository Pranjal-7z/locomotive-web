function loading() {
    var tl = gsap.timeline()
    tl.from("#loader h1, nav",{
        opacity:0,
        delay:0.6,
        duration:0.5
    },"sath")
    tl.to("#loader #yellow", {
        y: "-100%",
        delay: 0.3,
        duration: 1,
        ease: "expo.out",

    },"sath")
    tl.to("#loader video", {
        y: "-100%",
        delay: 0.3,
        ease: "expo.out",
    }, "sobat")
    tl.to("#loader ", {
        opacity: 0,
        delay: 0.41,

    }, "sobat")
    tl.to("nav svg path",{
     fill:"black",
     delay:0.35
    }, "sobat")
    tl.to("#loader ", {
        display:"none",
        delay:0.01
        
    })

}
loading() 

    const scroll = new LocomotiveScroll({
        el: document.querySelector('#main'),
        smooth: true
    });
    var elems =document.querySelectorAll("#elem")
    var page2 = document.querySelector("#page2")
    elems.forEach(function(ele){
    ele.addEventListener("mouseenter",function(){
        var bgimg=ele.getAttribute("data-img")
      page2.style.backgroundImage= `url(${bgimg})`
    })
    })


document.querySelector("#page4 h1").addEventListener("click",function(){
    
    scroll.scrollTo(0)
})