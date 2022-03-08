/* eslint-disable space-in-parens */
/* eslint-disable function-paren-newline */
/* eslint-disable no-unused-expressions */
/* eslint-disable function-call-argument-newline */
export class Skills {
    constructor() {
        this.condition = false;
        this.call();
    }

    call() {
        const lis = document.querySelectorAll("#skills_number li");
        for (const li of lis) {
            li.addEventListener('mouseover',
                (event) => {
                    if (this.condition === true) {
                        this.li.style.transform = "scale(0.7)";
                        this.li.style.opacity = "40%";
                        this.li = event.currentTarget;
                        event.currentTarget.style.transform = "scale(1.2)";
                        event.currentTarget.style.opacity = "100%";
                    } else {
                        this.li = event.currentTarget;
                        event.currentTarget.style.transform = "scale(1.2)";
                        event.currentTarget.style.opacity = "100%";
                        this.condition = true;
                    }
                }
            );
            li.addEventListener('mouseleave', () => {
                if (this.condition === true) {
                    this.li.style.transform = "scale(0.7)";
                    this.li.style.opacity = "40%";
                }
            });
        }
    }

}