const sequelize = require('./db');
const RSSChannel = require('../models/rss-channel');
const RSSItem = require('../models/rss-item');

RSSChannel.inject(sequelize);
RSSItem.inject(sequelize);

async function createIfNeeded(channelId, data) {
    const channel = await RSSChannel.findOne({
        where: {id: channelId}
    });
    if (channel) {
        channel.update({
            last_build_date: data.lastBuildDate,
        });
    } else {
        throw ('can not find target channel');
    }
    const itemGuids = data.item.map(((item) => item.guid));
    const exitItems = await RSSItem.findAll({
        where: {
            channel_id: channelId,
            guid: itemGuids,
        },
        raw: true,
    });
    const needCreateItems = data.item.reduce((result, item) => {
        if (exitItems.some((i) => i.guid === item.guid)) {
            return result;
        }
        result.push({
            title: item.title,
            description: item.description,
            link: item.link,
            guid: item.guid,
            pub_date: item.pubDate,
            author: item.author,
            channel_id: channelId,
        });
        return result;
    }, []);
    await RSSItem.bulkCreate(needCreateItems);
    return true;
}

module.exports = {
    createIfNeeded,
};
