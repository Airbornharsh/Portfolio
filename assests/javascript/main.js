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

class Nav {
 constructor() {
  this.navParent = document.getElementById('nav');
  this.navUl = this.navParent.querySelector('ul')
  this.navOpenBt = this.navParent.querySelector('.navopen');
  this.time = 1000;
  this.click();
 }

 click() {
  this.checkClicked = false;
  this.navOpenBt.addEventListener('click', this.checkClickedMethod.bind(this));
  this.navParent.addEventListener('mouseenter', this.checkClickedMethod.bind(this));
  this.navParent.addEventListener('mouseleave', this.checkClickedMethod.bind(this));
 }

 checkClickedMethod() {
  if (this.checkClicked == false) {
   this.clicked();
   this.checkClicked = true;
  } else {
   this.notClicked();
   this.checkClicked = false;
  }
 }

 clicked() {
  if (this.notClickedInterval) {
   clearInterval(this.notClickedInterval);
   console.log('clicked');
  }
  this.navUl.style.display = 'flex';
  this.navOpenBt.style.borderRadius = '6%';
  this.navParent.style.backgroundColor = 'lightgrey';
  this.clickedInterval = setInterval(() => {
   this.navUl.style.opacity = 1;
  }, 1);
 }

 notClicked() {
  if (this.clickedInterval) {
   clearInterval(this.clickedInterval);
   console.log('notClicked');
  }
  this.navUl.style.opacity = 0;
  this.navOpenBt.style.borderRadius = '50%';
  // this.navOpenBt.style.backgroundColor = 'rgba(0, 24, 77, 1)';
  this.navOpenBt.style.backgroundColor = '#00C2FF';
  this.navParent.style.backgroundColor = 'transparent';
  this.notClickedInterval = setInterval(() => {
   this.navUl.style.display = 'none';
  }, this.time);
 }
}








class APP {
 static init() {
  new Nav();
  new Skills();

 }

}

APP.init();