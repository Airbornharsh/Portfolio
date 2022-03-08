import { Nav } from './nav';
import { Skills } from './skills';
import { Project } from './project'
import { Audio } from './music'


class APP {
    static init() {
        new Nav();
        new Skills();
        new Project();
        new Audio();

    }
}

APP.init();