import { DataTypes, Sequelize } from "sequelize";
import DailyReport from "../modals/DailyReport/dailyreport.js";

const db = {};

db.init = async () => {
  const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASS,
    {
      host: process.env.DB_HOST,
      dialect: "mysql",
    }
  );

  try {
    await sequelize.authenticate();
    console.log("DB connected");

    db.library = Sequelize;
    db.sequelize = sequelize;

    db.DailyReport_model = DailyReport(sequelize, DataTypes);
    await db.sequelize.sync()
    return db;

  } catch (error) {
    console.log("Unable to connect", error);
  }

  
};

export default db;
