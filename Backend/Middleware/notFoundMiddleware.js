const notFoundMiddleware = (req, res, next) => {

    res.status(404).json({
        status: false,
        msg: `Route not found: ${req.originalUrl}`
    });
};

module.exports = notFoundMiddleware;