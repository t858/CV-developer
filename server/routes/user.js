const express = require("express");
const router = express.Router();

const { postUser, getUsers, getUser } = require("../controllers/user.js");

router.post("/", postUser);
router.get("/", getUsers);
router.get("/:id", getUser);

module.exports = router;
