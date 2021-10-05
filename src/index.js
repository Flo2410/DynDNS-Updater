require("dotenv").config();
const { get } = require("https");
const { URL } = require("url");

// console.log("url", process.env.DDNS_PROVIDER_URL);

const REQ_URL = process.env.DDNS_PROVIDER_URL + "?hostname=" + process.env.DDNS_HOSTNAME;

console.log(`URL: ${REQ_URL} \n`);

// function that makes the requst
const makeRequest = () => {
  let d = new Date();

  console.log(`[${d.toLocaleString()}] Updating...`);

  const url = new URL(REQ_URL);

  const options = {
    hostname: url.hostname,
    path: url.path,
    auth: process.env.DDNS_PROVIDER_USERNASME + ":" + process.env.DDNS_PROVIDER_PASSWORD,
  };

  get(options, (res) => {
    console.log(`[${d.toLocaleString()}] Status: ${res.statusCode}`);
    console.log(`[${d.toLocaleString()}] Message: ${res.statusMessage}`);
    console.log("\n");
  }).on("error", (err) => {
    console.log(`[${d.toLocaleString()}] Name: ${err.name}`);
    console.log(`[${d.toLocaleString()}] Message: ${err.message}`);
    console.log("\n");
  });
};

//make initial request
makeRequest();
// Start Interval
let interval = setInterval(makeRequest, 30 * 60 * 1000);
