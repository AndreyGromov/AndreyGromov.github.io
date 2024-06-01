

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


// Плеер
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

const songItems = document.querySelectorAll('.songItem');
const radioItems = document.querySelectorAll('.radioItem');

const playerImg = document.getElementById('playerImg');
const playerTitle = document.getElementById('playerTitle');
const playerAudio = document.getElementById('playerAudio');

// Добавляем обработчик события 'click' для каждого элемента
songItems.forEach(item => {
    item.addEventListener('click', function() {
        var popupSong = document.getElementById('playerThis');
        popupSong.classList.toggle('show');
        const icon = this.getAttribute('data-iconSong');
        const name = this.getAttribute('data-nameSong');
        const fileSong = this.getAttribute('data-fileSong');

        coverMin.src = `/static/img/radioicon.svg`;
        playerImg.src = `/static/img/${icon}`;
        playerTitle.textContent = name;
        playerAudio.src = `/static/audio/${fileSong}`;
        playSong();

    });
});

// Добавляем обработчик события 'click' для каждого элемента
radioItems.forEach(item => {
    item.addEventListener('click', function() {
        var popupSong = document.getElementById('playerThis');
        popupSong.classList.toggle('show');
        const icon = this.getAttribute('data-iconRadio');
        const name = this.getAttribute('data-nameRadio');
        const address = this.getAttribute('data-addressRadio');

        coverMin.src = `/static/img/radioicon.svg`;
        playerImg.src = `/static/img/${icon}`;
        playerTitle.textContent = name;
        playerAudio.src = address;
        playSong();


    });
});

// Кнопки и их секции
document.addEventListener("DOMContentLoaded", function () {
    const selectionButtons = document.querySelectorAll(".selectionButton");
    const sections = document.querySelectorAll(".section");
    const sectionSelection = document.querySelectorAll(".sectionSelection");


    //фильтр
        selectionButtons.forEach(selectionButton => {
        selectionButton.addEventListener("click", () => {
            selectionButtons.forEach(btn => btn.classList.remove("activeSelect"));
            sectionSelection.forEach(section => section.classList.remove("active"));
            selectionButton.classList.add("activeSelect");
            const target = selectionButton.getAttribute("data-targetSl");
            document.getElementById(target).classList.add("active");
        });
    });



});

document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.player');
    const buttons = document.querySelectorAll('.selectionButton');
    let isDown = false;
    let startX;
    let scrollLeft;

    container.addEventListener('mousedown', (e) => {
        isDown = true;
        startX = e.pageX - container.offsetLeft;
        scrollLeft = container.scrollLeft;
    });

    container.addEventListener('mouseleave', () => {
        isDown = false;
    });

    container.addEventListener('mouseup', () => {
        isDown = false;
        snapToSection();
    });

    container.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - container.offsetLeft;
        const walk = (x - startX) * 2; //scroll-fast
        container.scrollLeft = scrollLeft - walk;
    });

    container.addEventListener('touchstart', (e) => {
        isDown = true;
        startX = e.touches[0].pageX - container.offsetLeft;
        scrollLeft = container.scrollLeft;
    });

    container.addEventListener('touchend', () => {
        isDown = false;
        snapToSection();
    });

    container.addEventListener('touchmove', (e) => {
        if (!isDown) return;
        const x = e.touches[0].pageX - container.offsetLeft;
        const walk = (x - startX) * 2; //scroll-fast
        container.scrollLeft = scrollLeft - walk;
    });

    function snapToSection() {
        const sections = document.querySelectorAll('.sectionSelection');
        const sectionWidth = sections[0].offsetWidth;
        const scrollPosition = container.scrollLeft;
        const index = Math.round(scrollPosition / sectionWidth);

        container.scrollTo({
            left: sectionWidth * index,
            behavior: 'smooth'
        });
        // Получение текущей активной секции
        const activeSection = sections[index];
        const activeSectionId = activeSection.id;

        // Обновление активного стиля кнопок
        buttons.forEach(button => {
            if (button.getAttribute('data-targetSl') === activeSectionId) {
                button.classList.add('activeSelect');
            } else {
                button.classList.remove('activeSelect');
            }
        });

        console.log("Current Section ID:", activeSectionId);
    }
    snapToSection();

    // Добавление обработчиков событий для кнопок
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const targetId = button.getAttribute('data-targetSl');
            const targetSection = document.getElementById(targetId);
            const sectionWidth = targetSection.offsetWidth;

            // Прокрутка до нужной секции
            container.scrollTo({
                left: sectionWidth * [...targetSection.parentNode.children].indexOf(targetSection),
                behavior: 'smooth'
            });

            // Обновление активного стиля кнопок
            buttons.forEach(btn => btn.classList.remove('activeSelect'));
            button.classList.add('activeSelect');
        });
    });
});
