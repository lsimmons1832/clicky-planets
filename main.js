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
]



function writeToDOM() {
	//planetHolderDiv.innerHTML = "Mars";

	var str = "";
	for (var i = 0; i < planets.length; i++) {
		planetHolderDiv.innerHTML += '<div class="planetName">' + planets[i].name + '</div>'; //u can remove all '' quotes and put tick marks on the end
		//JavaScript string templating E5 = planetHolderDiv.innerHTML += `<div class="planetName"> + ${planets[i].name} + </div>`
	}
}


button.addEventListener("click", writeToDOM);