function setCanvas() {
    var canvas = document.getElementById("starfield");
    canvas.style.width='100%';
    canvas.style.height='100%';
    canvas.width  = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    context = canvas.getContext("2d");
    stars = 300;
    for (var i = 0; i < stars; i++) {
        x = Math.random() * canvas.offsetWidth;
        y = Math.random() * canvas.offsetHeight;
        context.fillStyle = "white";
        context.fillRect(x,y,1,1);
    }
}
window.onload = setCanvas;
