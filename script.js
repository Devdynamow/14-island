function Trigger(){
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
    
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);
    
    // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      }, // we don't have to define a scrollLeft because we're only scrolling vertically.
      getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
      },
      // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
      pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });
    
  
    
    
    
    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    
    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
    
}
Trigger()
function coloreffect(){
  const main = document.querySelector('#page1');
const cursor = document.querySelector('#cursor');

const colors = ['#ff0000', '#ff7f00', '#ffff00', '#00ff00', '#0000ff', '#4b0082', '#8b00ff'];
let currentIndex = 0;

main.addEventListener('mousemove', createRainbowTrail);
main.addEventListener("mousemove",function(details){
    gsap.to(cursor,{
        x:details.x-10,
        y:details.y-20,
    })
})

function createRainbowTrail(event) {
  const trailDot = document.createElement("div");
  trailDot.className = 'trail-dot';

  const x = event.clientX;
  const y = event.clientY;

  trailDot.style.background = getRandomColor();
  trailDot.style.left = `${x}px`;
  trailDot.style.top = `${y}px`;

  main.appendChild(trailDot);

  setTimeout(() => {
    main.removeChild(trailDot);
  }, 100);
}
// setInterval(function(){
//   main.removeChild(trailDot)
// },100)
function getRandomColor() {
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
}

}
coloreffect()


// var h1text = document.querySelector(".textcontainer h1")

//     var textc = h1text.textContent;
//     var splitt = textc.split("")
//     var clutter = ""
//     splitt.forEach(function(elem){
//      clutter += `<span>${elem}</span>`
 

//  })
//  h1text.innerHTML = clutter
 
 
//  var spantag = document.querySelectorAll("h1text span");
// spantag.forEach(function(dets){
//     dets.style.display = "inline-block"
// })
// gsap.from("span",{
//   y:-400,
//   duration:0.2,
//   stagger:0.1,
//   opacity:0
// })





var textc = document.querySelector(".textcontainer")
Shery.imageEffect(".elem img", {
  style: 5,
  // debug: true,
  // gooey:true,
config:{"a":{"value":2.75,"range":[0,30]},"b":{"value":0.53,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":1.4980515139388617},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":true},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1.41,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.12,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.52,"range":[0,2],"_gsap":{"id":11}},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.02,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}}
  // config:{"noiseDetail":{"value":6.11,"range":[0,100]},"distortionAmount":{"value":2.9,"range":[0,10]},"scale":{"value":59.54,"range":[0,100]},"speed":{"value":0.58,"range":[0,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.8333333134651184},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.27,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":0},"noise_speed":{"value":0.84,"range":[0,10]},"metaball":{"value":0.44,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.38,"range":[0,2]},"noise_scale":{"value":8.4,"range":[0,100]}}

});
// Array containing random text options
var texts = [
  'Digital Innovation to seize opportunities ',
  'Lovable Products from vision to launch',
  'Branded Experiences that grow your business'
  
];

// Function to get a random element from an array
function getRandomElement(array) {
  var randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

// Function to update the text content with animation
function updateTextWithAnimation() {
  var randomText = getRandomElement(texts);
  var textElement = document.getElementById('randomText');
  var tec = textElement.textContent;
  var splt = tec.split("")
  var clut = ""
  splt.forEach(function(texte){
    clut += `<span>${texte}</span>`

  })
  textElement.innerHTML = clut;

 
  var spantag = document.querySelectorAll("h1text span");
spantag.forEach(function(dets){
    dets.style.display = "inline-block"
})

  // Animate the text change using GSAP
  gsap.to(textElement, { duration: 0.5, opacity: 0, onComplete: function() {
    textElement.textContent = randomText;
    gsap.to(textElement ,  { duration: 0.5, opacity: 1,stagger:0.5});
   
  }});
}

// Call the updateTextWithAnimation function initially to display random text
updateTextWithAnimation();

// Set interval to update text with animation every 3 seconds (3000 milliseconds)
setInterval(updateTextWithAnimation, 2000); // Change 3000 to the desired interval in milliseconds
var h2 = document.querySelectorAll(".relem h2")
h2.forEach(function(he){
gsap.from(he,{
y:60,
delay:0.5,
stagger:{
  amount:0.5
},
opacity:0,
scrollTrigger:{
  trigger:"#page4 .relem",
  scroller:"#main",
  // markers:true,
  start:"top 50%",
  end:"top 90%"
}
})
})
gsap.from("#page5 h1",{
  y:200,
  stagger:{
    amount:0.5
  },
  duration:0.5,
  opacity:0,
  scrollTrigger:{
    trigger:"#page5",
    scroller:"#main",
    // markers:true,
    start:"top 50%",
    end:"top 90%",
    scrub:5
  }
})



  const cursors = document.getElementById('cursorsmoke');
var page6 = document.querySelector("#page6")
  page6.addEventListener('mousemove', function(event) {
    cursors.style.left = event.pageX + 'px';
    cursors.style.top = event.pageY + 'px';

    const smoke = document.createElement('div');
    smoke.className = 'smoke';
    cursors.appendChild(smoke);

    setTimeout(() => {
      cursors.removeChild(smoke);
    }, 2000); // Remove smoke after 2 seconds
  });

