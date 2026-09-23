const jwt = require("jsonwebtoken");
const env = require("dotenv");
env.config();

const userAuthMiddleware = (req,res,next)=>{
    const authorization = req.headers.authorization;
    const token = authorization !== null ? authorization.split(" ")[1];
    if(!token){
        res.status(401).json({
            status:false,
            mag:"Unauthorized access"
        })
    }else{
        const secret = process.env.secret
        jwt.verify(token,secret,(error,decoded)=>{
            if(error){
                res.status(401).json({
                    statue:false,
                    msg:"Invalid Token",
                    error:error
                })
            }else{
                next()
            }
        })
    }
}

module.exports = userAuthMiddleware