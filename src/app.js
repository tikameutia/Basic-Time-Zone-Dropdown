function showLocalTime(event) {
  if (event.target.value.length > 0) {
    let LocalTime = moment()
      .tz(event.target.value)
      .format("dddd, MMMM D, YYYY h:mm A");
    alert(`It is ${LocalTime} in ${event.target.value}`);
  }
}

let countriesSelect = document.querySelector("#countries");
countriesSelect.addEventListener("change", showLocalTime);
