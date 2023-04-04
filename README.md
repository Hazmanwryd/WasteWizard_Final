
## Run Locally

Clone the project

```bash
  git clone https://github.com/Arcfoz/ThingspeakApiWeb
```

Go to the project directory

```bash
  cd ThingspeakApiWeb
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm start
```

Go to browser

```bash
  localhost:8080
```
## Usage/Examples
Pada folder /public/script.js ubahlah api_url sesuai dengan Channel ID dan Read API Keys pada Thingspeak

```javascript
const api_url = "https://api.thingspeak.com/channels/<ChannelID>/feeds.json?api_key=<ReadAPIKeys>&results=1";
```

tanpa menggunakan  <>

