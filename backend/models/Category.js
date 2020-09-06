const Category = function(Sequelize, sequelize)
{
    return sequelize.define('Categories', {
        CategoryId: {
            primaryKey: true,
            type: Sequelize.UUID,
            unique: true,
            allowNull: false,
            defaultValue: sequelize.fn('uuid_generate_v4'),
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false,
            defaultValue: '',
            unique: true
        }
    })
}

module.exports = {Category};