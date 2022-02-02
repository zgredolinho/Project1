const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.navigation');

const handleClick = () => {
  hamburger.classList.toggle('hamburger--active');
  nav.classList.toggle('navigation--active');
}

hamburger.addEventListener('click', handleClick);



const citiesByState = {
  Frondend: ["budowanie stron internetowych", "obsługa baz danych", "tworzenie layout’ów"],
  Psychologia: ["Nauka wywierania wpływu", "Prowadzenie negocjacji", "Negocjacje międzynarodowe"],
  Marketing_internetowy: ["pozycjonowanie", "per for click"],
  UXandUI: ["Tworzenie aplikacji", "Badania UX", "Badania UI"]
}

function makeSubmenu(value) {
  if (value.length == 0) document.getElementById("citySelect").innerHTML = "<option></option>";

  else {
    var citiesOptions = "";
    for (cityId in citiesByState[value]) {
      citiesOptions += "<option>" + citiesByState[value][cityId] + "</option>";
    }
    document.getElementById("citySelect").innerHTML = citiesOptions;
  }
}


function displaySelected() {
  var country = document.getElementById("countrySelect").value;
  var city = document.getElementById("citySelect").value;
  wynik.textContent = ("Wybrano: " + country + " ,Usługa: " + city);

}
show.addEventListener("click", displaySelected);

function resetSelection() {
  var country = document.getElementById("countrySelect").selectedIndex = 0;
  var city = document.getElementById("citySelect").selectedIndex = 0;
  wynik.textContent = ("" + "");

}
reset.addEventListener("click", resetSelection);



var neono = document.getElementById("neono");
neono.addEventListener("click", function () {
  if (this.textContent == "WŁĄCZ") {
    this.textContent = "WYŁĄCZ";
    console.log("działa");
  } else {
    this.textContent = "WŁĄCZ";
  }
  const letters = document.getElementsByClassName("neon")[0].querySelector("ul").querySelectorAll("li");
  for (let i = 0; letters.length > i; i++) {
    letters[i].classList.toggle("off");
  }
});
