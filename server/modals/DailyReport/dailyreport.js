const DailyReport = (sequelize, DataTypes) => {
  return sequelize.define("DailyReport", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
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

export default DailyReport;
