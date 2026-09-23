const {
    enrollCourse,
    getMyCourses
} = require("../Controller/enrollment.controller");

const userAuthMiddleware = require("../Middleware/userAuthMiddleware");
const studentMiddleware = require("../Middleware/studentMiddleware");
const idValidationMiddleware =
    require("../Middleware/idValidationMiddleware");

const express = require("express");

const router = express.Router();


router.get(
    "/my-courses",
    userAuthMiddleware,
    studentMiddleware,
    getMyCourses
);
router.post(
    "/:courseId",
    userAuthMiddleware,
    studentMiddleware,
    idValidationMiddleware("courseId"),
    enrollCourse
);

module.exports = router;