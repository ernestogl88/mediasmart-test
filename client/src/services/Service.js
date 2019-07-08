// auth/auth-service.js
import axios from "axios";
const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });
let baseURL = process.env.REACT_APP_URL;

class Service {
  constructor() {
    this.service = axios.create({
      baseURL: baseURL,
      withCredentials: true
    });
  }

  getWorkers = () => {
    return this.service
      .get("/workers")
      .then(response => {
        return response.data;
      })
      .catch(err => console.log(err));
  };
}

export default Service;
