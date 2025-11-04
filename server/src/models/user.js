import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    fname: {
      type: String,
    },
    lname: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export const User = mongoose.model("User", UserSchema);
