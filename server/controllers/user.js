const express = require("express");
const app = express();
const path = require("path");
const admin = require("../config/firebase");
const User = require("../models/user");
const uuidv4 = require("uuid-v4");
const date = require("../utils/date");

exports.postUser = async (req, res) => {
  if (!req.file)
    return res.status(400).json({ message: "avatar belum diinput" });

  if (!req.body.userData)
    return res.status(400).json({ message: "data belum diinput" });

  const uuid = uuidv4();

  const imageId = Date.now();

  const fileName = `${imageId}/avatar` + path.extname(req.file.originalname);

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

    const isUploaded = await app.locals.bucket
      .file(fileName, option)
      .createWriteStream()
      .end(req.file.buffer);

    if (!isUploaded)
      return res.status(500).json({ message: "something went wrong" });

    const UserData = new User({
      userData: { avatar: { url: imageURL(), id: imageId } },
      createdAt: date,
    });

    const result = await UserData.save();

    res.status(201).json({ message: "sukses", result });
  } catch (error) {
    res.status(500).json({ message: "something went wrong", error });
  }
};

exports.getUsers = (req, res) => {};

exports.getUser = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await User.findById(id);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong", error });
  }
};
