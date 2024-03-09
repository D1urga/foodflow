import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      "mongodb+srv://anupchaudhary1021:anoop1234@database.yzqvsox.mongodb.net/databases?retryWrites=true&w=majority&appName=database",
    );
    console.log(`mongodb connected ${connectionInstance.connection.host}`);
  } catch (error) {
    console.log("mongoose", error);
    process.exit(1);
  }
};

export { connectDB };
