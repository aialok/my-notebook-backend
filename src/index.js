const express = require("express");
const app = express();

// Required Files
const { PORT } = require("./config/serverConfig");

const setupAndStartServer = async () => {
  app.listen(PORT, (req, res) => {
    console.log(`Server listening on port ${PORT}`);
  });
};

setupAndStartServer();
