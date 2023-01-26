const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const db = require("./utils/database");
const authRoutes = require("./routes/auth.routes");
const conversationRoutes = require("./routes/conversation.routes");
const trasnporter = require("./utils/mailer");

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan("tiny"));
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/conversation", conversationRoutes);

app.get("/", (req, res) => {
  res.json({ message: "Welcome to the server" });
});

db.sync({ force: false })
  .then(() => console.log("DB sincronizada exitosamente"))
  .catch((error) => console.log(error));

trasnporter
  .verify()
  .then(() => console.log("Trasnporter ok"))
  .catch((error) => console.log(error));

module.exports = app;
