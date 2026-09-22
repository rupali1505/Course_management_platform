const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const authRoute = require("./Router/userAuth.route");

const app = express();
app.use(express.json());
app.use("/api/user",authRoute);


mongoose.connect(process.env.Mongo_URI).then(()=>{
    console.log("Connected to MongoDB");
});

app.listen(process.env.PORT,()=>{
    console.log('server is running on port 5000');
})