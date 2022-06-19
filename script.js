var incomingData = document.querySelector("#incomingData");

const loadData = () => {
  fetch("https://cors-and-cookies.herokuapp.com/data")
    .then((response) => response.json())
    .then((data) => {
      incomingData.innerHTML = JSON.stringify(data);
    });
};

window.addEventListener("load", function () {
  incomingData.innerHTML = "Your Data is being loaded...";
});
