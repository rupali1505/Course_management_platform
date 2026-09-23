const {
    createCourse,
    getAllCourses,
    getCourseById,
    updateCourse,
    deleteCourse
} = require("../Controller/course.controller");

const userAuthMiddleware = require("../Middleware/userAuthMiddleware");
const validate = require("../Middleware/validation.middleware");
const {
    courseSchema,
    updateCourseSchema
} = require("../Validator/course.validator");
const adminMiddleware = require("../Middleware/adminMiddleware");
const idValidationMiddleware =
    require("../Middleware/idValidationMiddleware");

const express = require("express");

const router = express.Router();




router.post(
    "/create",
    userAuthMiddleware,
    adminMiddleware,
    validate(courseSchema),
    createCourse
);

router.get("/all", getAllCourses);
router.get("/:id", idValidationMiddleware,getCourseById);
router.put(
    "/:id",
    userAuthMiddleware,
    adminMiddleware,
    idValidationMiddleware,
    validate(updateCourseSchema),
    updateCourse
);

router.delete(
    "/:id",
    userAuthMiddleware,
    adminMiddleware,
    idValidationMiddleware,
    deleteCourse
);

module.exports = router;