const player = document.querySelector('.player'),
        playBtn = document.querySelector('.play'),
        playBtnMini = document.querySelector('.playMini'),
        prevBtn = document.querySelector('.prev'),
        nextBtn = document.querySelector('.next'),
        audio = document.querySelector('.audio'),
        progressContainer = document.querySelector('.progress_container'),
        progress = document.querySelector('.progress'),
        title = document.querySelector('.song'),
        cover = document.querySelector('.cover_img'),
        coverMin = document.querySelector('.cover_imgMin'),
        imgSrc = document.querySelector('.img_src')

const songsArrayRecent = [];
const songsArrayUserSong = [];
var songId = 0;
// Плеер
function playSong() {
    player.classList.add('play')
    cover.classList.add('active', 'playing')
    coverMin.classList.add('activeMin', 'playing')
    imgSrc.src = "./static/img/imgFunc/pauseMini.svg"
    imgMiniPlayer.src = "./static/img/imgFunc/pauseMini.svg"
    audio.play()
    RecentSong();

}

function pauseSong() {
    player.classList.remove('play')
    cover.classList.remove('playing')
    coverMin.classList.remove('playing')
    imgSrc.src = "./static/img/imgFunc/playMini.svg"
    imgMiniPlayer.src = "./static/img/imgFunc/playMini.svg"
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
playBtnMini.addEventListener('click', () => {
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



//Мини плеер вызвать

const songItems = document.querySelectorAll('.song-item');
const radioItems = document.querySelectorAll('.songRadio-item');
playSongClick = document.querySelectorAll('.playSongClick')
dropdownClicks = document.querySelectorAll('.dropdownClick')

const playerImg = document.getElementById('playerImg');
const playerTitle = document.getElementById('playerTitle');
const playerAudio = document.getElementById('playerAudio');
const miniPlayer = document.getElementById('song-itemMiniPlayer');
const miniPlayerTup = document.getElementById('song-itemMiniPlayerTup');
const playImgMini = document.getElementById('imgMiniPlayer');
var miniPlayerTitle = document.querySelector('.song-titleMiniPlayer');
var miniPlayerAuthor = document.querySelector('.song-authorMiniPlayer');
addSongBtn = document.querySelector('.addSong');
shareSongBtn = document.querySelector('.shareSong');
downloadSongBtn = document.querySelector('.downloadSong');
backSongBtn = document.querySelector('.backSong');
imgAdd = document.querySelector('.dropimgAdd');
imgShar = document.querySelector('.dropimgShar');
imgDown = document.querySelector('.dropimgDown');
imgBack = document.querySelector('.dropimgBack');

 dropdownClicks.forEach(dropdownClick => {
    dropdownClick.addEventListener('click', function() {
        addSongBtn.classList.add('showdown');
        shareSongBtn.classList.add('showdown');
        downloadSongBtn.classList.add('showdown');
        backSongBtn.classList.add('showdown');
        imgAdd.classList.add('showdown');
        imgShar.classList.add('showdown');
        imgDown.classList.add('showdown');
        imgBack.classList.add('showdown');
        idSongDown = this.getAttribute('data-idOption');
        nameSongDown = this.getAttribute('data-nameOption');
        add.textContent = idSongDown;
        nameOption.textContent = nameSongDown;

    });
});
backSongBtn.addEventListener('click', function() {
        addSongBtn.classList.remove('showdown');
        shareSongBtn.classList.remove('showdown');
        downloadSongBtn.classList.remove('showdown');
        backSongBtn.classList.remove('showdown');
        imgAdd.classList.remove('showdown');
        imgShar.classList.remove('showdown');
        imgDown.classList.remove('showdown');
        imgBack.classList.remove('showdown');

    });
addSongBtn.addEventListener('click', function() {
        console.log('обавление');
        AddSong();
    });

document.getElementById('miniClose').addEventListener('click', function() {
    miniPlayer.classList.remove('expanded');
    miniPlayerTitle.classList.remove('expanded');
    miniPlayerAuthor.classList.remove('expanded');
    pauseSong();
    audio.currentTime = 0;
});


document.addEventListener('DOMContentLoaded', () => {



 playSongClick.forEach(expandButton => {
        expandButton.addEventListener('click', function() {

            console.log(songId);
            var popupSong = document.getElementById('playerThis');
            const icon = this.getAttribute('data-iconSong');
            const idSong = this.getAttribute('data-idSong');
            const name = this.getAttribute('data-nameSong');
            const author = this.getAttribute('data-authorSong');
            const fileSong = this.getAttribute('data-fileSong');
            const chapterItem = this.getAttribute('data-chapter');
            const index = this.value;

            miniPlayer.classList.add('expanded');
            miniPlayerTitle.classList.add('expanded');
            miniPlayerAuthor.classList.add('expanded');
            miniPlayerTitle.textContent = name;
            miniPlayerAuthor.textContent = author;
            miniPlayerFileName.textContent = fileSong;
            songId = idSong;
            console.log(songId);

        if (fileName.textContent == fileSong) {
            console.log('1');
            playSong();
        } else {
            console.log(fileName.textContent);
                    coverMin.src = `/static/img/imgFunc/radioicon.svg`;
                    playerImg.src = `/static/img/${icon}`;
                    playerTitle.textContent = name;
                    fileName.textContent = fileSong;
                    if (chapterItem == 'NewSong' || chapterItem == 'ForYou' || chapterItem == 'MyTrecs' || chapterItem == 'RecentSong') {
                        playerAudio.src = `/static/audio/${fileSong}`;
                    } else if (chapterItem == 'Radio' || chapterItem == 'MyRadio') {
                        playerAudio.src = fileSong;
                    }
                    id.textContent = idSong;
                    schetchik.textContent = index;
                    chapter.textContent = chapterItem;
                    file.textContent = fileSong;
                    playerAudio.value = index;
                    playSong();


        }
        });
    });
});

function RecentSong() {
    songsArrayRecent.push(id.textContent);
            console.log(songsArrayRecent);
            const recentSong = document.querySelector('.recentSong' + id.textContent);
            // Проходим по каждому элементу
                // Проверяем, есть ли idSong в массиве validSongIds
                if (!songsArrayRecent.includes(id.textContent)) {
                    // Если нет, скрываем элемент
                    recentSong.classList.add('hidden');
                }else{
                    recentSong.classList.remove('hidden');
                }
}
function AddSong(){
    songsArrayUserSong.push(add.textContent);
            console.log(songsArrayUserSong);
            const userSong = document.querySelector('.userSong' + add.textContent);
            console.log(userSong);
            // Проходим по каждому элементу
                // Проверяем, есть ли idSong в массиве validSongIds
                if (!songsArrayUserSong.includes(add.textContent)) {
                    // Если нет, скрываем элемент
                    userSong.classList.add('hidden');
                }else{
                    userSong.classList.remove('hidden');
                }
}

function NextSong() {

                let schetItem = document.querySelector('.songItem' + chapter.textContent + schetchik.textContent);
                if (schetItem) {
    // Если элемент найден
    console.log('Элемент найден:', schetItem);
    // schetItem остается с тем же значением
} else {
    // Если элемент не найден
    console.log('Элемент не найден');
    // Присваиваем другое значение, например, null или какой-то другой элемент
    schetchik.textContent = '1';
    schetItem = document.querySelector('.songItem' + chapter.textContent + schetchik.textContent);
}

                const iconSchet = schetItem.getAttribute('data-iconSong');
                const nameSchet = schetItem.getAttribute('data-nameSong');
                const authorSchet = schetItem.getAttribute('data-authorSong');
                const fileSongSchet = schetItem.getAttribute('data-fileSong');
                const chapterItemNS = schetItem.getAttribute('data-chapter');
                const idSong = schetItem.getAttribute('data-idSong');

                miniPlayer.classList.add('expanded');
                miniPlayerTitle.classList.add('expanded');
                miniPlayerAuthor.classList.add('expanded');
                miniPlayerTitle.textContent = nameSchet;
                miniPlayerAuthor.textContent = authorSchet;
                miniPlayerFileName.textContent = fileSongSchet;

                coverMin.src = `/static/img/imgFunc/radioicon.svg`;
                    playerImg.src = `/static/img/${iconSchet}`;
                    playerTitle.textContent = nameSchet;
                    fileName.textContent = fileSongSchet;
                    id.textContent = idSong;
                    if (chapterItemNS == 'NewSong' || chapterItemNS == 'ForYou' || chapterItemNS == 'MyTrecs' || chapterItemNS == 'RecentSong') {
                        playerAudio.src = `/static/audio/${fileSongSchet}`;
                    } else if (chapterItemNS == 'Radio' || chapterItemNS == 'MyRadio') {
                        playerAudio.src = fileSongSchet;
                    }

                    playSong();
}

document.addEventListener('DOMContentLoaded', (event) => {
            const audioPlayer = document.getElementById('playerAudio');
            const nextSongBtn = document.getElementById('nextSongBtn');
            const prevSongBtn = document.getElementById('prevSongBtn');

            audioPlayer.addEventListener('ended', function() {
            let sum = parseInt(schetchik.textContent, 10) + 1;
                let schetNext = sum.toString();
                schetchik.textContent = schetNext;
            NextSong();
            });
            nextBtn.addEventListener('click', function() {
            let sum = parseInt(schetchik.textContent, 10) + 1;
                let schetNext = sum.toString();
                schetchik.textContent = schetNext;
            NextSong();
            });
            prevBtn.addEventListener('click', function() {
            let sub = parseInt(schetchik.textContent, 10) - 1;
                let schetPrev = sub.toString();
                schetchik.textContent = schetPrev;
            NextSong();
            });
        });



// Песня клик

    miniPlayerTup.addEventListener('click', function() {
        var popupSong = document.getElementById('playerThis');

        popupSong.classList.toggle('show');

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

//Для свайпа секций
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
//Поиск
