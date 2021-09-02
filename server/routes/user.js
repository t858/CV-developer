const express = require("express");
const router = express.Router();
const multer = require("multer");
const upload = multer({ storage: multer.memoryStorage() });

const { postUser, getUsers, getUser, getAllUsers } = require("../controllers/user.js");

router.post("/", upload.single("img"), postUser);
router.get("/", getUsers);
router.get("/all", getAllUsers);
router.get("/:id", getUser);

module.exports = router;
