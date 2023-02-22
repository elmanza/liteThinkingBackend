module.exports = ( sequelize, DataTypes) => {
    const Article = sequelize.define(
      'Article', 
      {
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false
        },
        description: {
          type: DataTypes.STRING,
          allowNull: true
        },
        stock: {
          type: DataTypes.NUMBER,
          allowNull: true,
        },
        price: {
          type: DataTypes.STRING,
          allowNull: true
        },
        currency: {
          type: DataTypes.STRING,
          allowNull: true,
          default: "USD"
        },
        image: {
          type: DataTypes.STRING,
          allowNull: true
        },
        company_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: "companies",
            key: "id"
          }
        },
    }, {
        tableName: "articles",
        timestamps: true,
        underscored: true
    });

    Article.associate = (Models) =>{
      const { Company } = Models;

      Article.belongsTo(Company, {
        foreignKey: "company_id",
        constraints: true
      });
    }
    return Article;
}








