import { DataTypes, UUIDV4 } from "sequelize";

const dailyreport = (sequelize) => {
  return sequelize.define("daily_report", {
    id: {
      type: DataTypes.UUID,
      defaultValue: UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    Date: {
      type: DataTypes.DATEONLY,
      defaultValue: DataTypes.NOW,
    },
    source: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
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
  }, {
    timestamps: true,
  });
};

export default dailyreport;
