const minutesEl = document.querySelector('#minutes')
const secondsEl = document.querySelector('#seconds')
const millisecondsEl = document.querySelector('#milliseconds')
const btnStart = document.querySelector('#btnStart')
const btnPause = document.querySelector('#btnPause')
const btnResume = document.querySelector('#btnResume')
const btnReset = document.querySelector('#btnReset')

let interval;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let isPaused = false;

// EVentos

btnStart.addEventListener('click', startTimer)
btnPause.addEventListener('click', pauseTimer)
btnResume.addEventListener('click', resumeTimer)
btnReset.addEventListener('click', resetTimer)

    function startTimer() {
        interval = setInterval(() => {
            if(!isPaused) {
               milliseconds += 10;
               
               if(milliseconds === 1000) {
                seconds++;
                milliseconds = 0
               }
               if(seconds === 60) {
                minutes++
                seconds = 0
               }

               minutesEl.textContent = formatTime(minutes)
               secondsEl.textContent = formatTime(seconds)
               millisecondsEl.textContent = formatMilliseconds(milliseconds)
            }
        }, 10);

        btnStart.style.display = 'none';
        btnPause.style.display = 'block';
    }

    function pauseTimer() {
        isPaused = true
        btnPause.style.display = 'none';
        btnResume.style.display = 'block';
    }

    function resumeTimer() {
        isPaused = false
        btnPause.style.display = 'block';
        btnResume.style.display = 'none';
    }

    function resetTimer() {
        clearInterval(interval)
        minutos = 0
        seconds = 0
        milliseconds = 0

        minutesEl.textContent = "00"
        secondsEl.textContent = "00"
        millisecondsEl.textContent = "000"

        btnStart.style.display = "block"
        btnPause.style.display = "none"
        btnResume.style.display = "none"
    }





    function formatTime(time) {
        return time < 10 ? `0${time}` : time;
    }

    function formatMilliseconds(time) {
        return time < 100 ? `${time}`.padStart(3, "0") : time
    }
