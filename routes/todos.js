import express from "express";

export const router = express.Router()


router.route("/todos").get( (req,res) => {
    res.send(
     {
         message: [
             {message1:"1" ,message2 :"2"}
         ]
     }
    );
 })