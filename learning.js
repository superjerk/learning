function getRandom(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
}
function procClick(click) {
       console.log(click.id);
       $('trigger').jqDropdown('hide',click.parentElement.parentElement.parentElement) 
}
function genstararray(canvas) {
    colorrange = [0,60,240];
    stars = 300;
    while (stars--) {
        var star = {x: Math.random() * canvas.offsetWidth,y: Math.random() * canvas.offsetHeight,radius: Math.random() * 1.2, hue: colorrange[getRandom(0,colorrange.length - 1)],sat: getRandom(50,100)}
        game.stararray.push(star);
   }       
}
//end of functions, start game
game.update = function() {
        if (game.globals.last == 0) {
                game.globals.last = Date.now();       
        }
        game.globals.time = Date.now();
        var timeskip = game.globals.time - game.globals.last;
        game.globals.last = game.globals.time;
        game.playerEnergy += game.playerGen * timeskip
        if (game.playerEnergy > 100000) {game.playerEnergy = 100000;}
};

game.draw = function() {
        this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height);
        //draw stars
        for (i=0;i<game.stararray.length;i++) {
                this.context.beginPath();
                this.context.arc(game.stararray[i].x, game.stararray[i].y, game.stararray[i].radius, 0, 360);
                this.context.fillStyle = "hsl(" + game.stararray[i].hue + ", " + game.stararray[i].sat + "%, 88%)";
                this.context.fill();
        }        
        //Player energy
        this.context.fillStyle = "White";
        this.context.font = "9px monospace";
        this.context.fillText("Energy: " + game.playerEnergy, 20, 20);
};

game.run = (function() {
        var loops = 0, skipTicks = 1000 / game.fps, nextGameTick = Date.now();

        return function() {
          loops = 0;

          while (Date.now() > nextGameTick) {
            game.update();
            nextGameTick += skipTicks;
            loops++;
          }
          game.draw();
        };//closes return function
      })();//closes function game.run

(function() {
        var onEachFrame;
        if (window.webkitRequestAnimationFrame) {
          onEachFrame = function(cb) {
            var _cb = function() { cb(); webkitRequestAnimationFrame(_cb); }
            _cb();
          };
        } else if (window.mozRequestAnimationFrame) {
          onEachFrame = function(cb) {
            var _cb = function() { cb(); mozRequestAnimationFrame(_cb); }
            _cb();
          };
        } else {
          onEachFrame = function(cb) {
            setInterval(cb, 1000 / 10);
          }
        }
        
        window.onEachFrame = onEachFrame;
      })();
//test