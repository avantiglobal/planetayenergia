import getCurWeather from "./modules/_weather.js";
import { getCurDate } from "./modules/_utilities.js";
import { fetchNews } from "./modules/_news.js";

window.onload = () => {
    // Loading the Current Date
    getCurWeather();
    getCurDate();
    fetchNews();
}