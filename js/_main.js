
import getCurWeather from "./modules/_weather";
import { getCurDate } from "./modules/_utilities";
import { fetchNews } from "./modules/_news";

window.onload = () => {
    // Loading the Current Date
    getCurWeather();
    getCurDate();
    fetchNews();
}