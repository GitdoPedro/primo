const createPrimoModel = (sequelize, DataTypes) => {
    return sequelize.define('Primo', {
      id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          allowNull: false,
          primaryKey: true
      },
      numero: {
          type: DataTypes.INTEGER,
          allowNull: false
      }
    });
};

module.exports = createPrimoModel;