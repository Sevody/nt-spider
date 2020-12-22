const { Sequelize } = require('sequelize');
const Model = Sequelize.Model;

class RSSSource extends Model {
    static inject(sequelize) {
        RSSSource.init({
            name: Sequelize.STRING,
            type: Sequelize.STRING,
            created_at: Sequelize.DATE(6),
            updated_at: Sequelize.DATE(6),
        }, {
            sequelize,
            modelName: 'rss_source',
            timestamps: true,
            createdAt: 'created_at',
            updatedAt: 'updated_at',
        });
        return RSSSource;
    }
}

module.exports = RSSSource;
