/* eslint-disable max-len */
/* eslint-disable curly */
/* eslint-disable max-statements */
/* eslint-disable no-extra-parens */
/* eslint-disable no-console */
/* eslint-disable no-plusplus */
/* eslint-disable no-magic-numbers */
/* eslint-disable function-paren-newline */
/* eslint-disable one-var */
/* eslint-disable object-curly-spacing */
import { Audios } from "./musicDetails";

export class Audio {
    // eslint-disable-next-line max-statements
    constructor() {
        const controls = document.getElementById('controls');
        this.play = controls.querySelector('#play');
        this.pause = controls.querySelector('#pause');
        this.next = controls.querySelector('#next');
        this.previous = controls.querySelector('#previous');
        this.musicImage = document.getElementById('music_image');
        this.audio = document.getElementById('main_audio');
        this.musicTitle = document.getElementById('music_title');
        this.audioPlaying = false;
        this.index = 0;
        this.activeplayer = false;
        this.musicpod();
    }

    musicpod() {
        const pod = document.getElementById('music_icon');
        const music = document.getElementById('music');
        pod.addEventListener(
            'click',
            () => {
                if (this.activeplayer === false) {
                    music.style.display = 'flex';
                    this.activeplayer = true;
                    this.click();
                } else {
                    music.style.display = 'none';
                    this.activeplayer = false;
                }
            });
    }

    click() {
        this.play.addEventListener(
            'click',
            this.playAudio.bind(this)
        );
        this.pause.addEventListener(
            'click',
            this.pauseAudio.bind(this)
        );
        this.next.addEventListener(
            'click',
            this.nextAudio.bind(this)
        );
        this.previous.addEventListener(
            'click',
            this.previousAudio.bind(this)
        );
        this.slider = document.getElementById('player_input');
        this.previousAudio();
    }

    playAudio() {
        this.play.style.display = 'none';
        this.pause.style.display = 'block';
        this.audio.play();
        this.interval = setInterval(() => {
                this.inputBar();
            },
            1000);
    }

    pauseAudio() {
        this.play.style.display = 'block';
        this.pause.style.display = 'none';
        this.audio.pause();
    }

    nextAudio() {
        if (this.index >= 0 && this.index <= (Audios.length - 2)) {
            ++this.index;
            console.log(this.index);
            this.audio.src = `${Audios[this.index].audiosrc}`;
            this.musicImage.src = `${Audios[this.index].imgsrc}`;
            this.musicTitle.textContent = `${Audios[this.index].title}`;
            if (this.interval) clearInterval(this.interval);
            this.slider.value = 0;
            this.audio.currentTime = 0;
            this.pauseAudio();
        }
    }

    previousAudio() {
        if (this.index >= 1 && this.index <= (Audios.length - 1)) {
            --this.index;
            console.log(this.index);
            this.audio.src = `${Audios[this.index].audiosrc}`;
            this.musicImage.src = `${Audios[this.index].imgsrc}`;
            this.musicTitle.textContent = `${Audios[this.index].title}`;
            if (this.interval) clearInterval(this.interval);
            this.slider.value = 0;
            this.audio.currentTime = 0;
            this.pauseAudio();
        }
    }

    inputBar() {
        const val = (this.audio.currentTime / this.audio.duration) * 100;
        if (Math.floor(this.slider.value) - Math.floor(val) < 3 || (Math.floor(val) - Math.floor(this.slider.value) > -3)) {
            this.slider.value = val;
        } else {
            this.audio.currentTime = Math.floor((this.slider.value / 100) * this.audio.duration);
        }
    }



}