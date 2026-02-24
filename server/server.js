import express from "express";  
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/db.js";
import { clerkMiddleware } from '@clerk/express'
import clerkWebhooks from "./controllers/clerkwebhook.js";


connectDB();

const app = express();

app.use(cors());// Enable CORS for all routes


//middleware for clerk
app.use(express.json());
app.use(clerkMiddleware());

//api to listen to webhook events from clerk

app.use("/api/clerk", clerkWebhooks);

app.get("/", (req, res) => res.send("API is working fine okay"))

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
//basic express server setup with CORS enabled, listening on a specified port, and a simple route to test the API.

