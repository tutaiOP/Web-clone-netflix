import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

export const connectDB = async () => {

    try {
        const connect = await mongoose.connect(process.env.mongoUrl)
        console.log(`MongoDB Connected: ${connect.connection.host}`);

    } catch (error) {
        console.log(`Error: ${error.message}`);
        process.exit(1);
    }
}