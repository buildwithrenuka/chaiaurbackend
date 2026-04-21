// import mongoose from "Mongoose"
// import {DB_NAME} from "./constants.js"
import dotenv from "dotenv"
import connectDB from "../db/index.js"

dotenv.config({

    path:'./env'
})

connectDB()


/*
import express from "express"
const app=express()

;(async ()=>{

    try{

        mongoose.connect(`${process.env.DATABASE_URL}/${DB_NAME}`)
        app.on("error",(error)=>{

            console.log("ERR:",error)
            throw error
        })
        app.listen(process.env.PORT,()=>{

            console.log(`App is listening on port ${PORT}`)
        })
          
    }
    catch(error){

        console.log("Error",error)
        throw err
    }
})()
*/