function showLocalTime(event) {
  if (event.target.value.length > 0) {
    alert("this is the local time now");
  }
}

let countriesSelect = document.querySelector("#countries");
countriesSelect.addEventListener("change", showLocalTime);
