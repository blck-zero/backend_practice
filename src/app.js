import express from 'express'
import cors from 'cors'
import cookieparser from 'cookie-parser'
const app=express()
// for using middle ware we use 'app.use' 



app.use(cors({                          // for acessing backend through frontend 
    origin:process.env.CORS_ORIGIN, //adding origin for allowing it to access the backend 
    credentials:true //
}))



app.use(express.json({  //adding limit for accepting json 
    limit:"16kb"
}))


app.use(express.urlencoded({extended:true,limit:"16kb"})) //use it for encodding the url like http://....harsh%chaudhary%



app.use(express.static("public")) //for storing and access public assest 

app.use(cookieparser()) //cookie parser for coookies






export {app}