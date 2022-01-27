class Skills {
 constructor() {
  this.condition = false;
  this.li;
  this.call();
 }

 call() {
  const lis = document.querySelectorAll("#skills_number li");
  for (const li of lis) {
   li.addEventListener('mouseover', (event) => {
    if (this.condition == true) {
     this.li.style.transform = "scale(0.7)";
     this.li.style.opacity = "40%";
     this.li = event.currentTarget;
     event.currentTarget.style.transform = "scale(1.2)";
     event.currentTarget.style.opacity = "100%";
    }
    else {
     this.li = event.currentTarget;
     event.currentTarget.style.transform = "scale(1.2)";
     event.currentTarget.style.opacity = "100%";
     this.condition = true;
    }
   });
   li.addEventListener('mouseleave', () => {
    if (this.condition == true) {
     this.li.style.transform = "scale(0.7)";
     this.li.style.opacity = "40%";
    }
   });
  }
 }

}

/*class Intro {
 constructor() {
  this.gather();
 }

 gather() {
  const ul = document.getElementById('intro_text');
  setInterval(() => {
   const randomx = Math.random() * 20;
   const randomy = Math.random() * 20;
   ul.style.transform = `translate(${randomx}px,${randomy}px)`;

  }, 400);

 }
}
*/










class APP {
 static init() {
  new Skills();
 }

}

APP.init();