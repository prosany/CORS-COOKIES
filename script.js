var incomingData = document.querySelector("#incomingData");

const loadData = () => {
  fetch("https://cors-and-cookies.herokuapp.com/data", {
    // add with credentials: true to send cookies
    credentials: "include",
  })
    .then((response) => response.json())
    .then((data) => {
      incomingData.innerHTML = JSON.stringify(data);
    });
};

window.addEventListener("load", function () {
  incomingData.innerHTML = "Your Data is being loaded...";
});
