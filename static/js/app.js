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

