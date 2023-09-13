const express = require("express");
const bodyParser = require("body-parser");
const app = express();

//middleWares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Required Files
const { PORT, DB_SYNC } = require("./config/serverConfig");
const db = require("./models/index");

// Routes
const apiRoutes = require("./routes/index");

const setupAndStartServer = async () => {
  app.use("/api", apiRoutes);

  app.listen(PORT, (req, res) => {
    console.log(`Server listening on port ${PORT}`);
  });

  // if (true) {
  //   await db.sequelize.sync({ alter: true });
  // }
};

setupAndStartServer();
