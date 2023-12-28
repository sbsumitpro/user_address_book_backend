import validator from "validator";
import UserModel from "../model/user.model.js";

export const validatorMiddleware = async(req, res, next)=>{
    const {name, email, address, phone} =req.body;

    // validating if the user passes the required field to create a new user,
    if(!name || !email || !address || !phone){
        return res.status(400).send("Name, Email, address and phone number must be passed to create a new user")
    }

    // validating if the given email is in the right format using npm validator package
    if(!validator.isEmail(email)){
        return res.status(400).send("Enter the email in correct format")
    }

    // Validating if the entered phone number is valid as per Indian standard
    if(!validator.isMobilePhone(phone.toString(),"en-IN")){
        return res.status(400).send("Enter your mobile number in correct format");
    }

    // validating if the user email id already exists in the database and return an error message
    let user = await UserModel.findOne({email:email})

    if(user){
        return res.status(400).send("User already exists with this email id");
    }

    next();
}