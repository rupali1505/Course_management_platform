const {
    getStudentDashboard,
    getAdminDashboard
} = require("../Controller/dashboard.controller");

const userAuthMiddleware = require("../Middleware/userAuthMiddleware");
const studentMiddleware = require("../Middleware/studentMiddleware");
const adminMiddleware = require("../Middleware/adminMiddleware");

const express = require("express");

const router = express.Router();



router.get(
    "/student",
    userAuthMiddleware,
    studentMiddleware,
    getStudentDashboard
);
router.get(
    "/admin",
    userAuthMiddleware,
    adminMiddleware,
    getAdminDashboard
);

module.exports = router;