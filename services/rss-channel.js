const sequelize = require('./db');
const RSSChannel = require('../models/rss-channel');

RSSChannel.inject(sequelize);

async function findAll(sourceId) {
    const channels = await RSSChannel.findAll({
        where: {source_id: sourceId},
        raw: true,
    });
    return channels;
}

async function findOrCreate(data) {
    const [channel] = await RSSChannel.findOrCreate({
        where: { atom_link: data.atomLink },
        default: {
            source_id: data.sourceId,
            title: data.title,
            atom_link: data.atomLink,
            description: data.description,
            language: data.language,
            last_build_date: data.lastBuildDate,
        },
    });
    return channel;
}

module.exports = {
    findAll,
    findOrCreate,
};
