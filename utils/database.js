import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);
  if (isConnected) {
    console.log("Already connected to database");
    return;
  }
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "promptopia",
    });
    isConnected = true;
    console.log("Connected to database");
  } catch (error) {
    console.log(error);
    process.exit(1); // graceful exit
  }
};
