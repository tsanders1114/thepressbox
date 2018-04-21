const mongoose = require("mongoose");
const Schema= mongoose.Schema;

const signUpSchema = new Schema({
    email:{
        type:String,
        required: [true, "Must Enter email"],
        unique:[true,"UserName not Valid"],
        minlength:[6,"UserName must be 6 characters"] 
    }

})

const signup= mongoose.model("signup", signUpSchema);

module.exports = signup;