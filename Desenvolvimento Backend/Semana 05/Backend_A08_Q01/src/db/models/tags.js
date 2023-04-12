'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tags extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Tags.belongsTo(models.Produtos, {foreignKey: "produtosId"});
    }
  }
  Tags.init({
    tags: DataTypes.STRING,
    produtosId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Tags',
  });
  return Tags;
};