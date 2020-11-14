const { Sequelize } = require('sequelize');
const Model = Sequelize.Model;

class RSSChannel extends Model {
    static inject(sequelize) {
        RSSChannel.init({
            name: Sequelize.STRING,
            type: Sequelize.STRING,
            created_at: Sequelize.DATE(6),
            updated_at: Sequelize.DATE(6),
        }, {
            sequelize,
            modelName: 'rss_channel',
            timestamps: true,
            createdAt: 'created_at',
            updatedAt: 'updated_at',
        });
        return RSSChannel;
    }
}

module.exports = RSSChannel;
