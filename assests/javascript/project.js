import { Projects } from './projectDetails.js';

export class Project {
 constructor() {
  this.backdrop_Enabled = false;
  this.maindisplay = document.getElementById('project_display_maincontainer');
  this.display = this.maindisplay.querySelector('#project_display_container');
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
  this.maindisplay.style.display = "block";
  this.display.querySelector('img').src = `${Project.src}`;
  this.maindisplay.querySelector('a').href = `${Project.href}`;
  this.display.querySelector('.details h3').textContent = `${Project.title}`;
  this.display.querySelector('.details h5').textContent = `${Project.types}`;
  this.display.querySelector('.details p').textContent = `${Project.des}`;
  this.backdrop_Enabled = true;
  this.derender();
 }

 derender() {
  if (this.backdrop_Enabled == true) {
   console.log("checked");
   document.getElementById('project_display_maincontainer').addEventListener('click', () => {
    this.maindisplay.style.display = 'none';
    this.backdrop_Enabled = false;

   })
  }
 }








}