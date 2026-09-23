const enrollmentService = require("../Services/enrollment.service");

const enrollCourse = async (req, res) => {

    try {

        const studentId = req.user.userId;
        const courseId = req.params.courseId;

        const enrollment = await enrollmentService.enrollStudent(
            studentId,
            courseId
        );

        res.status(201).json({
            status: true,
            msg: "Course enrolled successfully",
            enrollment
        });

    } catch (error) {

        res.status(400).json({
            status: false,
            msg: error.message
        });

    }
};

const getMyCourses = async (req, res) => {

    try {

        const studentId = req.user.userId;

        const enrollments =
            await enrollmentService.getMyCourses(studentId);

        res.status(200).json({
            status: true,
            msg: "Enrolled courses fetched successfully",
            courses: enrollments
        });

    } catch (error) {

        res.status(500).json({
            status: false,
            msg: "Failed to fetch enrolled courses",
            error: error.message
        });

    }
};

module.exports = {
    enrollCourse,
    getMyCourses
};