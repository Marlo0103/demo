let dy = 0

function handleKeyPress(ev) {
    if (ev.code === "Space"){
    const player = document.querySelector("#player")
    player.setAttribute("cx", 100 * Math.random())
    player.setAttribute("cy", 100 * Math.random())
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
    let posY = parseInt(player.getAttribute("cy"))
    player.setAttribute("cy", posY+dy)
    //Loop forever
    window.requestAnimationFrame(gameloop);
}
gameloop()
window.onkeydown = handleKeyPress   