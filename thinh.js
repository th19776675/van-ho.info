console.log("YES")

let thinhBtn = document.querySelector(".thinh")

thinhBtn.addEventListener("click", function() {
    console.log("Click")
    window.location.replace("/thinh.html");
})

let portBtn = document.querySelector(".portfolio")
let payBtn = document.querySelector(".payroll")
let conBtn = document.querySelector(".contact")
let curBtn = document.querySelector(".current")

let meSec = document.querySelector("#me-sec")
let portSec = document.querySelector("#port-sec")
let paySec = document.querySelector("#pay-sec")
let contactSec = document.querySelector("#contact-sec")
let currentSec = document.querySelector("#current-sec")

console.log(portBtn)
console.log(payBtn)
console.log(conBtn)
console.log(curBtn)

portBtn.addEventListener("click", function(){
    console.log("Click")
    portSec.classList.remove("hide")
    meSec.classList.add("hide")
    paySec.classList.add("hide")
    contactSec.classList.add("hide")
    currentSec.classList.add("hide")
})

payBtn.addEventListener("click", function(){
    console.log("Click")
    portSec.classList.add("hide")
    meSec.classList.add("hide")
    paySec.classList.remove("hide")
    contactSec.classList.add("hide")
    currentSec.classList.add("hide")
})

conBtn.addEventListener("click", function(){
    console.log("Click")
    portSec.classList.add("hide")
    meSec.classList.add("hide")
    paySec.classList.add("hide")
    contactSec.classList.remove("hide")
    currentSec.classList.add("hide")
})

curBtn.addEventListener("click", function(){
    console.log("Click")
    portSec.classList.add("hide")
    meSec.classList.add("hide")
    paySec.classList.add("hide")
    contactSec.classList.add("hide")
    currentSec.classList.remove("hide")
})