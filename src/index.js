const express = require("express");
const bodyParser = require("body-parser");
const app = express();

//middleWares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Required Files
const { PORT } = require("./config/serverConfig");

// Routes
const apiRoutes = require("./routes/index");

const setupAndStartServer = async () => {
  app.use("/api", apiRoutes);

  app.listen(PORT, (req, res) => {
    console.log(`Server listening on port ${PORT}`);
  });
};

setupAndStartServer();
