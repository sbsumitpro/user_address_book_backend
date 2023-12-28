import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:String,
    email:{
        type:String,
        unique:true
    },
    address:String,
    className:String,
    phone:Number,
    image: String
})

const UserModel = mongoose.model("users", userSchema);
export default UserModel;