const dino = document.getElementById("dino")
const cactus = document.getElementById('cactus')
const OVER = document.getElementById('hahka')
let isStop = false
const audio = document.getElementById("audio")
document.addEventListener('keydown', function(event) {
if (event.keyCode == 32 && isStop === false) {
    jump()
cactus.classList.add("move")

audio.play()
}
   
})

function jump () {
    if (dino.classList != 'jump') {
        dino.classList.add('jump')
    }
    setTimeout(function() {
        dino.classList.remove('jump')
}, 300)
 }

let isAlive = setInterval( function () {
    let dinotop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"))
    let cactusleft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"))

    if (cactusleft < 50 && cactusleft > 0 && dinotop >= 140) {
      //  alert("GAME OVER!!")
      audio.pause()
      OVER.classList.add('hidden')
      cactus.classList.remove("move")
      isStop = true
      setTimeout(function() { 
        OVER.classList.remove('hidden')
        isStop = false
}, 3000)
    }
}, 10)