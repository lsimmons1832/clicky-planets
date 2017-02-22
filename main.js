var button = document.getElementById('showPlanets');
var planetHolderDiv = document.getElementById('planetHolder');

//var planets = ["mercury","venus","earth","mars","jupiter","saturn","uranus","neptune"]; 

var planets = [
{
	name: "Mercury",
	url: ""
},
{
	name: "Venus",
	url: ""
},
{
	name: "Earth",
	url: ""
},
{
	name: "Mars",
	url: ""
},
{
	name: "Jupiter",
	url: ""
},
{
	name: "Saturn",
	url: ""
},
{
	name: "Uranus",
	url: ""
},
{
	name: "Neptune",
	url: ""
},
];



function writeToDOM() {
	//planetHolderDiv.innerHTML = "Mars";

	
	for (var i = 0; i < planets.length; i++) {
		var newPlanet = "";
		 newPlanet += `<div class="planetName"> ${planets[i].name} </div>`; 
		 planetHolderDiv.innerHTML += newPlanet;
	}
}


button.addEventListener("click", writeToDOM);