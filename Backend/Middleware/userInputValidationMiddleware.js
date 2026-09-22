const { validateInput } = require("../Validator/userInputValidation");

function userInputValidationMiddleware(req,res,next){
    const response = validateInput(req.body);
    if(response !== true){
        res.status(400).json({
            status:false,
            msg:response
        })
    }else{
        next()
    }
}

module.exports = {
    userInputValidationMiddleware
}