const User = require("../models/user");
const { validationResult } = require("express-validator");

exports.postUser = async (req, res, next) => {
  //   const errors = validationResult(req);
  //   if (!errors.isEmpty()) {
  //     const err = new Error("Invalid Value");
  //     err.errorStatus = 400;
  //     err.data = errors.array();
  //     throw err;
  //   }

  try {
    const UserData = new User({ ...req.body });

    const result = await UserData.save();

    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};

exports.getUsers = () => {};

exports.getUser = () => {};
