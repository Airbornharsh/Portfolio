import { Projects } from './projectDetails.js';

export class Project {
 constructor() {
  this.backdrop_Enabled = false;
  this.display = document.getElementById('project_display_container');
  this.check();
 }

 check() {
  let lis = document.querySelectorAll('#projects_Name li');
  for (const li of lis) {
   li.addEventListener('click', () => {
    this.projectcheck(li.id);
   })
  }
 }

 projectcheck(id) {
  for (const Project of Projects) {
   if (Project.id == id) {
    this.render(Project);
   }
  }
 }

 render(Project) {
  this.display.style.display = "flex";
  this.display.querySelector('img').src = `${Project.src}`;
  this.display.querySelector('.details a').href = `${Project.href}`;
  this.display.querySelector('.details a h3').textContent = `${Project.title}`;
  this.display.querySelector('.details h5').textContent = `${Project.types}`;
  this.display.querySelector('.details p').textContent = `${Project.des}`;
  this.backdrop_Enabled = true;
  this.derender();
 }

 derender() {
  if (this.backdrop_Enabled == true) {
   console.log("checked");
   window.onscroll(() => {
    this.display.style.display = 'none';
    this.backdrop_Enabled = false;
   })
  }
 }








}