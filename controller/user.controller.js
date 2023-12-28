import validator from "validator";
import UserModel from "../model/user.model.js";
import UserRepository from "../model/user.repository.js"

export class UserContoller{

    async create(req,res){

        const newUser = await UserRepository.create(req.body)
        if(newUser){
            return res.status(201).send({
                "msg":"success",
                "userData":newUser
            })
        }else{
            return res.status(500).send("Something went wrong, please try again later")
        }
    }

    async get(req,res){
        const users = await UserRepository.get();
        return res.status(200).send(users);
    }

    async update(req, res){
        const {name, email, address, phone} =req.body;
        const user = await UserModel.findOne({email:email})
        if(!user){
            return res.status(404).send("No user found with the email id")
        }
        // validating if the user passes the required field to create a new user,
        if(!name || !email || !address || !phone){
            return res.status(400).send("Name, Email, address and phone number must be passed to update an existing user")
        }
        await UserRepository.update(req.body)
        return res.status(200).send("User data updated successfully");
    }

    async delete(req, res){
        const {email} = req.body;
        if(!email){
            return res.status(400).send("Please provide email id for deleting the user")
        }
        const user = await UserModel.findOne({email:email})
        if(!user){
            return res.status(404).send("No user found with the email id")
        }
        await UserRepository.delete(email);
        return res.status(200).send("User record has been deleted successfully")
    }
}