const player = document.querySelector('.player'),
        playBtn = document.querySelector('.play'),
        prevBtn = document.querySelector('.prev'),
        nextBtn = document.querySelector('.next'),
        audio = document.querySelector('.audio'),
        progressContainer = document.querySelector('.progress_container'),
        progress = document.querySelector('.progress'),
        title = document.querySelector('.song'),
        cover = document.querySelector('.cover_img'),
        coverMin = document.querySelector('.cover_imgMin'),
        imgSrc = document.querySelector('.img_src')



function playSong() {
    player.classList.add('play')
    cover.classList.add('active', 'playing')
    coverMin.classList.add('activeMin', 'playing')
    imgSrc.src = "./static/img/pause.svg"
    audio.play()
}
function pauseSong() {
    player.classList.remove('play')
    cover.classList.remove('playing')
    coverMin.classList.remove('playing')
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
    progress.style.width = `${progressPercent}%`
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


document.getElementById('closePopupPlayer').addEventListener('click', function() {

    var closeSong = document.getElementById('playerThis');
    closeSong.classList.remove('show')
});

document.getElementById('thissong').addEventListener('click', function() {

    var popupSong = document.getElementById('playerThis');
    popupSong.classList.toggle('show');
});

// Кнопки и их секции
document.addEventListener("DOMContentLoaded", function () {
    const sectionButtons = document.querySelectorAll(".sectionButton");
    const selectionButtons = document.querySelectorAll(".selectionButton");
    const sections = document.querySelectorAll(".section");
    const sectionSelection = document.querySelectorAll(".sectionSelection");

    sectionButtons.forEach(sectionButton => {
        sectionButton.addEventListener("click", () => {
            // Удаляем класс active у всех кнопок и секций
            sectionButtons.forEach(btn => btn.classList.remove("active"));
            sections.forEach(section => section.classList.remove("active"));
            // Добавляем класс active к текущей кнопке и соответствующей секции
            sectionButton.classList.add("active");
            const target = sectionButton.getAttribute("data-target");
            document.getElementById(target).classList.add("active");
        });
    });

    //фильтр
        selectionButtons.forEach(selectionButton => {
        selectionButton.addEventListener("click", () => {
            selectionButtons.forEach(btn => btn.classList.remove("activeSelect"));
            sectionSelection.forEach(section => section.classList.remove("active"));
            selectionButton.classList.add("activeSelect");
            const target = selectionButton.getAttribute("data-target");
            document.getElementById(target).classList.add("active");
        });
    });



});

let tg = window.Telegram.WebApp;

tg.expand();
