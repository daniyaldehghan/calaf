import mongoose from "mongoose";

async function ConnectDB() {
  if (mongoose.connections[0].readyState) return;
  await mongoose.connect(process.env.MONGO_URI);
  console.log("connected to DB.");
}

export default ConnectDB;
