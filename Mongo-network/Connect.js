import mongoose from "mongoose";

export const mongoConnect = async () => {
  try {
    const connect = await mongoose.connect("mongodb://127.0.0.1:27017/Card");
    console.log("mongo db is connected");
  } catch (error) {
    console.log(error.message);
  }
};
