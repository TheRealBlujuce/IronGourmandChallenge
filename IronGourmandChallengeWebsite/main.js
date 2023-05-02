
function incrementDeaths() {
  var deathCounter = document.getElementById("death-counter");
  var currentDeaths = parseInt(deathCounter.textContent);
  deathCounter.textContent = "Deaths: " + currentDeaths + 1;
}
