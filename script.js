const scroll = new LocomotiveScroll({
    el: document.querySelector('.top-level-element'),
    smooth: true
});

function circleMouseFollower(){
    window.addEventListener("mousemove", function(dets){
        document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px` ;
    })
}

circleMouseFollower(); 