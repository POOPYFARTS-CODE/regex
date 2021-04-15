require('dotenv').config()
const API_KEY = process.env.API_KEY

const api_url = "https://api.nasa.gov/planetary/apod?api_key="+ API_KEY;
console.log(api_url)