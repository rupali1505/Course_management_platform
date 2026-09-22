const joi = require("joi");

const userInputSchema = joi.object({
    name:joi.string().min(5).max(20).required(true),
    email:joi.string().required(true),
    password: joi.string().required(true),
});

function validateInput(body){
    const response = userInputSchema.validate(body);
    const error = response.error
    if(error){
        return error
    }
    return true;
}

module.exports = {
    validateInput
}