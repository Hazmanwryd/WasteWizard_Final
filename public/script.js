//loading bar code?
const api_url = "https://api.thingspeak.com/channels/2071475/feeds.json?api_key=X85TVSZ5J1RFMEPX&results=1";
// masukan url sesuai dengan format <ChannelID>, <ReadAPIKeys> yang ada di Thingspeak, tanpa menggunakan < >

setInterval(() => {
  fetch(api_url)
    .then((hasil) => hasil.json())
    .then((res) => {
      var field = JSON.stringify(res.feeds[0]);
      var obj = JSON.parse(field);
      if (obj.field2 == 1) {
        document.getElementById("Motion").innerHTML = "Motion Detected";
      }
      if (obj.field1 >= 6000) {
        document.getElementById("Switch").innerHTML = "ON";
      }
      }
    );
}, 1000);