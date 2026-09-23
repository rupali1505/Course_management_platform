const jwt = require("jsonwebtoken");
const env = require("dotenv");

env.config();

const userAuthMiddleware = (req, res, next) => {

    const authorization = req.headers.authorization;

    if (!authorization) {
        return res.status(401).json({
            status: false,
            msg: "Unauthorized access"
        });
    }

    const token = authorization.split(" ")[1];

    if (!token) {
        return res.status(401).json({
            status: false,
            msg: "Token is missing"
        });
    }

    const JWT_SECRET = process.env.JWT_SECRET;

    jwt.verify(token, JWT_SECRET, (error, decoded) => {

        if (error) {
            return res.status(401).json({
                status: false,
                msg: "Invalid Token"
            });
        }

        req.user = decoded;

        next();
    });
};

module.exports = userAuthMiddleware;