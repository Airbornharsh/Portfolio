export class Nav {
 constructor() {
  this.navParent = document.getElementById('nav');
  this.navUl = document.getElementById('navul')
  this.navOpenBt = document.getElementById('navopen');
  this.time = 1000;
  this.click();
 }

 click() {
  this.checkClicked = false;
  this.navOpenBt.addEventListener('click', () => {
   this.checkClickedMethod();
  });
 /* this.navParent.addEventListener('mouseenter', this.checkClickedMethod.bind(this));
  this.navParent.addEventListener('mouseleave', this.checkClickedMethod.bind(this));*/
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
  }
  this.navUl.style.display = 'flex';
  this.clickedInterval = setInterval(() => {
   this.navUl.style.opacity = 0.6;
  }, 1);
 }

 notClicked() {
  if (this.clickedInterval) {
   clearInterval(this.clickedInterval);
  }
  this.navUl.style.opacity = 0;
  this.notClickedInterval = setInterval(() => {
   this.navUl.style.display = 'none';
  }, this.time);
 }
}
