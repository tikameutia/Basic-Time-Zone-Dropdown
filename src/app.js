function showLocalTime(event) {
  if (event.target.value.length > 0) {
    if (event.target.value === "paris") {
      let parisLocalTime = moment()
        .tz("Europe/Paris")
        .format("dddd, MMMM D, YYYY h:mm A");
      alert(`It is ${parisLocalTime} in Europe/Paris`);
    }
    if (event.target.value === "tokyo") {
      let tokyoLocalTime = moment()
        .tz("Asia/Tokyo")
        .format("dddd, MMMM D, YYYY h:mm A");
      alert(`It is ${tokyoLocalTime} in Asia/Tokyo`);
    }
    if (event.target.value === "sydney") {
      let sydneyLocalTime = moment()
        .tz("Australia/Sydney")
        .format("dddd, MMMM D, YYYY h:mm A");
      alert(`It is ${sydneyLocalTime} in Australia, Sydney`);
    }
  }
}

let countriesSelect = document.querySelector("#countries");
countriesSelect.addEventListener("change", showLocalTime);
