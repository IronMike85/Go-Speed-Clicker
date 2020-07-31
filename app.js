



//Set variables for global scope
let currentScore = document.getElementById("p2").innerHTML
let num = Number(currentScore)

let htmlScore = document.getElementById("highScore").innerHTML
let highScore = Number(htmlScore)




//Change the HTML content of the current click count
document.getElementById("clicker").addEventListener("click", function () {
    document.getElementById("p2").innerHTML = ++num
})


//Change the HTML content of the high score count
function tallyUp() {
    if (localStorage.getItem("bestScore") < num && highScore < num) {
        document.getElementById("highScore").innerHTML = num
        localStorage.setItem("bestScore", num)
    }
    else {
        document.getElementById("highScore").innerHTML = localStorage.getItem("bestScore")
    }
}
document.getElementById("clicker").addEventListener("click", tallyUp)


//Disable the button after 15 seconds
document.getElementById("clicker").addEventListener("click", function() {
    setTimeout(function() {document.getElementById("clicker").disabled = true}, 15000)
})
