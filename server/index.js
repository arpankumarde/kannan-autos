import express, { json } from "express";
import cors from "cors";
import dotenv from "dotenv";
import db from "./db/database.js";
import { router } from "./routes/add.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.set("trust proxy", true);
app.use(json());
app.use(cors());

db.init();

app.get("/", (req, res) => {
  res.json({ success: true, message: "Server Online" });
});
app.use("/",router)
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
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
