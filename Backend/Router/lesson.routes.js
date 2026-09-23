const {
    createLesson,
    getLessonsByCourse
} = require("../Controller/lesson.controller");

const userAuthMiddleware = require("../Middleware/userAuthMiddleware");
const adminMiddleware = require("../Middleware/adminMiddleware");
const validate = require("../Middleware/validation.middleware");
const { lessonSchema } = require("../Validator/lesson.validator");
const idValidationMiddleware =
    require("../Middleware/idValidationMiddleware");

const express = require("express");

const router = express.Router();

router.post(
    "/:courseId",
    userAuthMiddleware,
    adminMiddleware,
    idValidationMiddleware("courseId"),
    validate(lessonSchema),
    createLesson
);

router.get(
    "/course/:courseId",
    userAuthMiddleware,
    idValidationMiddleware("courseId"),
    getLessonsByCourse
);

module.exports = router;