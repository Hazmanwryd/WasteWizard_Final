// baterai bar html?
const api_url = "https://api.thingspeak.com/channels/<ChannelID>/feeds.json?api_key=<ReadAPIKeys>&results=1";
// masukan url sesuai dengan format <ChannelID>, <ReadAPIKeys> yang ada di Thingspeak, tanpa menggunakan < >

setInterval(() => {
  fetch(api_url)
    .then((hasil) => hasil.json())
    .then((res) => {
      var field = JSON.stringify(res.feeds[0]);
      var obj = JSON.parse(field);
      document.getElementById("Switch").innerHTML = obj.field1;
      document.getElementById("Motion").innerHTML = obj.field2;
    });
}, 1000);
