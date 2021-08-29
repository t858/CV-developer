const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = Schema({
  avatar: { type: String, require: true },
  name: { type: String, require: true },
  title: { type: String, require: true },
  password: { type: String, require: false },
  number: { type: Number, require: false },
  address: { type: String, require: false },
  province: { type: Object, require: false },
  city: { type: Object, require: false },
  district: { type: Object, require: false },
  postal: { type: Number, require: false },
});

module.exports = mongoose.model("User", UserSchema);
