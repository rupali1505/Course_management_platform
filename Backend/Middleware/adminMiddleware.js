const adminMiddleware = (req,res,next)=>{
    if(req.body.role !== "admin"){
     res.status(403).json({
        msg:"access denied. admin only"
     })
    }
    next();
}

module.exports = adminMiddleware