const mongoose = require("mongoose");
const Schema= mongoose.Schema;

const signUpSchema = new Schema({
    email:{
        type:String,
        required: [true, "Must Enter email"],
        unique:[true,"UserName not Valid"],
        minlength:[6,"UserName must be 6 characters"],
        maxlength:[12,"UserName must be no more than 12 characters"],  
    },
    password:{
        type:String,
        required:[true,"Must Enter Password"],
        unique:[true, ],
        minlength:[8,"Password must be 8 characters"],
        maxlength:[10,"Password must be no more than 12 characters"]
    }



})

const signup= mongoose.model("signup", signUpSchema);

module.exports = signup;