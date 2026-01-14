// replay button
const replayButton = document.querySelector(".replay");

replayButton.addEventListener("click", ()=>{
    window.history.back();
});