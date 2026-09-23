const {
    markLessonCompleted,
    getCourseProgress
} = require("../Controller/progress.controller");

const userAuthMiddleware = require("../Middleware/userAuthMiddleware");
const studentMiddleware = require("../Middleware/studentMiddleware");
const idValidationMiddleware =
    require("../Middleware/idValidationMiddleware");

const express = require("express");

const router = express.Router();



router.post(
    "/:courseId/:lessonId",
    userAuthMiddleware,
    studentMiddleware,
    idValidationMiddleware("courseId"),
    idValidationMiddleware("lessonId"),
    markLessonCompleted
);
router.get(
    "/:courseId",
    userAuthMiddleware,
    studentMiddleware,
    idValidationMiddleware("courseId"),
    getCourseProgress
);

module.exports = router;