const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = Schema({
  createdAt: { type: String, require: true },
  userdata: { type: Object, require: true },
});

module.exports = mongoose.model("User", UserSchema);
