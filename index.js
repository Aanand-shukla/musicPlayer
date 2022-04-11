const music= document.querySelector("audio");
const playPause= document.getElementById("playPause");
const img = document.querySelector("img");
let isPlaying=false;
const title= document.getElementById("songTitle");
const artist= document.getElementById("singerName");
const next= document.getElementById("forward");
const pre= document.getElementById("backward");
const songs =[

{
    name:"durgamata",
 title:"Hey-Kalratri-Hey-Kalyani",
    artist:"Jubin Nautiyal",
},
{
    name:"voilin",
 title:"Bilionera",
    artist:"Otilia Bruma",
},
{
    name:"tabla",
 title:"Honthon Se Choolo Tum",
    artist:"Jagjeet Singh",
},

{
    name: "Aanand",
    title:"Ye tune kya kiya",
    artist:"Javed Bashir",
},
{
  name:"dolls",
   title:"Tera Hone Laga Hoon ",
    artist:"Atif Aslam",
},
]

const playMusic = ()=>{
    isPlaying=true;
    music.play();
    playPause.classList.replace("fa-play","fa-pause");
    img.classList.add("rotation");

}; 
const pauseMusic= ()=>{
     isPlaying=false;
    music.pause();
    playPause.classList.replace("fa-pause","fa-play");
    img.classList.remove("rotation");


};   
playPause.addEventListener("click",()=>{
    if(isPlaying){
        pauseMusic();
    }else{
        playMusic();
    }
}) 

const loadSong =(songs)=>{
title.textContent=songs.title;
artist.textContent=songs.artist;
music.src="musics/"+songs.name+".mp3";
img.src="images/"+songs.name+".jpg";
};
songIndex=0;
const nextSong=() =>{
    songIndex=(songIndex+1)%songs.length;
loadSong(songs[songIndex]);
playMusic();
}
const preSong=() =>{
    songIndex=(songIndex-1+songs.length)%songs.length;
loadSong(songs[songIndex]);
playMusic();
}
next.addEventListener("click",nextSong);
pre.addEventListener("click",preSong);
