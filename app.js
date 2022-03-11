var minutes = 00;
var seconds = 00;
var intervals;

var appendMinutes = document.getElementById('minutes');
var appendSeconds = document.getElementById('seconds');

var startButton = document.getElementById('startButton');
var stopButton = document.getElementById('stopButton');
var resetButton = document.getElementById('resetButton');

startButton.addEventListener('click', function () {
    clearInterval(intervals);
    intervals = setInterval(startTimer, 10);
});

stopButton.addEventListener('click', function () {
    clearInterval(intervals);
})

resetButton.addEventListener('click', function () {
    clearInterval(intervals);
    minutes = '00';
    seconds = '00';
    appendMinutes.innerHTML = minutes;
    appendSeconds.innerHTML = seconds;
})

function startTimer() {
    seconds++;
    if (seconds < 9) {
        appendSeconds.innerHTML = '0' + seconds;
    }
    if ( seconds > 9) {
        appendSeconds.innerHTML = seconds;
    }
    if ( seconds > 60) {
        minutes++;
        appendMinutes.innerHTML = '0' + minutes;
        seconds=0;
        appendSeconds.innerHTML = '0' + seconds;
    }
    if ( minutes > 9) {
        appendMinutes.innerHTML = minutes;
    }
}