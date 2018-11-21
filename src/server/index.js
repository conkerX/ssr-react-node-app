const path = require("path");
import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 8084;

app.use(cors());

app.use(express.static("public"));
app.use("/static", express.static("public"));

app.listen(PORT, () => {
  console.log(`Server is listening on PORT ${PORT}`);
  console.log(`Press Ctrl+C to quit`);
});
