const express = require("express");
const router = express.Router();
const userBiodata = require("../controller");
const middleware = require("../helpers/middleware");

router.get("/show", userBiodata.user_biodata.readAllData);
router.get("/show/:userId", userBiodata.user_biodata.readDetailUser);
router.post("/", userBiodata.user_biodata.createUserBiodata);
router.put("/update/:userId", userBiodata.user_biodata.updateUserBiodata);
router.delete("/:userId", userBiodata.user_biodata.deleteUserBiodata);

module.exports = router;
