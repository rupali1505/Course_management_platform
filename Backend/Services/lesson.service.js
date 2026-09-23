const lessonModel = require("../Model/lessonModel");
const courseModel = require("../Model/courseModel");

class LessonService {

    createLesson = async ({
        course,
        title,
        description,
        videoUrl,
        order
    }) => {

        const existingCourse = await courseModel.findById(course);

        if (!existingCourse) {
            throw new Error("Course not found");
        }

        const lesson = new lessonModel({
            course,
            title,
            description,
            videoUrl,
            order
        });

        return await lesson.save();
    };

    getLessonsByCourse = async (courseId) => {

        const lessons = await lessonModel
            .find({ course: courseId })
            .sort({ order: 1 });

        return lessons;
    };
}

module.exports = new LessonService();