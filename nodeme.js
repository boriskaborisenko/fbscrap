const ogs = require('open-graph-scraper');
const urls = require('./urls');

let count = 0;
const scrap = (url) => {
    ogs({ 'url': url })
        .then(function (result) {
            console.log('result:', result);
            count++
            count < urls.length ? scrap(urls[count]) : '';
        })
        
}

scrap(urls[count]);


