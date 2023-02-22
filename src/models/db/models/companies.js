module.exports = ( sequelize, DataTypes) => {
    const Company = sequelize.define(
      'Company', 
      {
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
        },
        nombre: {
          type: DataTypes.STRING,
          allowNull: false
        },
        direccion: {
          type: DataTypes.STRING,
          allowNull: false
        },
        nit: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true
        },
        telefono: {
          type: DataTypes.STRING,
          allowNull: false
        },
        logo: {
          type: DataTypes.STRING,
          allowNull: true
        },
    }, {
        tableName: "companies",
        timestamps: true,
        underscored: true
    });

    Company.associate = (Models) =>{
    }
    return Company;
}








