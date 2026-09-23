const errorMiddleware = (err, req, res, next) => {

    console.log(err);

    res.status(err.statusCode || 500).json({
        status: false,
        msg: err.message || "Internal Server Error"
    });
};

module.exports = errorMiddleware;