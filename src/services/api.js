import axios from "axios";

 // 13050814/json

const api = axios.create({

    baseURL: "https://viacep.com.br/ws/"
})


export default api;