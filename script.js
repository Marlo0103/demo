let dy = 0

function handleKeyPress(ev) {
    if (ev.code === "Space"){
    const player = document.querySelector("#player")
   dy = -1
} else if (ev.key === "r") {
    player.setAttribute("fill", "red")
} else if (ev.key === "g") {
    player.setAttribute("fill", "green");
}
}

function gameloop(){
//update game status
dy = Math.min(dy + 0.05, 1)

    const player = document.querySelector("#player")
    let posY = parseFloat(player.getAttribute("cy"))
let r = parseInt(player.getAttribute("r"))
if (posY > 100 - r -dy ){
    dy = 0
}

    player.setAttribute("cy", posY+dy);
    //Loop forever
    window.requestAnimationFrame(gameloop);
}
gameloop()
window.onkeydown = handleKeyPress   