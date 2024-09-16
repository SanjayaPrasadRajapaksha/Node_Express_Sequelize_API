module.exports = (sequelize, DataTypes) => {


    const Product = sequelize.define("product", {
        title: {
            type: DataTypes.STRING,
            allowNull: false

        },
        price: {
            type: DataTypes.INTEGER

        },
        description: {
            type: DataTypes.TEXT

        },
        published: {
            type: DataTypes.BOOLEAN

        }
    },
        {
            timestamp: false //To stop currentAt @ updateAt time
    });

    return Product;

}