const { Sequelize } = require('sequelize');
const Model = Sequelize.Model;
class RSSArticle extends Model {
    static inject(sequelize) {
        RSSArticle.init({
            channel: Sequelize.INTEGER,
            title: Sequelize.STRING,
            link: Sequelize.STRING,
            description: Sequelize.STRING,
            category: Sequelize.STRING,
            language: Sequelize.ENUM('zh-cn', 'ja-jp'),
            lastBuildDate: Sequelize.DATE(6),
            created_at: Sequelize.DATE(6),
            updated_at: Sequelize.DATE(6),
        }, {
            sequelize,
            modelName: 'rss_article',
            createdAt: 'created_at',
            updatedAt: 'updated_at',
        });
        return RSSArticle;
    }
}

module.exports = RSSArticle;
