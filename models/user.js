import {Schema, model, models } from "mongoose";

const UserSchema = new Schema({
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: [true, "Email Already Exists"],
  },
  username: {
    type: String,
    required: [true, "Username is required!"],
    unique: [true, "Username Already Exists!"],
    trim: true,
    lowercase: true,
  },
  image: {
    type: String,
  }
});

const User = models.User||model("User", UserSchema);

export default User;