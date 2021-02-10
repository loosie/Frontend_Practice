const DataTypes = require('sequelize');
const { Model } = DataTypes;

module.exports = class Hashtag extends Model{
    static init(sequelize){
        return super.init({
            // mysql에 id 기본적으로 세팅되어있음.
            name: {
                type: DataTypes.STRING(20),
                allowNull: false,
            },
        },{
            modelName: 'Hashtag',
            tableName: 'hashtags',
            charset: 'utf8mb4',
            collate: 'utf8mb4_general_ci', //  한글, 이모티콘(mb4) 저장
            sequelize,
        });
    }

    static associate(db){
        db.Hashtag.belongsToMany(db.Post, { through: 'PostHashtag' }); // 다대다 관계
    }
};