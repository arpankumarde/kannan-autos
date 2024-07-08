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
      set(value) {
        const reversedDate = value.split('-').reverse().join('-');
        this.setDataValue('EndDate', reversedDate);
        const endDate = new Date(value);
        endDate.setDate(endDate.getDate() - 1);
        this.setDataValue('followUpDate', endDate.toISOString().split('T')[0]);
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
      get() {
        const endDate = this.getDataValue('EndDate');
        if (endDate) {
          const followUpDate = new Date(endDate);
          followUpDate.setDate(followUpDate.getDate() - 1);
          return followUpDate.toISOString().split('T')[0];
        }
        return null;
      }
    },
  });
};

export default insuranceReport;
