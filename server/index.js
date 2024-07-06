import express, { json } from "express";
import cors from "cors";
import dotenv from "dotenv";
import db from "./db/database.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.set("trust proxy", true);
app.use(json());
app.use(cors());

app.get("/", (req, res) => {
  res.json({ success: true, message: "Server Online" });
});

app.use((req, res, next) => {
  res.status(404).json({ success: false, message: "Invalid Route" });
  next();
});

app.use((error, req, res, next) => {
  if (error instanceof SyntaxError) {
    return res.status(400).json({ success: false, message: "Invalid JSON" });
  }
  console.error(
    `Global Error Handler: ${new Date().toLocaleString()} \n`,
    error
  );
  return res.status(500).json({ success: false, message: "Server error" });
});

const startServer = async () => {
  try {
    await db.init();

    try {
      const report = await db.Insurance_model.create({
        VehicleNumber: "tn-7s2",
        Year: 2023,
        ModelName: "Model X",
        InsuranceName: "ABC Insurance",
        StartDate: "2024-07-05",
        EndDate: "2025-07-05",
        IDVValue: 500000,
        MinimumAmount: 300000,
        ContactNumber: "1234567890",
        CustomerName: "John Doe",
      });

      // Log the created record
      console.log(report.toJSON());
    } catch (error) {
      console.log(error);
    }
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.error("Failed to initialize the database:", error);
    process.exit(1); // Exit the process with an error code
  }
};

startServer();
