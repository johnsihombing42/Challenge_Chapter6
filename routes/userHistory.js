const express = require("express");
const router = express.Router();
const userHistory = require("../controller/");
const middleware = require("../helpers/middleware");

router.post("/create", userHistory.user_history.createUserHistory);
router.get("/show", userHistory.user_history.readUserHistory);
router.get("/show/:userId", userHistory.user_history.readDetailHistory);

router.put("/update/:userId", userHistory.user_history.updateUserHistory);
router.delete("/delete/:userId", userHistory.user_history.deleteUserHistory);

module.exports = router;
