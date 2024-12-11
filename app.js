const music = new Audio('audio/1.mp3');
// music.play();

const songs = [
    {
        id: 1,
        songName: `On My Way <br>
        <div class="subtitle">Alan Walker</div>`,
        poster: "img/1.jpg"
    },
    {
        id: 2,
        songName: `Alan Walker-Fade <br>
        <div class="subtitle">Alan Walker</div>`,
        poster: "img/2.jpg"
    },
    {
        id: 3,
        songName: `Cartoon On & On <br>
        <div class="subtitle">Daniel Levi</div>`,
        poster: "img/3.jpg"
    },
    {
        id: 4,
        songName: `Mortals <br>
        <div class="subtitle">Mortals</div>`,
        poster: "img/4.jpg"
    },
    {
        id: 5,
        songName: `Baarishein <br>
        <div class="subtitle">Atif Aslam</div>`,
        poster: "img/5.jpg"
    },
    {
        id: 6,
        songName: `Electronic Music <br>
        <div class="subtitle">Electronic</div>`,
        poster: "img/6.jpg"
    },
    {
        id: 7,
        songName: `Agar Tum Saath Ho <br>
        <div class="subtitle">Tamashaa</div>`,
        poster: "img/7.jpg"
    },
    {
        id: 8,
        songName: `Suna Hai  <br>
        <div class="subtitle">Naha Kakker</div>`,
        poster: "img/8.jpg"
    },
    {
        id: 9,
        songName: `Dilbar <br>
        <div class="subtitle">Satyatmeva Jayatej</div>`,
        poster: "img/9.jpg"
    },
    {
        id: 10,
        songName: `Duniya <br>
        <div class="subtitle">Luka Chuppi </div>`,
        poster: "img/10.jpg"
    },


    {
        id: 11,
        songName: `Gulabi Sadi <br>
        <div class="subtitle">Sanju Rathod</div>`,
        poster: "img/11.jpg"
    },
    {
        id: 12,
        songName: `Arjan Vailly <br>
        <div class="subtitle">Bhupinder Babbal</div>`,
        poster: "img/12.jpg"
    },
    {
        id: 13,
        songName: `Zingaat<br>
        <div class="subtitle">Ajay Atul</div>`,
        poster: "img/13.jpg"
    },
    {
        id: 14,
        songName: `Jhoome Jo Pathan <br>
        <div class="subtitle">Sukhwinder Singh</div>`,
        poster: "img/14.jpg"
    },
    {
        id: 15,
        songName: `Lutt Putt Gaya <br>
        <div class="subtitle">Arjit Singh</div>`,
        poster: "img/15.jpg"
    },
    {
        id: 16,
        songName: `Kahani Suno <br>
        <div class="subtitle">Kaifi Khalil</div>`,
        poster: "img/16.jpg"
    },
    {
        id: 17,
        songName: `Galti Se Mistake <br>
        <div class="subtitle">Arjit Singh</div>`,
        poster: "img/17.jpg"
    },
    {
        id: 18,
        songName: `O Maahi <br>
        <div class="subtitle">Arjit Singh</div>`,
        poster: "img/18.jpg"
    },
    {
        id: 19,
        songName: `Nacho Nacho <br>
        <div class="subtitle">Vishal Mishra</div>`,
        poster: "img/19.jpg"
    },
    {
        id: 20,
        songName: `Mahiya Jinna Sohna <br>
        <div class="subtitle">Darshan Raval</div>`,
        poster: "img/20.jpg"
    },
    {
        id: 21,
        songName: `Vaaste <br>
        <div class="subtitle">Dhvani Bhanushali</div>`,
        poster: "img/21.jpg"
    },
    {
        id: 22,
        songName: `Khairiyat <br>
        <div class="subtitle">Arjit Singh</div>`,
        poster: "img/22.jpg"
    },
    {
        id: 23,
        songName: `Raataan Lambiyan <br>
        <div class="subtitle">Jubin Nautiyal</div>`,
        poster: "img/23.jpg"
    },
    {
        id: 24,
        songName: `Apna Bana Le <br>
        <div class="subtitle">Arjit Singh</div>`,
        poster: "img/24.jpg"
    },
    {
        id: 25,
        songName: `Tere Vaaste <br>
        <div class="subtitle">Varun Jain</div>`,
        poster: "img/25.jpg"
    },
    {
        id: 26,
        songName: `Kesariya <br>
        <div class="subtitle">Arjit Singh</div>`,
        poster: "img/26.jpg"
    },
    {
        id: 27,
        songName: `Lut Gaya <br>
        <div class="subtitle">Jubin Nautiyal</div>`,
        poster: "img/27.jpg"
    },
    {
        id: 28,
        songName: `Pasoori <br>
        <div class="subtitle">Ali Sethi</div>`,
        poster: "img/28.jpg"
    },
    {
        id: 29,
        songName: `Heeriye <br>
        <div class="subtitle">Arjit Singh</div>`,
        poster: "img/29.jpg"
    },
    {
        id: 30,
        songName: `Aankh Marey <br>
        <div class="subtitle">Kumar Sanu</div>`,
        poster: "img/30.jpg"
    }
    
]

Array.from(document.getElementsByClassName('songitem')).forEach((e, i) =>{
    e.getElementsByTagName('img')[0].src = songs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;

});

let masterplay = document.getElementById('masterplay');
let wave = document.getElementById('wave');


masterplay.addEventListener('click', ()=>{
    if (music.paused || music.currentTime <= 0) {
        music.play();
        wave.classList.add('active1');
        masterplay.classList.remove('class="material-symbols-outlined">play_arrow');
        masterplay.classList.add('class="material-symbols-outlined">pause');
    } else {
        music.pause();
        wave.classList.remove('active1');
        masterplay.classList.add('class="material-symbols-outlined">play_arrow');
        masterplay.classList.remove('class="material-symbols-outlined">pause');
    }
});


let index = 0;
let poster_master_play = document.getElementById('poster_master_play');
let title = document.getElementById('title');
Array.from(document.getElementsByClassName("material-symbols-outlined")).forEach((e)=>{
    e.addEventListener('click', (el)=>{
        let index = el.target.id;
        music.src = `audio/${index}.mp3`;
        poster_master_play.src = `img/${index}.jpg`
        music.play();
        masterplay.classList.remove('class="material-symbols-outlined">play_arrow');
        masterplay.classList.add('class="material-symbols-outlined">pause');
        wave.classList.add('active1');

        let songTitles = songs.filter((els) => {
            returnels.id == index;
        });

        songTitles.forEach(elss => {
            let {songName} = elss;
            title.innerHTML = songName;
        })
    });
})


let pop_song_left = document.getElementById('pop_song_left');
let pop_song_right = document.getElementById('pop_song_right');
let pop_song = document.getElementsByClassName('pop_song')[0];


pop_song_right.addEventListener('click', ()=>{
    pop_song.scrollLeft += 330;
})
pop_song_left.addEventListener('click', ()=>{
    pop_song.scrollLeft -= 330;
})

let pop_art_left = document.getElementById('pop_art_left');
let pop_art_right = document.getElementById('pop_art_right');
let Artists_bx= document.getElementsByClassName('Artists_bx')[0];


pop_art_right.addEventListener('click', ()=>{
    Artists_bx.scrollLeft += 330;
})
pop_art_left.addEventListener('click', ()=>{
    Artists_bx.scrollLeft -= 330;
})