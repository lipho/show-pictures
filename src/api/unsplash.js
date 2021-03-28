import unsplashAuth from '../auth/unsplash.json'
import axios from "axios";

const UNSPLASH_ROOT_URL = 'https://api.unsplash.com/';


const instance = axios.create({
  baseURL: UNSPLASH_ROOT_URL,
  headers: {
    Authorization: `Client-ID ${unsplashAuth.access}`
  }
})

export default instance;
