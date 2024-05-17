const player = document.querySelector('.player'),
        playBtn = document.querySelector('.play'),
        prevBtn = document.querySelector('.prev'),
        nextBtn = document.querySelector('.next'),
        audio = document.querySelector('.audio'),
        progressContainer = document.querySelector('.progress_container'),
        progress = document.querySelector('.progress'),
        title = document.querySelector('.song'),
        cover = document.querySelector('.cover_img'),
        imgSrc = document.querySelector('.img_src')



function playSong() {
    player.classList.add('play')
    cover.classList.add('active')
    imgSrc.src = "./static/img/pause.svg"
    audio.play()
}
function pauseSong() {
    player.classList.remove('play')
    cover.classList.remove('active')
    imgSrc.src = "./static/img/play.svg"
    audio.pause()
}
playBtn.addEventListener('click', () => {
    const isPlaying = player.classList.contains('play')
    if (isPlaying) {
        pauseSong()
    } else {
        playSong()
    }
})

function updateProgress(e) {
    const {duration, currentTime} = e.srcElement
    const progressPercent = (currentTime / duration) * 100
//    console.log(duration)
//    console.log(currentTime)
//    console.log(progressPercent)
    progress.style.width = '${progressPercent}%'
}
audio.addEventListener('timeupdate', updateProgress)

function setProgress(e) {
    const width = this.clientWidth
    const clickX = e.offsetX
    const duration = audio.duration

    audio.currentTime = (clickX / width) * duration
    console.log(clickX)

}
progressContainer.addEventListener('click', setProgress)

let tg = window.Telegram.WebApp;

tg.expand();

