import { DataTypes, Sequelize, UUIDV4 } from "sequelize";
import DailyReport from "../models/dailyreport.js";
import insuranceReport from "../models/insuranceReport.js";

const db = {};

db.init = async () => {
  const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASS,
    {
      host: process.env.DB_HOST,
      dialect: "mysql",
      pool: {
        max: 10000,
        min: 0,
        acquire: 60000,
        idle: 1000,
      },
    }
  );

  try {
    await sequelize.authenticate();
    console.log("DB connected");

    db.library = Sequelize;
    db.sequelize = sequelize;

    db.DailyReport_model = DailyReport(sequelize, DataTypes);
    db.Insurance_model = insuranceReport(sequelize, DataTypes);
    await db.sequelize.sync({alert : true});

    return db;
  } catch (error) {
    console.log("Unable to connect", error);
    throw error;
  }
};

export default db;
