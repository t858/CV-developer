const express = require("express");
const app = express();
const path = require("path");
const uuidv4 = require("uuid-v4");
const date = require("../utils/date");
const User = require("../models/user");
const admin = require("../config/firebase");

exports.postUser = async (req, res) => {
  if (!req.file)
    return res.status(400).json({ message: "avatar belum diinput" });

  if (!req.body.data)
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
      userData: {
        ...JSON.parse(req.body.data),
        avatar: { url: imageURL(), id: imageId },
      },
      createdAt: date,
      name: req.body.name,
      color: req.body?.color || "c335384",
      template: req.body?.template || 1,
    });

    const result = await UserData.save();

    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ message: "something went wrong", error });
  }
};

exports.getUsers = (req, res) => {
  const currentPage = parseInt(req.query.page) || 1;
  const perPage = parseInt(req.query.perPage) || 10;
  const search = req.query.search || "";
  const name = new RegExp(search, "i");
  let filter = {};
  let sort = {};
  let totalItems;
  let totalPages;

  req.query.category && Object.assign(filter, { category: req.query.category });

  if (req.query.sortBy) {
    sort[req.query.sortBy] = req.query.orderBy === "desc" ? -1 : 1;
  }

  User.find({ ...filter, $or: [{ name }] })
    .countDocuments()
    .then((count) => {
      totalItems = count;
      totalPages = Math.ceil(totalItems / perPage);
      return User.find({ ...filter, $or: [{ name }] })
        .sort(sort)
        .skip((currentPage - 1) * perPage)
        .limit(perPage);
    })
    .then((result) =>
      res.status(200).json({
        message: "sukses get",
        data: result,
        total_page: totalPages,
        total_data: totalItems,
        per_page: perPage,
        current_page: currentPage,
      })
    )
    .catch((error) =>
      res.status(500).json({ message: "something went wrong", error })
    );
};

exports.getAllUsers = (req, res, next) => {
  User.find()
    .then((result) => res.status(200).json(result))
    .catch((error) =>
      res.status(500).json({ message: "Something went wrong", error })
    );
};

exports.getUser = (req, res) => {
  const { id } = req.params;
  User.findById(id)
    .then((result) => res.status(200).json(result))
    .catch((error) =>
      res.status(500).json({ message: "Something went wrong", error })
    );
};
