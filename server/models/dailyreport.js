import { UUIDV4 } from "sequelize";

const dailyreport = (sequelize, DataTypes) => {
  return sequelize.define("daily report", {
    id: {
      type: DataTypes.UUID,
      defaultValue: UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    Date: {
      type: DataTypes.DATEONLY,
      defaultValue: DataTypes.NOW,
      set(value) {
        const reversedDate = value.split('-').reverse().join('-');
        this.setDataValue('Date', reversedDate);
      }
    },
    source: {
      type: DataTypes.STRING,
      unique: true,
    },
    Enquiry: {
      type: DataTypes.JSON,
      allowNull: false,
      defaultValue: {
        FTD: 0,
        MTD: 0,
        YTD: 0,
      },
    },
    status: {
      type: DataTypes.JSON,
      allowNull: false,
      defaultValue: {
        Live: 0,
        Closed: 0,
        NC: 0,
        StockNA: 0,
      },
    },
    WalkIn: {
      type: DataTypes.JSON,
      allowNull: false,
      defaultValue: {
        FTD: 0,
        MTD: 0,
        YTD: 0,
      },
    },
    Booking: {
      type: DataTypes.JSON,
      allowNull: false,
      defaultValue: {
        FTD: 0,
        MTD: 0,
        YTD: 0,
      },
    },
  });
};

export default dailyreport;
