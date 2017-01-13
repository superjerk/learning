var game = {globals: {start: 0,time: 0,last: 0},fps: 20,playerEnergy: 0, playerGen: 1};
var EnergyGen = ['Combustion','Fission','Fusion','Solar'], 	
    EnergyStor =['Batteries','Hydrogen','Capacitors','Flywheel'],
    Hull = ['Ferric','Aluminum','Ceramics','Plastics'],
    Shield = ['EM','Charged','Phasing','Deflecting'],
    MassWep = ['Bulletstorm','Railgun','Missile','Rocket'],	
    EnergyWep = ['Laser','Blaster','Torpedo','Ion Cannon'],	
    PlasmaWep = ['Beam','Blade','Blob','Rope'];
var shipparts = {EnergyGen: EnergyGen,EnergyStor: EnergyStor,Hull: Hull,Shield: Shield,MassWep: MassWep,EnergyWep: EnergyWep,PlasmaWep: PlasmaWep};
game.stararray = [];
game.initialize = function() {
    
    //setup canvas
    var canvas = document.getElementById("starfield");
    canvas.style.width='100%';
    canvas.style.height='100%';
    canvas.width  = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    this.context = canvas.getContext("2d");
    
    //build star array
    genstararray(canvas);
    
    //create buttons and dropdowns
    Object.keys(shipparts).forEach(function(key) {
        document.body.insertAdjacentHTML('beforeend','<div id="' + key + '-jqdd" class="jq-dropdown jq-dropdown-tip"><ul class="jq-dropdown-menu"><li><a href="#" id="' + shipparts[key][0] +'">' + shipparts[key][0] + '</a></li><li><a href="#" id="' + shipparts[key][1] +'">' + shipparts[key][1] + '</a></li><li><a href="#" id="' + shipparts[key][2] +'">' + shipparts[key][2] + '</a></li><li><a href="#" id="' + shipparts[key][3] +'">' + shipparts[key][3] + '</a></li></ul></div>');            
        $('#' + shipparts[key][0]).click( function(e) {e.preventDefault(); procClick(this); return false; } );
        $('#' + shipparts[key][1]).click( function(e) {e.preventDefault(); procClick(this); return false; } );
        $('#' + shipparts[key][2]).click( function(e) {e.preventDefault(); procClick(this); return false; } );
        $('#' + shipparts[key][3]).click( function(e) {e.preventDefault(); procClick(this); return false; } );
        document.getElementById("shipsheet").insertAdjacentHTML('beforeend','<div id="' + key + '" class="dd" data-jq-dropdown="#' + key + '-jqdd">' + key + '</div>');
    });
    
};
