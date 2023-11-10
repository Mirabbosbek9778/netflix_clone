import mongoose, { ConnectOptions } from "mongoose";

let isConnected: boolean = false;

export const connectToDatabase = async () => {
  mongoose.set("strictQuery", true);
  if (!process.env.MONGODB_URL) {
    throw new Error("Not found MongoDb configuration env");
  }

  if (isConnected) {
    return;
  }

  try {
    const options: ConnectOptions = {
      dbName: "netflix",
      autoCreate: true,
    };
    await mongoose.connect(process.env?.MONGODB_URL, options);

    isConnected = true;

    console.log("Mango db connected");
  } catch (e) {
    console.log("Mangodb connection error: Please make to Mongo runnging");
  }
};
