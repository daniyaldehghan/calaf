import { model, models, Schema } from "mongoose";
const userschema = new Schema({
  email: {
    type: String,
    require: true,
  },
  role: {
    type: String,
    default: "USER",
  },
  password: {
    type: String,
    require: true,
  },
  createdAt: {
    type: Date,
    default: () => Date.now(),
    immutable: true,
  },
});
const User = models.User || model("User", userschema);
export default User;
