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
      
      if(!user){
        throw new Error("user not found")
      }
      const isMatch = await bcrypt.compare(password,user.password);
      

      if(!isMatch){
        throw new Error("password is incorrect")
      }else{
        const token = this.generateToken({email});
        return token
      }
    }

    

    generateToken = ({email})=>{
        const payload = {
            email
        }
        const option = {
            expiresIn:"30d"
        }
       
        const JWT_SECRET = process.env.JWT_SECRET;
        
        const token = jwt.sign(payload, JWT_SECRET,option);
        console.log(token, 'token')
        return token
    }
}

module.exports = {
    UserService
}