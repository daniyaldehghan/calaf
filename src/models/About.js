import { model, models, Schema } from "mongoose";

const aboutSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  phone: {
    type: String,
  },
  email: {
    type: String,
    require: true,
  },
  message: {
    type: String,
    require: true,
  },
  createdAt: {
    type: Date,
    default: () => Date.now(),
    immutable: true,
  },
});
const About = models.About || model("About", aboutSchema);
export default About;
