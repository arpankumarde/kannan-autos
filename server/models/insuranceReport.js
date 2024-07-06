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
      set(value) {
        const newDate = new Date().toISOString().split('T')[0]
        this.setDataValue('Date',newDate.split('-').reverse().join('-'))
      },
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
      set(value) {
        const reversedDate = value.split('-').reverse().join('-');
        this.setDataValue('StartDate', reversedDate);
      }
    },
    EndDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      set(value) {
        const reversedDate = value.split('-').reverse().join('-');
        this.setDataValue('EndDate', reversedDate);
      }
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
      type: DataTypes.DATEONLY,
      allowNull: true,
      set(value) {
        const endDate = new Date();
        endDate.setDate(endDate.getDate() - 1);
        this.setDataValue("followUpDate", endDate.toISOString().split('T')[0]);
      },
    },
  });
};

export default insuranceReport;
