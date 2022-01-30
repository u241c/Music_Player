const image = document.querySelector('img');
const title = document.getElementById('title');
const artist = document.getElementById('artist');
const music = document.querySelector('audio');
const prevBtn = document.getElementById('prev');
const playBtn = document.getElementById('play');
const nextBtn = document.getElementById('next');

//music
const songs = [
  {  
    name: 'jacinto-1',
    displayName: 'Electric Chill Machine',
    artist: 'Jacinto Design',
  }, 
  {  
    name: 'jacinto-2',
    displayName: 'Seven Nation Army (Remix)',
    artist: 'Jacinto Design',
  },  
  {  
    name: 'jacinto-3',
    displayName: 'Goodnight, Disco Queen',
    artist: 'Metric/Jacinto Design',
  }, 
  {  
    name: 'metric-1',
    displayName: 'Front Row (Remix)',
    artist: 'Jacinto Design',
  },    
];

// Check if Playing
let isPlaying = false;

//Play
function playSong(){
   isPlaying = true; 
   // const music
   playBtn.classList.replace('fa-play', 'fa-pause');
   playBtn.setAttribute('title', 'Pause');
   music.play();
}

//Pause
function pauseSong(){
    isPlaying = false;
    // const music
    playBtn.classList.replace('fa-pause', 'fa-play');
    playBtn.setAttribute('title', 'Play');
    music.pause();
 }

 // Play or Pause Event Listener
 playBtn.addEventListener('click', () => (isPlaying ? pauseSong() : playSong()));

 // Update DOM
 function loadSong(song) {
     title.textContent = song.displayName;
     artist.textContent = song.artist;
     music.src = `music/${song.name}.mp3`;
     image.src = `img/${song.name}.jpg`;
 }

 // On Load - Select First Song
 loadSong(songs[3]);