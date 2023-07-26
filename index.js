const songs = [
  {
    name: "Durga Mata",
    title: "Hey Kalratri Hey Kalyani",
    artist: "Jubin Nautiyal",
    audiosrc: "musics/durgamata.mp3",
    imgsrc: "images/durgamata.jpg",
  },
  {
    name: "voilin",
    title: "Bilionera",
    artist: "Otilia Bruma",
    audiosrc: "musics/voilin.mp3",
    imgsrc: "images/voilin.jpg",
  },
  {
    name: "tabla",
    title: "Honthon Se Choolo Tum",
    artist: "Jagjeet Singh",
    audiosrc: "musics/tabla.mp3",
    imgsrc: "images/tabla.jpg",
  },

  {
    name: "Aanand",
    title: "Ye tune kya kiya",
    artist: "Javed Bashir",
    audiosrc: "musics/Aanand.mp3",
    imgsrc: "images/Aanand.jpg",
  },
  {
    name: "dolls",
    title: "Tera Hone Laga Hoon ",
    artist: "Atif Aslam",
    audiosrc: "musics/dolls.mp3",
    imgsrc: "images/dolls.jpg",
  },
];

const playPause = document.getElementById("playPause");
const music = document.querySelector("audio");
const forward = document.getElementById("forward");
const backward = document.getElementById("backward");
const singerName = document.getElementById("singerName");
const songTitle = document.getElementById("songTitle");
const images = document.querySelector("img");
const progressline = document.querySelector(".progressline");
let progrees_line_dark = document.getElementsByClassName("progrees_line_dark");
let current_time = document.querySelector("#current_time p");
let updateTime = document.querySelector("#update_time p");
let isPlaying = true;
let count = 0;
const pause = () => {
  music.pause();
  playPause.classList.replace("fa-pause", "fa-play");
  isPlaying = true;
  images.classList.remove("rotation");
};

const play = () => {
  music.play();
  playPause.classList.replace("fa-play", "fa-pause");
  images.classList.add("rotation");
  isPlaying = false;
};

const musicPlayer = () => {
  isPlaying ? play() : pause();
};
const farwardMusic = () => {
  count = (count + 1) % songs.length;
  singerName.textContent = songs[count].artist;
  songTitle.textContent = songs[count].title;
  music.src = songs[count].audiosrc;
  images.src = songs[count].imgsrc;
  play();
};
const backwardmusic = () => {
  count = (count - 1 + songs.length) % songs.length;
  singerName.textContent = songs[count].name;
  songTitle.textContent = songs[count].title;
  music.src = songs[count].audiosrc;
  images.src = songs[count].imgsrc;
  play();
};
playPause.addEventListener("click", musicPlayer);
forward.addEventListener("click", farwardMusic);
backward.addEventListener("click", backwardmusic);
music.addEventListener("timeupdate", (e) => {
  const { currentTime, duration } = e.srcElement;
  let progressTime = (currentTime / duration) * 100;
  progrees_line_dark[0].style.width = `${progressTime}%`;
  const minuteend = Math.floor(duration / 60);
  const secend = Math.floor(duration % 60);
  const minutestart = Math.floor(currentTime / 60);
  const secstart = Math.floor(currentTime % 60);
  if (duration) {
    updateTime.textContent = `${minuteend}:${secend}`;
  }
  current_time.textContent = ` ${minutestart}:${secstart}`;

  if (secstart >= 0 && secstart <= 9) {
    current_time.textContent = `${minutestart}:0${secstart}`;
  }
  if (currentTime === duration) {
    farwardMusic();
  }
});
progressline.addEventListener("click", (e) => {
  const { duration } = music;
  const progressTouch = (e.offsetX / e.srcElement.clientWidth) * duration;
  music.currentTime = progressTouch;
  play();
});
