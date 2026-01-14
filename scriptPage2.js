// replay button
const replayButton = document.querySelector(".replay");

replayButton.addEventListener("click", ()=>{
    window.location.href="index.html?reload=" + Date.now();
});