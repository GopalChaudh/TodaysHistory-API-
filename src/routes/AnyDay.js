const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');
const app = express.Router();

function scrapData($, element, titleClass, dataClass) {
    const dataArray = [];

    $(element).find('li').each((index, ele) => {
        const $ele = $(ele);
        const title = $ele.find(titleClass).text();
        const detail = $ele.find(dataClass).text();
        dataArray.push({
            title,
            detail,
        });
    });

    return dataArray;
}

function scrapDataBirthAndDeaths($, element) {
    const births = scrapData($, $(element).find('.otd-life__block')[0], 'h3.otd-title', 'p.otd-text');
    const deaths = scrapData($, $(element).find('.otd-life__block')[1], 'h3.otd-title', 'p.otd-text');
    return {
        births,
        deaths,
    };
}

async function getHistory(month = null,day = null) {

    let response;
  
    if(month == null){
        response = await axios.get(`https://www.timeanddate.com/on-this-day/`);
    }else{

        
        response = await axios.get(`https://www.timeanddate.com/on-this-day/${month}/${day}`);
    }
    const html = response.data;
    const $ = cheerio.load(html);
    const Events = scrapData($, $('article section article')[0], 'h3.otd-title', 'p.otd-text');
    const birthsAndDeaths = scrapDataBirthAndDeaths($, $('article section article')[1]);

    return {
        Events,
        birthsAndDeaths,
    };
}

app.get('/', async (req, res) => {
    
    const historyData = await getHistory();
    res.json(historyData);
});
app.get('/past/:month/:day', async (req, res) => {
    let Month = req.params.month;
    let Day = Month == req.params.day;
    const historyData = await getHistory((Month) ? Month : null, (Day)? Day : 1);
    res.json(historyData);
});

module.exports = app;
