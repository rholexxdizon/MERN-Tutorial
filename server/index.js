//import express library
const express = require("express");
//create a variable to represents all the express stuff from the library
const app = express();
//setup MongoDb connection
const mongoose = require('mongoose');
//add connection string from MongoDB Driver connect to MongoDB Compass 
mongoose.connect(
    "mongodb+srv://dizonrholex02:COmd3lDIoVXIEB4q@cluster0.iixu3.mongodb.net/merntutorial?retryWrites=true&w=majority&appName=Cluster0"
);
//get access to Users Model
const UserModel = require('./models/Users');
//be able to call api using react
const cors = require('cors');


//use to read json for POST createUser 
app.use(express.json());
//use cors
app.use(cors());

//API endpoints

//parameters: route, callback function req - get information and show in frontend and res - send information from backend to frontend
app.get("/getUsers", async (req, res) => {
//after importing UserModel, use the function find to display all the data. Call back function err, result
    try{
        const result = await UserModel.find({});
        res.json(result);
    } catch(err) {
        res.json(err);
    }
});


app.post("/createUser", async (req, res) => {
    try {
        const user = req.body;
        const newUser = new UserModel(user);
        await newUser.save();
        res.json(user);
    } catch(err) {
        res.json(err);
    }
});




app.listen(3001, () => {
    console.log("SERVER RUNS PERFECTLY!");
});
