const courseService = require("../Services/course.service");

const createCourse = async (req, res) => {

    try {

        const {
            title,
            description,
            category,
            price,
            thumbnail
        } = req.body;

        const course = await courseService.createCourse({
            title,
            description,
            category,
            price,
            thumbnail,
            createdBy: req.user.userId
        });

        res.status(201).json({
            status: true,
            msg: "Course created successfully",
            course
        });

    } catch (error) {

        res.status(500).json({
            status: false,
            msg: "Failed to create course",
            error: error.message
        });

    }
};

const getAllCourses = async (req, res) => {

    try {

        const courses = await courseService.getAllCourses();

        res.status(200).json({
            status: true,
            msg: "Courses fetched successfully",
            courses
        });

    } catch (error) {

        res.status(500).json({
            status: false,
            msg: "Failed to fetch courses",
            error: error.message
        });

    }
};

const getCourseById = async (req, res) => {

    try {

        const courseId = req.params.id;

        const course = await courseService.getCourseById(courseId);

        if (!course) {
            return res.status(404).json({
                status: false,
                msg: "Course not found"
            });
        }

        res.status(200).json({
            status: true,
            msg: "Course fetched successfully",
            course
        });

    } catch (error) {

        res.status(500).json({
            status: false,
            msg: "Failed to fetch course",
            error: error.message
        });

    }
};

const updateCourse = async (req, res) => {

    try {

        const courseId = req.params.id;

        const {
            title,
            description,
            category,
            price,
            thumbnail
        } = req.body;

        const course = await courseService.updateCourse(
            courseId,
            {
                title,
                description,
                category,
                price,
                thumbnail
            }
        );

        if (!course) {
            return res.status(404).json({
                status: false,
                msg: "Course not found"
            });
        }

        res.status(200).json({
            status: true,
            msg: "Course updated successfully",
            course
        });

    } catch (error) {

        res.status(500).json({
            status: false,
            msg: "Failed to update course",
            error: error.message
        });

    }
};

const deleteCourse = async (req, res) => {

    try {

        const courseId = req.params.id;

        const course = await courseService.deleteCourse(courseId);

        if (!course) {
            return res.status(404).json({
                status: false,
                msg: "Course not found"
            });
        }

        res.status(200).json({
            status: true,
            msg: "Course deleted successfully"
        });

    } catch (error) {

        res.status(500).json({
            status: false,
            msg: "Failed to delete course",
            error: error.message
        });

    }
};

module.exports = {
    createCourse,
    getAllCourses,
    getCourseById,
    updateCourse,
    deleteCourse
};