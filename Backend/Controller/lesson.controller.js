const lessonService = require("../Services/lesson.service");

const createLesson = async (req, res) => {

    try {

        const courseId = req.params.courseId;

        const {
            title,
            description,
            videoUrl,
            order
        } = req.body;

        const lesson = await lessonService.createLesson({
            course: courseId,
            title,
            description,
            videoUrl,
            order
        });

        res.status(201).json({
            status: true,
            msg: "Lesson created successfully",
            lesson
        });

    } catch (error) {

        res.status(400).json({
            status: false,
            msg: error.message
        });

    }
};

const getLessonsByCourse = async (req, res) => {

    try {

        const courseId = req.params.courseId;

        const lessons =
            await lessonService.getLessonsByCourse(courseId);

        res.status(200).json({
            status: true,
            msg: "Lessons fetched successfully",
            lessons
        });

    } catch (error) {

        res.status(500).json({
            status: false,
            msg: "Failed to fetch lessons",
            error: error.message
        });

    }
};

module.exports = {
    createLesson,
    getLessonsByCourse
};