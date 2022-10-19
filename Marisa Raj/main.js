Splitting();

let cursor = document.querySelector(".cursor"),
  cursorText = document.querySelectorAll(".char");

function roundedText() {
  for (i = 0; i < cursorText.length; ++i) {
    let rotation = i * (360 / cursorText.length);
    gsap.set(cursorText[i], {
      transformOrigin: `0px 100px`,
      x: `100`,
      scale: 2.7,
      rotate: rotation,
    });

    gsap.set(cursor, {
      transformOrigin: "center center",
      rotation: 0,
      width: 100 * 2,
      height: 100 * 2,
    });

    let rotate = gsap.timeline({ repeat: -1 });
    rotate.to(cursor, { rotation: 360, duration: 30, ease: "none" });
  }
}

function init(){
    roundedText()
}

window.addEventListener("load", function () {
    init();
})

gsap.set(".ball", {xPercent: -50, yPercent: -50});

const ball = document.querySelector(".ball");
const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
const mouse = { x: pos.x, y: pos.y };
const speed = 0.2;

const xSet = gsap.quickSetter(ball, "x", "px");
const ySet = gsap.quickSetter(ball, "y", "px");

window.addEventListener("mousemove", e => {    
  mouse.x = e.x;
  mouse.y = e.y;  
});

gsap.ticker.add(() => {
  
  // adjust speed for higher refresh monitors
  const dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio()); 
  
  pos.x += (mouse.x - pos.x) * dt;
  pos.y += (mouse.y - pos.y) * dt;
  xSet(pos.x);
  ySet(pos.y);
});