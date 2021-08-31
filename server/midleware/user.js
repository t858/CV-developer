const { body } = require("express-validator");
exports.userDataValidation = [
  body("createdAt").not().isEmpty().withMessage("tanggal belum diinput"),
  body("userData").not().isEmpty().withMessage("user data tidak boleh kosong"),
  // body("userData").isObject().withMessage("user data harus object"),
];
