const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const authRoutes = require("./routes/auth.routes");
const trasnporter = require("./utils/mailer");

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan("tiny"));
app.use("/api/v1/auth", authRoutes);

app.get("/", (req, res) => {
  res.json({ message: "Welcome to the server" });
});

trasnporter
  .verify()
  .then(() => console.log("Trasnporter ok"))
  .catch((error) => console.log(error));

module.exports = app;
