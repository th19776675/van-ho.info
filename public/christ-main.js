console.log("JavaScript is working!")

let playBtn = document.querySelector(".play-btn")
console.log(playBtn)

let chrimma = document.querySelector(".chrimma")

playBtn.addEventListener("click", function() {
    console.log("Yes")
    chrimma.play()
})