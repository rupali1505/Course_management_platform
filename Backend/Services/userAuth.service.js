const userModel = require("../Model/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")
class UserService{
    registerUser = async({ name, email, password, role })=>{
        const hashPassword = await bcrypt.hash(password,10)
        const userObj = new userModel({ name, email, password:hashPassword, role });
        try {
            const response = await userObj.save();
            return response;
        } catch (error) {
            return error
        }
    }

    logInUser = async({ email, password })=>{
      const user = await userModel.findOne({email});
      console.log(user,'user')
      const isMatch = await bcrypt.compare(password,user.password);
      console.log(isMatch);
      if(!isMatch){
        throw new error("password is incorrect")
      }else{
        const token = this.generateToken({email});
        return token
      }
    }

    generateToken = async({email})=>{
        const payload = {
            email
        }
        const option = {
            expiresIn:"1000*60*60*24*30"
        }
        const secret = process.env.secret;
        const token = await jwt.sign(payload,secret,option);
        return token
    }
}

module.exports = {
    UserService
}