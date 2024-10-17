let userClickedPattern = []
let gamePattern = []
let buttonColours = ["red", "blue", "green", "yellow"]

$(document).keydown(function(){
    nextSequence()
})

let level = 0

function nextSequence(){
    level++

    $("h1").text("Level " + level)
    
    let randomNumber = Math.floor(Math.random() * 4)
    
    let randomChosenColour = buttonColours[randomNumber]
    
    gamePattern.push(randomChosenColour)
    
    $(`#${randomChosenColour}`).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100)
    
    playSound(randomChosenColour)
    console.log(level)
}

$(".btn").click(handler())

function handler(event){
    let userChosenColour = $(".btn").click(function(event){
        userChosenColour = event.target.id
        userClickedPattern.push(userChosenColour)
        animatePress(userChosenColour)
        playSound(userChosenColour)
    })
}

function animatePress(currentColour){
    let animatedPress = $(`#${currentColour}`).addClass("pressed")
    setTimeout(() => {
        animatedPress.removeClass("pressed"), 100
    })
}

function playSound(name) {
    let noise = new Audio(`sounds/${name}.mp3`)
    noise.play()
}
