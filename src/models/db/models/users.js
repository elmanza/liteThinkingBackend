module.exports = ( sequelize, DataTypes) => {
    const User = sequelize.define(
      'User', 
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
        lastname: {
          type: DataTypes.STRING,
          allowNull: false
        },
        username: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true
        },
        password: {
          type: DataTypes.STRING,
          allowNull: false
        },
        photo: {
          type: DataTypes.STRING,
          allowNull: true
        },
        phone: {
          type: DataTypes.STRING,
          allowNull: true
        },
        token: {
          type: DataTypes.STRING,
          allowNull: true
        },
        last_activity_at: {
          type: DataTypes.DATE,
          allowNull: true
        },
        enabled: {
          type: DataTypes.BOOLEAN,
          allowNull: true,
          defaultValue: true
        },
        language_app: {
          type: DataTypes.STRING,
          allowNull: true,
          default: "es"
        }
    }, {
        tableName: "users",
        timestamps: true,
        underscored: true
    });

    User.associate = (Models) =>{
    }
    return User;
}








