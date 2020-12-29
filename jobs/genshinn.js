const got = require('got');
const config = require('../config').value;
const logger = require('../utils/logger');
const rssChannelService = require('../services/rss-channel');
const rssItemService = require('../services/rss-item');
const CONSTANTS = require('../constants/channel-source');

async function run() {
    try {
        logger.info('start genshinn jobs');
        const channels = await rssChannelService.findAll(CONSTANTS.GENSHINN_SOURCE_ID);
        const tasks = channels.map(async (channel) => await generateTask(channel.id, `${config.rssHost}${channel.atom_link}`));
        await Promise.all(tasks);
        logger.info('finish genshinn jobs');
    } catch (e) {
        logger.error('genshinn job error: ' + e);
    }
}

async function generateTask(channelId, rssUrl) {
    const { body } = await got.get(rssUrl);
    await rssItemService.createIfNeeded(channelId, JSON.parse(body));
}

module.exports = {
    run
};
