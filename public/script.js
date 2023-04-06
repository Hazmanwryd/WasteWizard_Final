const api_url = "https://sgp1.blynk.cloud/external/api/get?token=pfBF6YDvzUjmSHQfZXm05yLloNFIZ5AJ&v4&v6&v7";

setInterval(() => {
fetch(api_url)
  .then((hasil) => hasil.json())
  .then((res) => {
    var field = JSON.stringify(res.v4);
    var obj = JSON.parse(field);
    document.getElementById("v4").innerHTML = obj;
  });
}, 1000);
