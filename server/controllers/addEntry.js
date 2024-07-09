import asyncHandler from "express-async-handler";
import db from "../db/database.js";

export const createDailyReport = asyncHandler(async (req, res) => {
  const { source, date } = req.body
  try {
    const result = await db.DailyReport_model.create({
      Date: date,
      source: source,

    });
    console.log(result.toJSON());
    res.status(200).send({ msg: "model created" });
  } catch (error) {
    console.log(error);
    res.sendStatus(501);
  }
});

export const createInsuranceReport = asyncHandler(async (req, res) => {
  const {
    Date,
    VehicleNumber,
    Year,
    ModelName,
    InsuranceName,
    StartDate,
    EndDate,
    IDVValue,
    MinimumAmount,
    ContactNumber,
    CustomerName,
  } = req.body;

  try {
    const result = await db.Insurance_model.create({
      Date: Date,
      VehicleNumber: VehicleNumber,
      Year: Year,
      ModelName: ModelName,
      InsuranceName: InsuranceName,
      StartDate: StartDate,
      EndDate: EndDate,
      IDVValue: IDVValue,
      MinimumAmount: MinimumAmount,
      ContactNumber: ContactNumber,
      CustomerName: CustomerName,
      followUpDate: ""
    });

    console.log(result.toJSON());
    res.status(200).send({ msg: "Model created" });
  } catch (error) {
    console.log(error);
    res.sendStatus(501);
  }
});
