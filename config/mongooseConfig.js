import mongoose from "mongoose";
import {} from "dotenv/config";

const url = process.env.MONGO_URL;

export const connectUsingMongoose = async()=>{
    try{
        await mongoose.connect(url)
        console.log("MongoDB connected using mongoose");

    }catch(err){
        console.log("Error while connecting with the DB");
        console.log(err);
    }
}