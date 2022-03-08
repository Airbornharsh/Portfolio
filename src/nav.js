/* eslint-disable no-plusplus */
/* eslint-disable no-console */
/* eslint-disable no-shadow */
/* eslint-disable prefer-const */
/* eslint-disable id-length */
/* eslint-disable no-magic-numbers */
/* eslint-disable function-call-argument-newline */
/* eslint-disable no-unused-vars */
export class Nav {
    constructor() {
        this.navParent = document.getElementById('nav');
        this.navUl = document.getElementById('navul')
        this.navOpenBt = document.getElementById('navopen');
        this.time = 1000;
        this.click();
        this.navBtClick();
    }

    click() {
        this.checkClicked = false;
        this.navOpenBt.addEventListener('click', () => {
            this.checkClickedMethod();
        });
    }

    checkClickedMethod() {
        if (this.checkClicked === false) {
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
            this.navUl.style.opacity = 0.7;
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


    navBtClick() {
        this.lis = this.navUl.querySelectorAll('li');
        let c = 0;
        this.lis.forEach((li, c) => {
            li.addEventListener('click', () => {
                console.log(c);
                this.scroll(li.id, c - 1);
            })
        });
    }

    scroll(id, c) {
        let elHeight = 0;
        for (let i = 0; i <= c; i++) {
            const li = document.getElementById(`${this.lis[i].id}_container`)
            elHeight += li.offsetHeight;
        }
        window.scrollTo(0, elHeight);
    }


}