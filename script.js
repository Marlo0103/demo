function handleKeyPress(ev) {
    if (ev.code === "Space"){
    const player = document.querySelector("#player")
    player.setAttribute("cx", 100 * Math.random())
    player.setAttribute("cy", 100 * Math.random())
}
} else if (ev.key === "r") {
    player.setAttribute("fill", "red")
} else if (ev.key ===) {
}

function gameloop(){
    const player = document.querySelector("#player")
    player.setAttribute("cy", 100 * Math.random())
    //Loop forever
    window.requestAnimationFrame(gameloop);
}
gameloop()
window.onkeydown = handleKeyPress   