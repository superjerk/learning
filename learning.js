function codeAddress() {
    var canvas = document.getElementById("starfield"),
    context = canvas.getContext("2d"),
    stars = 200;
    for (var i = 0; i < stars; i++) {
        x = Math.random() * canvas.offsetWidth;
        y = Math.random() * canvas.offsetHeight;
        context.fillStyle = "white";
        context.fillRect(x,y,1,1);
    }
}
window.onload = codeAddress;
