const express = require("express");
const app = express();
const path = require("path");
const admin = require("../config/firebase");
const User = require("../models/user");
const { validationResult } = require("express-validator");
const uuidv4 = require("uuid-v4");

exports.postUser = async (req, res, next) => {
  // const errors = validationResult(req);
  // if (!errors.isEmpty()) {
  //   const err = new Error("Invalid Value");
  //   err.errorStatus = 400;
  //   err.data = errors.array();
  //   throw err;
  // }
  if (!req.file)
    return res.status(400).json({ message: "avatar belum diinput" });

  const uuid = uuidv4();
  const fileName = "uid/avatar" + path.extname(req.file.originalname);
  const imageURL = () => {
    let filepath = fileName;
    if (fileName.includes("/")) filepath = fileName.replaceAll("/", "%2f");
    return `https://firebasestorage.googleapis.com/v0/b/cv-maker-f1c88.appspot.com/o/${filepath}?alt=media&token=${uuid}`;
  };

  app.locals.bucket = admin.storage().bucket();
  const result = await app.locals.bucket
    .file(fileName, {
      uploadType: "media",
      metadata: {
        contentType: "image/png, image/jpg, image/jpeg",
        metadata: {
          firebaseStorageDownloadTokens: uuid,
        },
      },
    })
    .createWriteStream()
    .end(req.file.buffer);
  if (!result) return res.status(500).json({ message: "error" });
  res.status(201).json({ message: "sukses", result, imageURL: imageURL() });

  // const UserData = new User({ ...req.body });

  // UserData.save()
  //   .then((result) => res.status(201).json(result))
  //   .catch((e) => next(e));
};

exports.getUsers = () => {};

exports.getUser = () => {};
