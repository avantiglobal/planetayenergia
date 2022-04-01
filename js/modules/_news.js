import { setBackground, setImgSrc, setElement } from './_utilities.js';

export const fetchNews = () => {
    var newsData = "";
    var url = new URL('https://free-news.p.rapidapi.com/v1/search');
    var params = { q: 'energy, solar, world, electricity, wind', lang: 'en' };
    url.search = new URLSearchParams(params).toString();

    fetch(url, {
        "method": "GET",
        "headers": {
            'x-rapidapi-host': 'free-news.p.rapidapi.com',
            'x-rapidapi-key': '29b165ef87msh7c35f1e9599cea9p1efc23jsne9fe624941c6'
        }
    })
        .then(response => response.json())
        .then(data => {
            //debugger;
            newsData = data.articles;
            loadFeaturedNews(newsData);
            loadLatestArticles(newsData);
        });
}

const loadFeaturedNews = (newsData) => {
    const featured_main_published_date = new Date(newsData[0].published_date).toLocaleDateString('en-us', { weekday: "long", year: "numeric", month: "short", day: "numeric" });

    setBackground('#featured-main-wrapper', newsData[0].media);
    setElement('#featured-main-topic', newsData[0].topic);

    setElement('#featured-main-topic', newsData[0].topic);
    setElement('#featured-main', newsData[0].title);
    setElement('#featured-main-date', featured_main_published_date);
    setElement('#featured-main-clean-url', newsData[0].clean_url);

    setBackground('#featured-main-small-wrapper', newsData[1].media);
    setElement('#featured-main-small-topic', newsData[1].topic);
    setElement('#featured-main-small', newsData[1].title);

    setBackground('#featured-small-left-wrapper', newsData[2].media);
    setElement('#featured-small-left-topic', newsData[2].topic);
    setElement('#featured-small-left', newsData[2].title);

    setBackground('#featured-small-right-wrapper', newsData[3].media);
    setElement('#featured-small-right-topic', newsData[3].topic);
    setElement('#featured-small-right', newsData[3].title);
}

const loadLatestArticles = (newsData) => {
    fetchNews()
    setImgSrc('#latest-featured-1-img', newsData[4].media);
    setElement('#latest-featured-1-title', newsData[4].title);
    setElement('#latest-featured-1-author', newsData[4].rights);
    setElement('#latest-featured-1-summary', `${newsData[4].summary.substring(0, 150)}...`);

    setImgSrc('#latest-featured-2-img', newsData[5].media);
    setElement('#latest-featured-2-title', newsData[5].title);
    setElement('#latest-featured-2-author', newsData[5].rights);
    setElement('#latest-featured-2-summary', `${newsData[5].summary.substring(0, 150)}...`);
}
