import axios from "axios";

const axiosPodcaster = axios.create({
  baseURL: "https://corsproxy.io",
  timeout: 10000,
});

export default axiosPodcaster;
