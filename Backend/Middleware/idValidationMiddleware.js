const mongoose = require("mongoose");

const idValidationMiddleware = (paramName) => {

    return (req, res, next) => {

        const id = req.params[paramName];

        if (!mongoose.Types.ObjectId.isValid(id)) {

            return res.status(400).json({
                status: false,
                msg: `Invalid ${paramName}`
            });

        }

        next();
    };
};

module.exports = idValidationMiddleware;