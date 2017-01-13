var game = {globals: {start: 0, time: 0},fps: 10};
var EnergyGen = ['Combustion','Fission','Fusion','Solar'], 	
    EnergyStor =['Batteries','Hydrogen','Capacitors','Flywheel'],
    Hull = ['Ferric','Aluminum','Ceramics','Plastics'],
    Shield = ['EM','Charged','Phasing','Deflecting'],
    MassWep = ['Bulletstorm','Railgun','Missile','Rocket'],	
    EnergyWep = ['Laser','Blaster','Torpedo','Ion Cannon'],	
    PlasmaWep = ['Beam','Blade','Blob','Rope'];
var shipparts = {EnergyGen: EnergyGen,EnergyStor: EnergyStor,Hull: Hull,Shield: Shield,MassWep: MassWep,EnergyWep: EnergyWep,PlasmaWep: PlasmaWep};
game.initialize = function() {
  this.context = document.getElementById("starfield").getContext("2d");
};
