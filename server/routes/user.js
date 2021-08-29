const express = require("express");
const router = express.Router();

const { getUsers, getUsers } = require("../controllers/user.js");

router.get("/", getUsers);
router.get("/:id", getUser);

module.exports = router;