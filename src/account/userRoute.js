const express = require("express");
const router = express.Router();
const userController = require("./userController");
const auth = require("../middleware/auth");

router.get("/data",auth, (req,res) => {userController.defineDummyData});
router.post("/register", (req,res) => {userController.registerNewUser});
router.post("/login", (req,res) => {userController.loginUser});

module.exports = router;