const { Sequelize } = require('sequelize');
const Model = Sequelize.Model;
class RSSChannel extends Model {
    static inject(sequelize) {
        RSSChannel.init({
            source_id: Sequelize.INTEGER,
            title: Sequelize.STRING,
            atom_link: Sequelize.STRING,
            description: Sequelize.STRING,
            language: Sequelize.ENUM('zh-CN', 'ja-JP'),
            last_build_date: Sequelize.DATE(6),
            created_at: Sequelize.DATE(6),
            updated_at: Sequelize.DATE(6),
        }, {
            sequelize,
            modelName: 'rss_channel',
            createdAt: 'created_at',
            updatedAt: 'updated_at',
        });
        return RSSChannel;
    }
}

module.exports = RSSChannel;
