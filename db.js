const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("database", "username", "password", {
  host: "localhost",
  dialect: "mysql",
  logging: false,
});

// Conexión a la base de datos
(async () => {
  try {
    await sequelize.authenticate();
    console.log("Conexión a la base de datos establecida correctamente.");
  } catch (error) {
    console.error("Error al conectar a la base de datos:", error);
  }
})();

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Modelos
db.User = require("./models")(sequelize);

module.exports = db;
