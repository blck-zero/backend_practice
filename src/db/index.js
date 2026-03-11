import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
import { response } from "express";

const MONGO_URI=process.env.MONGO_URL
 const connectDB=async ()=>{
    try {
      const reponse= await mongoose.connect(`${MONGO_URI}/${DB_NAME}`)
      console.log(`Mongo Connected : DB HOST- ${reponse.connection.host}`)


    } catch (error) {
        console.log("MONGO DB error--",error)
        process.exit(1)
    }
}

export default connectDB