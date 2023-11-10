import mongoose from "mongoose";

const accountSchema = new mongoose.Schema(
  {
    uid: String,
    pin: String,
    name: String,
  },
  { timestamps: true }
);

const Account =
  mongoose.models.Account || mongoose.model("Account", accountSchema);

export default Account;
