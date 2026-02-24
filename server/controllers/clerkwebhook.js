import User from "../models/user.js";
import { Webhook } from "svix";

const webhookSecret = async (req, res) => {
    try {

        //create a svix webhook instance using the secret key from environment variables
       
        const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET);

        //getting headers
        const headers = {
            "svix-id": req.headers["svix-id"],
            "svix-timestamp": req.headers["svix-timestamp"],
            "svix-signature": req.headers["svix-signature"],
        };

        //verify the webhook payload using the svix library

        await whook.verify(JSON.stringify(req.body), headers);

        //geting data from request body
        const {data , type} = req.body;

        const userdata = {
            _id: data.id,
            username: data.first_name + " " + data.last_name,
            email: data.email_addresses[0].email_address,
            image: data.profile_image_url,
            
        }

        // switch case to handle different types of webhook events
        switch (type) {
            case "user.created":
                {await User.create(userdata);
                break;}
            case "user.updated":
               { await User.findByIdAndUpdate(data._id, userdata);
                break;}
            case "user.deleted":
                {await User.findByIdAndDelete(data._id);
                    break;
                }
            default:
                break;
        };
        
        
        res.status(200).json({ message: "Webhook received" });
    } catch (error) {
        console.log(error.message);
        res.json({sucess : false, message: error.message });
    }
}

export default clerkWebhooks;