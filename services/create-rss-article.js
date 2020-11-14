const sequelize = require('./db');
const RSSArticle = require('../models/RSSArticle');
const RSSItem = require('../models/RSSItem');

RSSArticle.inject(sequelize);
RSSItem.inject(sequelize);

async function create(channelId, data) {
    const article = await RSSArticle.create({
        channel: channelId,
        title: data.title,
        link: data.link,
        description: data.description,
        language: data.language,
        lastBuildDate: data.lastBuildDate,
    });

    const items = data.item.map((item) => ({
        title: item.title,
        description: item.description,
        link: item.link,
        guid: item.guid,
        pubDate: item.pubDate,
        author: item.author,
        aid: article.id,
    }));

    await RSSItem.bulkCreate(items);
    return true;
}

module.exports = create;
