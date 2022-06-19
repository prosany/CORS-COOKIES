var incomingData = document.querySelector("#incomingData");

const loadData = () => {
  fetch("http://localhost:3000/data")
    .then((response) => response.json())
    .then((data) => {
      incomingData.innerHTML = JSON.stringify(data);
    });
};

window.addEventListener("load", function () {
  incomingData.innerHTML = "Your Data is being loaded...";
});
