const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const port = process.env.PORT;

app.set("trust proxy", true);
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json({ success: true, message: "Server Online" });
});



app.use((req, res, next) => {
  res.status(404).json({ success: false, message: "Invalid Route" });
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

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
