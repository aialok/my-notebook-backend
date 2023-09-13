const express = require("express");

const router = express.Router();

const UserController = require("../../controllers/user-controller");
const { authenticated } = require("../../middlewares/isAuth-middleware");
const DocumentController = require("../../controllers/document-controller");

// User Routes :-

router.post("/user/create", UserController.create);
router.get("/user/:id", UserController.get);
router.delete("/user/:id", UserController.destroy);
router.patch("/user", UserController.update);
router.post("/user/signin", UserController.signIn);
router.post("/user/isauth", authenticated);

// Notes Routes :-

router.post("/notes/create", authenticated, DocumentController.create);
router.get("/notes", authenticated, DocumentController.getAll);
router.patch("/notes/:id", authenticated, DocumentController.update);
router.delete("/notes/:id", authenticated, DocumentController.destroy);

module.exports = router;
