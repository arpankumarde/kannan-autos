import { UUIDV4 } from "sequelize";

const insuranceReport = (sequelize, DataTypes) => {
  return sequelize.define("InsuranceReport", {
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
    VehicleNumber: {
      type: DataTypes.STRING(50),
      unique: true,
      validate: {
        is: /^[a-zA-Z0-9\-]+$/,
      },
      set(value) {
        this.setDataValue("VehicleNumber", value.toUpperCase());
      },
    },
    Year: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 1990,
        max: new Date().getFullYear(),
      },
    },
    ModelName: {
      type: DataTypes.TEXT,
    },
    InsuranceName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    StartDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    EndDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    IDVValue: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    MinimumAmount: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    ContactNumber: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    CustomerName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    followUpDate: {
      type: DataTypes.STRING,
      allowNull: true,
      set(value) {
        const endDate = this.getDataValue("EndDate");
        if (endDate) {
          const date = new Date(endDate);
          date.setDate(date.getDate() - 1);
          const followUpDate = date.toISOString().split('T')[0];
          this.setDataValue("followUpDate", followUpDate);
        } else {
          this.setDataValue("followUpDate", "dummy sirey");
        }
      },
    },
  });
};

export default insuranceReport;
