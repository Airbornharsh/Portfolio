import {Nav} from './nav.js';
import {Skills} from './skills.js';
import {Project} from './project.js'


class APP {
 static init() {
  new Nav();
  new Skills();
  new Project();

 }
}

APP.init();