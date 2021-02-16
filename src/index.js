require("dotenv").config();
const axios = require("axios").default;

// console.log("url", process.env.DDNS_PROVIDER_URL);

const URL =
  process.env.DDNS_PROVIDER_URL + "?hostname=" + process.env.DDNS_HOSTNAME;

console.log(`URL: ${URL} \n`);

// function that makes the requst
const makeRequest = () => {
  let d = new Date();

  console.log(`[${d.toLocaleString()}] Updating...`);

  axios
    .get(URL, {
      auth: {
        username: process.env.DDNS_PROVIDER_USERNASME,
        password: process.env.DDNS_PROVIDER_PASSWORD,
      },
    })
    .then((res) => {
      console.log(`[${d.toLocaleString()}] Status: ${res.status}`);
      console.log(`[${d.toLocaleString()}] Data: ${res.data}`);
      console.log("\n");
    })
    .catch((err) => {
      console.log(`[${d.toLocaleString()}] Status: ${err.response.status}`);
      console.log(`[${d.toLocaleString()}] Data: ${err.response.data}`);
      console.log("\n");
    });
};

//make initial request
makeRequest();
// Start Interval
let interval = setInterval(makeRequest, 30 * 60 * 1000);
