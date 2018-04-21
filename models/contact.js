const mongoose = require("mongoose");
const Schema= mongoose.Schema;

const contactUsSchema = new Schema({
    name:{
        type:String,
        required: [true, "Must Enter email"],
        unique:[true,"UserName not Valid"],
        minlength:[6,"UserName must be 6 characters"] ,
    }

})

const contact= mongoose.model("contact", contactUsSchema);

module.exports = contact;