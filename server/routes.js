const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/chat", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/chat.html"));
});

router.get("/", (req, res) => {
  res.render("index");
});

module.exports = router;
