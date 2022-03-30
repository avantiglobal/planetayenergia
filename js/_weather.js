var url = new URL('https://weatherapi-com.p.rapidapi.com/forecast.json')
var params = { q: 'Indianapolis', days: 3 };
url.search = new URLSearchParams(params).toString();

fetch(url, {
    "method": "GET",
    "headers": {
        'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com',
        'x-rapidapi-key': '29b165ef87msh7c35f1e9599cea9p1efc23jsne9fe624941c6'
    }
})
    .then(response => response.json())
    .then(data => {
        console.log(data.current.temp_f);
        console.log(data.current.feelslike_f);
        console.log(data.current.condition.text);
        console.log(data.current.condition.icon);
        console.log(data.current);
        document.querySelector('#temp').innerHTML = data.current.temp_f;
    });