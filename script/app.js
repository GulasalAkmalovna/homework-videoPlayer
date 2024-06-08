
const $currentAudioElement = document.querySelector("#audio-element");
const $preyBtn = document.querySelector("#prey-btn");
const $playBtn = document.querySelector("#play-btn");
const $nextBtn = document.querySelector("#next-btn");
const $playPhoto = document.querySelector(".photo");
const $playTitle = document.querySelector("#play-title");
const $playArtist = document.querySelector("#play-artist");


let $audioIndex = 0

let audio = [
    {
        src: "./audios/Loreen – Tattoo.mp3",
        title: "Tattoo",
        artist: "Loreen",
        image: "https://media.themoviedb.org/t/p/w500/qokjKh5reyA4FhRlB5E6DK2fPqt.jpg"
    },
    {
        src: "./audios/aiga-qarap.mp3",
        title: "Aiga qarap",
        artist: "Sadraddin",
        image: "https://is2-ssl.mzstatic.com/image/thumb/Music126/v4/5e/2b/c8/5e2bc833-d6cd-f096-cdbd-c47714747192/cover.jpg/1200x1200bb.jpg"
    },
    {
        src: "./audios/50 Cent, Olivia – Candy Shop.mp3",
        title: "Candy shop",
        artist: "50 Cent",
        image: "https://i.scdn.co/image/dd031b9c5d1b6eba4a691cd89c954255aae787f2"
    },
    {
        src: "./audios/Billie Eilish – everything i wanted.mp3",
        title: "Everything I wanted",
        artist: "Billie Ellish",
        image: "https://ca-times.brightspotcdn.com/dims4/default/8fa7359/2147483647/strip/true/crop/2000x2500+0+0/resize/2000x2500!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F79%2Ff0%2F3ffca92146909721a019d65e335c%2F1362470-env-billie-eilish-cover-photo-33.jpg"
    },
    {
        src: "./audios/Edward Maya, Vika Jigulina – Stereo Love.mp3",
        title: "Stereo Love.",
        artist: "Edward Maya, Vika Jigulina ",
        image: "https://i.scdn.co/image/ab67616d00001e02f898c1ebe4cb69f00cf23fc9"
    },
    {
        src: "./audios/Enrique Iglesias – Ring My Bells.mp3",
        title: "Ring My Bells",
        artist: "Enrique Iglesias",
        image: "https://www.hola.com/us/images/0288-19a1ed4ccaef-817ff898a3ee-1000/horizontal-1200/enrique-iglesias-pitbull-and-ricky-martin-in-concert-detroit-mi.jpg"
    },
    {
        src: "./audios/Modern Talking, Eric Singleton – Brother Louie Mix '98 Radio Edit.mp3",
        title: "Brother Louie Mix ",
        artist: "Modern Talking, Eric Singleton",
        image: "https://i.scdn.co/image/ab67616d0000b27308ce49cba06bf5e3cbd7d392"
    },
    {
        src: "./audios/Ray Charles – Hit the Road Jack.mp3",
        title: "Hit the Road Jack",
        artist: "Ray Charles",
        image: "https://i.scdn.co/image/ab67616d00001e029044f7586de11d7f7a111e0a"
    },

]

const rewiewAudio = () => {
    $currentAudioElement.src = audio[$audioIndex].src
    $playPhoto.src = audio[$audioIndex].image
    $playTitle.innerText = audio[$audioIndex].title
    $playArtist.innerText = audio[$audioIndex].artist 
}
rewiewAudio()


//  functions



let playing = false
//   audio quyadigan funksiya
const playAudio = () => {
   
    playing = !playing

    if (playing) {
        $currentAudioElement.play()
        $playBtn.firstElementChild.classList.add("pauseOrBlock")
        $playBtn.lastElementChild.classList.remove("pauseOrBlock")
    }else{
        $currentAudioElement.pause()
        $playBtn.firstElementChild.classList.remove("pauseOrBlock")
        $playBtn.lastElementChild.classList.add("pauseOrBlock")
    }

}


// audioni 1ta oldinga utkazish
const nextPlay = () =>{
    if ($audioIndex + 1 < audio.length) {
        $audioIndex++;
    }else{
        $audioIndex = 0;
    }
    rewiewAudio();
    playing = false;
    playAudio();
}

const preyPlayAudio = () =>{
    if ($audioIndex > 0) {
        $audioIndex--;
    }else{
        $audioIndex = audio.length
    }
    $audioIndex--;
    rewiewAudio();
    playing = false;
    playAudio();
}






//  event listener

//  $currentAudioElement.src = audio[$audioIndex].src
$playBtn.addEventListener("click", playAudio);
$nextBtn.addEventListener("click", nextPlay);
$preyBtn.addEventListener("click", preyPlayAudio)