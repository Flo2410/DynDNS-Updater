require("dotenv").config();
const { get } = require("https");
const { URL } = require("url");

// console.log("url", process.env.DDNS_PROVIDER_URL);

const REQ = [];

const HOSTNAMES = process.env.DDNS_HOSTNAMES.split(";");
const PROVIDER_URLS = process.env.DDNS_PROVIDER_URLS.split(";");
const PROVIDER_USERNASME = process.env.DDNS_PROVIDER_USERNASMES.split(";");
const PROVIDER_PASSWORD = process.env.DDNS_PROVIDER_PASSWORDS.split(";");

HOSTNAMES.forEach((hostname, index) => {
  const provider_url = PROVIDER_URLS[index]
    ? PROVIDER_URLS[index]
    : PROVIDER_URLS[PROVIDER_URLS.length - 1];

  REQ.push({
    hostname: hostname,
    provider_url: provider_url,
    provider_username: PROVIDER_USERNASME[index]
      ? PROVIDER_USERNASME[index]
      : PROVIDER_USERNASME[PROVIDER_USERNASME.length - 1],
    provider_pwd: PROVIDER_PASSWORD[index]
      ? PROVIDER_PASSWORD[index]
      : PROVIDER_PASSWORD[PROVIDER_PASSWORD.length - 1],
    req_url: provider_url + "?hostname=" + hostname,
  });
  console.log(`URL: ${REQ[REQ.length - 1].req_url}`);
});

console.log("");

// function that makes the requst
const makeRequest = () => {
  REQ.forEach((req) => {
    let d = new Date();

    const url = new URL(req.req_url);

    console.log(`[${d.toLocaleString()}] Updating... ${req.hostname}`);

    const options = {
      hostname: url.hostname,
      path: url.path,
      auth: req.provider_username + ":" + req.provider_pwd,
    };

    get(options, (res) => {
      console.log(`[${d.toLocaleString()}] Hostname: ${req.hostname}`);
      console.log(`[${d.toLocaleString()}] Status: ${res.statusCode}`);
      console.log(`[${d.toLocaleString()}] Message: ${res.statusMessage}`);
    }).on("error", (err) => {
      console.log(`[${d.toLocaleString()}] Hostname: ${req.hostname}`);
      console.log(`[${d.toLocaleString()}] Name: ${err.name}`);
      console.log(`[${d.toLocaleString()}] Message: ${err.message}`);
    });
  });
};

//make initial request
makeRequest();
// Start Interval
let interval = setInterval(makeRequest, 30 * 60 * 1000);
