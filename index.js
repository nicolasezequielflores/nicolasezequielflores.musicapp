var audio = document.getElementById('audio');
var btnPlay  = document.getElementById('btnPlay');
var btnPause  = document.getElementById('btnPause');
var progressBar = document.querySelector(".progress");
var time = document.querySelector(".time");
var progressContainer = document.querySelector(".progress-bar");

function play(){
    audio.play();
    btnPlay.classList.add('hidden');
    btnPause.classList.add('tamReal');  
    btnPause.classList.remove('hidden');
}

function pause(){
    audio.pause();
    btnPause.classList.add('hidden');
    btnPlay.classList.remove('hidden');
}

audio.addEventListener("timeupdate", function() {
    var progress = audio.currentTime / audio.duration;
    progressBar.style.width = progress * 100 + "%";
});



audio.addEventListener("timeupdate", function() {
var progress = audio.currentTime / audio.duration;
progressBar.style.width = progress * 100 + "%";
var minutes = Math.floor(audio.currentTime / 60);
var seconds = Math.floor(audio.currentTime % 60);
time.innerHTML = minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
});

progressContainer.addEventListener("click", function(event) {
    var clickPosition = event.pageX - progressContainer.offsetLeft;
    var width = progressContainer.offsetWidth;
    var duration = audio.duration;

    var newPosition = clickPosition / width * duration;
    audio.currentTime = newPosition;

    progressBar.style.width = clickPosition / width * 100 + "%";

    var minutes = Math.floor(audio.currentTime / 60);
    var seconds = Math.floor(audio.currentTime % 60);
    time.innerHTML = minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
});