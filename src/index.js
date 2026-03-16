import dotenv from "dotenv"
import express from 'express'
const app=express()

dotenv.config({
    path:".env"
})


import connectDB from "./db/index.js";

connectDB()                       
.then(()=>{
    app.listen(process.env.PORT|| 8000,()=>{
        console.log(`server is running at port ${8000}` )
    })
})
.catch((err)=>{
    console.log('ERROR AT CONNECTING MONGO DB!!!',{err})
})