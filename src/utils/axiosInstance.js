import axios from "axios";
import config from "../config";

export default axios.create({
  baseURL: `${config.mail.url}/send`,
  timeout: 10000,
});

