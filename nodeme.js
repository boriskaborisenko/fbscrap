const urls = require('./urls');
const fetch = require('node-fetch');

let count = 0;
const token = 'EAAJJCiYuZAqwBAEelRWDHcQgGvHXeWeeLmu6G8GqA712ArZCsyGJjZBQgBsj5EU7fo3QqGRJPhOTY1a97vg9G56FUNTCg9CQVzMZAqcGqZCy9I7i9wOVp5PTs8YDFDYo7u8ahxJGU3esQL5kMy29ImcNPhqZCZC6vK1IJFrYf5FEag7IUUQ3RTz7rqc9yTvzvYZD'
const scrap = (url) => {
    const x = 'https://graph.facebook.com/v3.2/?scrape=true&id='+url+'&access_token='+token;
    fetch(x,{method:'POST'})
    .then(res => res.text())
    .then(body => {
        console.log(body)
        count++
        count < urls.length ? scrap(urls[count]) : '';
    })
}


scrap(urls[count]);


