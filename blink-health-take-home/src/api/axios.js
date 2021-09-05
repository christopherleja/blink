import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://rxnav.nlm.nih.gov/REST",
});

export default axiosInstance;
