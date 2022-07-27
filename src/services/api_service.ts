import axios from "axios"

const ApiService = axios.create({
  baseURL: process.env.REACT_APP_API_ENDPOINT,
})

export default ApiService
