const express = require("express");
const router = express.Router();
const userController = require("../controller");
const middleware = require("../helpers/middleware");

router.post("/auth/register", userController.user_game.registerUser);
router.post("/auth/login", userController.user_game.loginUser);
router.get("/show", userController.user_game.readAllData);
router.get("/show/:userId", userController.user_game.readDetailUser);
router.put("/update/:userId", userController.user_game.updateUserGame);
router.delete("/delete/:userId", userController.user_game.deleteDataUser);

module.exports = router;
