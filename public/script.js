// api url
const api_url = "https://api.thingspeak.com/channels/2071246/feeds.json?api_key=34RRS9WJRTR5PJZU&results=1";
// masukan url sesuai dengan format <ChannelID>, <ReadAPIKeys> yang ada di Thingspeak, tanpa menggunakan < >

setInterval(() => {
  fetch(api_url)
    .then((hasil) => hasil.json())
    .then((res) => {
      var field = JSON.stringify(res.feeds[0]);
      var obj = JSON.parse(field);
      document.getElementById("Motion").innerHTML = obj.field2;
      if (obj.field2 == 1) {
        document.getElementById("Motion").innerHTML = "Motion Detected";
      }
      document.getElementById("Switch").innerHTML = obj.field1;
      if (obj.field1 == 1) {
        document.getElementById("Switch").innerHTML = "ON";
      }
    });
}, 1000);