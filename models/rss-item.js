const { Sequelize } = require('sequelize');
const Model = Sequelize.Model;

class RSSItem extends Model {
    static inject(sequelize) {
        RSSItem.init({
            title: Sequelize.STRING,
            description: Sequelize.STRING,
            pub_date: Sequelize.DATE(6),
            guid: Sequelize.STRING,
            link: Sequelize.STRING,
            channel_id: Sequelize.INTEGER,
            created_at: Sequelize.DATE(6),
            updated_at: Sequelize.DATE(6),
        }, {
            sequelize,
            modelName: 'rss_item',
            createdAt: 'created_at',
            updatedAt: 'updated_at',
        });
        return RSSItem;
    }
}

module.exports = RSSItem;
