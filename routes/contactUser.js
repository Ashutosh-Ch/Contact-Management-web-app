const express = require("express")
const router = express.Router();
const {
  registerUser,
  currentUser,
  loginUser,
} = require("../controllers/userControllers")

router.post("/register", registerUser);

router.post("/login", loginUser);

router.get("/current", validateToken, currentUser);

module.exports = router;