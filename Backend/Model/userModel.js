const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        maxLength:20
    },
    email:{
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ["student", "admin"],
        default: "student"
    }
},{
    timestamps:true
}

)

const userModel = mongoose.model('User',userSchema);

module.exports = userModel;