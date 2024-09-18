const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

// validate password match or not
userSchema.methods.matchPassword = async function(enterPassword){
  return await bcrypt.compare(enterPassword,this.password);
}


module.exports = mongoose.model("User", userSchema)