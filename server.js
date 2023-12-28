import express, { application } from "express";
import cors from "cors"
import {} from "dotenv/config";
import { connectUsingMongoose } from "./config/mongooseConfig.js";
import userRouter from "./routes/user.routes.js"

const PORT =  process.env.PORT || 4500;

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/users",userRouter);

app.get("/",(req,res)=>{
    res.send("Welcome to User addressbook");
})


// server setup
app.listen(PORT, (err)=>{
    console.log(`Server started and running at port::${PORT}`);
    connectUsingMongoose()
}) 