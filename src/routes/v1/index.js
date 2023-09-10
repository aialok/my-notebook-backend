const express = require("express");

const router = express.Router();

const UserController = require("../../controllers/user-controller");

router.post("/user", UserController.create);
router.get("/user/:id", UserController.get);
router.delete("/user/:id", UserController.destroy);
router.patch("/user", UserController.update);

module.exports = router;