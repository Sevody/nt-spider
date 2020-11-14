const got = require('got');
const save = require('../services/create-rss-article');

const GENSHINN_CHANNEL_ID = 1;

async function run () {
    try {
        const { body } = await got.get('http://127.0.0.1:1200/yuanshen');
        const result = await save(GENSHINN_CHANNEL_ID, JSON.parse(body));
        if (result) {
            console.log('save rss article success');
        }
    } catch (e) {
        console.log('error: ', e);
    }
}

module.exports = run;
