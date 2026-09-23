const studentMiddleware = (req, res, next) => {

    if (req.user.role !== "student") {
        return res.status(403).json({
            status: false,
            msg: "Access denied. Students only."
        });
    }

    next();
};

module.exports = studentMiddleware;