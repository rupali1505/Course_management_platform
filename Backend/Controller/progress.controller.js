const progressService = require("../Services/progress.service");

const markLessonCompleted = async (req, res) => {

    try {

        const studentId = req.user.userId;
        const courseId = req.params.courseId;
        const lessonId = req.params.lessonId;

        const progress = await progressService.markLessonCompleted(
            studentId,
            courseId,
            lessonId
        );

        res.status(200).json({
            status: true,
            msg: "Lesson marked as completed",
            progress
        });

    } catch (error) {

        res.status(400).json({
            status: false,
            msg: error.message
        });

    }
};

const getCourseProgress = async (req, res) => {

    try {

        const studentId = req.user.userId;
        const courseId = req.params.courseId;

        const progress = await progressService.getCourseProgress(
            studentId,
            courseId
        );

        res.status(200).json({
            status: true,
            msg: "Course progress fetched successfully",
            progress
        });

    } catch (error) {

        res.status(400).json({
            status: false,
            msg: error.message
        });

    }
};

module.exports = {
    markLessonCompleted,
    getCourseProgress
};