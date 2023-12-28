import UserModel from "./user.model.js";

export default class UserRepository{
    static async create(data){
        try{
            const {name, email, address, className, phone, image} =data

            // save data into the database
            let newUser = await UserModel.create({
                name:name,
                email:email,
                address:address,
                className:className,
                phone:phone,
                image:image
            })
            // console.log("new User is", newUser);
            return newUser;
        }catch(err){
            console.log("Error in saving the data in DB : ", err)
            throw new Error("Something went wrong with the database")
        }
    }

    static async get(){
        try{
            const users = await UserModel.find();
            // console.log(users)
            return users;
        }catch(err){
            console.log("Error in fetching data from DB : ", err)
            throw new Error("Something went wrong with the database")
        }
    }

    static async update(data){
        try{
            const {name, email, address, className, phone, image} =data
            const updatedUser = await UserModel.findOneAndUpdate({email:email},{
                name:name,
                email:email,
                address:address,
                className:className,
                phone:phone,
                image:image
            })
            // console.log("updatedUser",updatedUser)
            return updatedUser;

        }catch(err){
            console.log("Error in updating data in DB : ", err)
            throw new Error("Something went wrong with the database")
        }
    }

    static async delete(email){
        try{
            await UserModel.deleteOne({email:email});

        }catch(err){
            console.log("Error while deleting data from DB : ", err)
            throw new Error("Something went wrong with the database")
        }
    }
} 