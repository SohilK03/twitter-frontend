import axios from "axios";
// import { getAuthToken } from "./Utils/Local";

axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";

// if (getAuthToken()) {
//   axios.defaults.headers.common["token"] = getAuthToken();
// } else {
//   delete axios.defaults.headers.common["token"];
// }
export default axios.create({
  baseURL: "http://localhost:5000/",
  headers: {
    Accept: "applications/json",
  },
});

export const baseUrl = "http://localhost:5000/";
