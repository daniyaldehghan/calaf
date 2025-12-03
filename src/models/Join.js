import { model, models, Schema } from "mongoose";
const userschema = new Schema({
  email: {
    type: String,
    require: true,
  },
});
const Join = models.Join || model("Join", userschema);
export default Join;
