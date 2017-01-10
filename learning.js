function getRandom(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
function setCanvas() {
    var canvas = document.getElementById("starfield");
    canvas.style.width='100%';
    canvas.style.height='100%';
    canvas.width  = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    context = canvas.getContext("2d");
    stars = 300;
    colorrange = [0,60,240];
    for (var i = 0; i < stars; i++) {
        var x = Math.random() * canvas.offsetWidth;
        y = Math.random() * canvas.offsetHeight,
        radius = Math.random() * 1.2,
        hue = colorrange[getRandom(0,colorrange.length - 1)],
        sat = getRandom(50,100);
        context.beginPath();
        context.arc(x, y, radius, 0, 360);
        context.fillStyle = "hsl(" + hue + ", " + sat + "%, 88%)";
        context.fill();
    }
}
window.onload = setCanvas;
