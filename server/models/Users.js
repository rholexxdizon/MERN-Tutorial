const mongoose = require('mongoose')

//create schema for model
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
});

//create usermodel - parameters(name of collection, schema that represents the model)
const UserModel = mongoose.model("users", UserSchema);
//export outside the file 
module.exports = UserModel;