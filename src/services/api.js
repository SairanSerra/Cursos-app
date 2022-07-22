import axios from "axios";

const api = axios.create({
    baseURL: "https://xildemy.herokuapp.com"
});

export default api;