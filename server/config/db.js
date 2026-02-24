import mongoose from "mongoose";

const connectDB = async () => {
    try {
        mongoose.connection.on("connected", () => console.log("Mongoose connected to DB"));
        await mongoose.connect(`${process.env.MONGODB_URI}/hotelbooking`);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }   
};

export default connectDB;
//This code sets up a connection to a MongoDB database using Mongoose. It defines an asynchronous function `connectDB` that attempts to connect to the database using the URI specified in the environment variable `MONGODB_URI`. If the connection is successful, it logs a success message; if it fails, it logs the error and exits the process.