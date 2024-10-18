let userClickedPattern = []
let gamePattern = []
let buttonColours = ["red", "blue", "green", "yellow"]

$("body").keydown(function(){
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

}

$(".btn").click(handler())

function handler(event){
    let userChosenColour = $(".btn").click(function(event){
        userChosenColour = event.target.id
        userClickedPattern.push(userChosenColour)
        animatePress(userChosenColour)
        playSound(userChosenColour)
        checkAnswer()
    })
}

function checkAnswer(){
    if(userClickedPattern[userClickedPattern.length - 1] === gamePattern[userClickedPattern.length - 1]){
        if(userClickedPattern.length === gamePattern.length){
        setTimeout(() => {
            nextSequence()
            userClickedPattern = []
        }, 1000)}
    } else {
        $("h1").text("Game Over, Press any key to restart")
        $("body").addClass("game-over")
        setTimeout(() => {
            $("body").removeClass("game-over"), 200
        })
        new Audio("sounds/wrong.mp3").play()
        startOver()
    }
}

function startOver(){
    level = 0
    gamePattern = []
    userClickedPattern = []
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
