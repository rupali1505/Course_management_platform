const {UserService} = require("../Services/userAuth.service");
const userService = new UserService();
const registerUser = async (req,res)=>{
    const {name,email,password,role} = req.body;
    try {
        const response = await userService.registerUser({ name, email, password, role });
        res.status(200).json({
            msg:"user register successfully",
            data:response
        })
    } catch (error) {
        res.status(500).json({
            status:false,
            mag:error
        })
    }
    

}

const logInUser = async(req, res) => {
const {email,password} = req.body;
try {
    const response = userService.logInUser({ email, password });
    res.status(200).json({
        token:response,
        msg:"user logIn successful"
    })
} catch (error) {
    res.status(500).json({
        status:false,
        msg:error
    })
}
    
}

module.exports = {
    registerUser,
    logInUser
}