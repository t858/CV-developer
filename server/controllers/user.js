const express = require("express");
const app = express();
const path = require("path");
const admin = require("../config/firebase");
const User = require("../models/user");
const uuidv4 = require("uuid-v4");
const date = require("../utils/date");

exports.postUser = async (req, res, next) => {
  if (!req.file)
    return res.status(400).json({ message: "avatar belum diinput" });

  if (!req.body.userData)
    return res.status(400).json({ message: "data belum diinput" });

  const uuid = uuidv4();

  const fileName = "uid/avatar" + path.extname(req.file.originalname);

  const imageURL = () => {
    let filepath = fileName;
    if (fileName.includes("/")) filepath = fileName.replaceAll("/", "%2f");
    return `https://firebasestorage.googleapis.com/v0/b/cv-maker-f1c88.appspot.com/o/${filepath}?alt=media&token=${uuid}`;
  };

  const option = {
    uploadType: "media",
    metadata: {
      contentType: "image/png, image/jpg, image/jpeg",
      metadata: {
        firebaseStorageDownloadTokens: uuid,
      },
    },
  };

  try {
    app.locals.bucket = admin.storage().bucket();

    await app.locals.bucket
      .file(fileName, option)
      .createWriteStream()
      .end(req.file.buffer);

    const UserData = new User({ userData: req.body.userData });

    const result = await UserData.save();

    result.userData = { avatar: imageURL() };

    result.createdAt = date;

    res.status(201).json({ message: "sukses", result });
  } catch (error) {
    res.status(500).json({ message: "something went wrong", error });
  }
};

exports.getUsers = () => {};

exports.getUser = () => {};
