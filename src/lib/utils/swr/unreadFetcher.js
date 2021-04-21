import axios from "axios";

const options = {
  method: "GET",
  headers: {
    appId: process.env.NEXT_PUBLIC_COMETCHAT_APP_ID,
    apiKey: process.env.NEXT_PUBLIC_COMETCHAT_API_KEY,
    "Content-Type": "application/json",
    Accept: "application/json",
  },
};

const fetcher = (url) => axios.get(url, options);

export default fetcher;
