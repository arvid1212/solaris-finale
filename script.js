//select class id from document
const maxTemp = document.querySelector(".maxTemp");
const minTemp = document.querySelector(".minTemp");
const moons = document.querySelector(".moons");
const overlaywrapper = document.querySelector(".Overlay");
const container = document.querySelector(".container");
const Xbtn = document.querySelector("#xBtn");
const articleH1 = document.querySelector(".planetsDisplay h1");
const articleH2 = document.querySelector(".planetsDisplay h2");
const articleText = document.querySelector(".planetsDisplay p");
const circ = document.querySelector(".circ");
const sunDis = document.querySelector(".sunDis");
// select a planet id from the document
const mars = document.querySelector("#Mars");
const lovis = document.querySelector("#Lovis");
const saturnus = document.querySelector("#Saturnus");
const uranus = document.querySelector("#Uranus");
const neptunus = document.querySelector("#Neptunus");
const sun = document.querySelector("#Solis");
const mercurialis = document.querySelector("#Mercurialis");
const venus = document.querySelector("#Venus");
const tellus = document.querySelector("#Tellus");
// add the Celsius symbol
const tempC = " \u00B0" + "C";


//When you click on a planet
sun.addEventListener("click", () => getData("Solis"));
mercurialis.addEventListener("click", () => getData("Mercurialis"));
venus.addEventListener("click", () => getData("Venus"));
tellus.addEventListener("click", () => getData("Tellus"));
mars.addEventListener("click", () => getData("Mars"));
lovis.addEventListener("click", () => getData("Lovis"));
saturnus.addEventListener("click", () => getData("Saturnus"));
uranus.addEventListener("click", () => getData("Uranus"));
neptunus.addEventListener("click", () => getData("Neptunus"));

// add eventlistener to xBtn
  xBtn.addEventListener("click", () => {
   overlaywrapper .style.display = "none";
    container.style.display = "grid";
  sun.style.backgroundColor = "#FFD029";
  sun.style.boxShadow = "0px 0px 250px 0px #e6be2fb9";
});

// Fetch planet data 
async function getPlanet(planetId) {
  const response = await fetch("https://majazocom.github.io/Data/solaris.json");
  const data = await response.json();

  // return the matching data from the vector
  const planetInfo = data.find((planet) => planet.latinName === planetId);
  displayOverlay();
  displayPlanet(planetInfo);
  showMoon();
}
//Show and hide the overlay
function displayOverlay() {
  overlaywrapper.style.display = "flex";
  container.style.display = "none";
}
//show info about the planet
function displayPlanet(planet) {
  
  articleH1.innerText = planet.name; 
  articleH2.innerText = planet.latinName;
  articleText.innerText = planet.desc;
  circ.innerText = planet.circ + " KM";
  sunDis.innerText = planet.distance + " KM";
  maxTemp.innerText = planet.temp.day + tempC;
  minTemp.innerText = planet.temp.night + tempC;
 moons.innerText = planet.moons.join(", ");  
}

//shows the moon
function showMoon() {
  sun.style.backgroundColor = "#428ED4";
  sun.style.boxShadow =
    "rgb(66, 142, 212, 0.10) 0px 0px 0px 100px,  rgb(66, 142, 212, 0.06) 0px 0px 0px 50px";
}

