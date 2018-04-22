const mongoose = require("mongoose");
const Schema= mongoose.Schema;

const contactUsSchema = new Schema({
    name:{
        type:String,
        required: [true, "Must Enter email"],
        unique:[true,"UserName not Valid"],
        minlength:[6,"UserName must be 6 characters"] ,
    },
    emailAddress:{
        type:String,
        required: [true, "Must Enter email"],
        unique:[true,"Email not Valid"],
        minlength:[6,"Email must be 6 characters"],
        maxlength:[50,"Email must be no more than 12 characters"],  
    },
    Subject:{
        type:String,
        required:[false,"Must Enter Subject"],
        unique:[true, "Subject is required" ],
        minlength:[8,"Subject must be 8 characters"],
        maxlength:[20,"Subject must be no more than 20 characters"],
    },
    message:{
        type:String,
        required: [true, "Must Enter a  Message"],
        minlength:[10,"Message must be 10 characters"],
        maxlength:[140,"Message must be no more than 140 characters"],  
    },

})

const contact= mongoose.model("contact", contactUsSchema);

module.exports = contact;