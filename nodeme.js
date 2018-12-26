const ogs = require('open-graph-scraper');
const urls = require('./urls');

let count = 0;
const scrap = (url) => {
    const options = { 'url': url };
    ogs(options)
        .then(function (result) {
            console.log('result:', result);
            count++
            count < urls.length ? scrap(urls[count]) : '';
        })
        
}

scrap('http://ogp.me/');


