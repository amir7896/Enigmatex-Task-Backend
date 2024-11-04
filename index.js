const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const dbCon = require("./config/dbCon");
const taskRoutes = require("./routes/task");

dbCon();
const app = express();

app.use(express.json());
app.use(cors({ origin: "*" }));

app.use("/api/task", taskRoutes);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server is listening on port : ${PORT}`);
});
