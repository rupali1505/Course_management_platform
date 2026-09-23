const progressModel = require("../Model/progressModel");
const enrollmentModel = require("../Model/enrollmentModel");
const courseModel = require("../Model/courseModel");
const lessonModel = require("../Model/lessonModel");

class ProgressService {

    markLessonCompleted = async (
        studentId,
        courseId,
        lessonId
    ) => {

        // Check course
        const course = await courseModel.findById(courseId);

        if (!course) {
            throw new Error("Course not found");
        }

        // Check lesson
        const lesson = await lessonModel.findById(lessonId);

        if (!lesson) {
            throw new Error("Lesson not found");
        }

        // Check lesson belongs to course
        if (lesson.course.toString() !== courseId) {
            throw new Error("Lesson does not belong to this course");
        }

        // Check student enrollment
        const enrollment = await enrollmentModel.findOne({
            student: studentId,
            course: courseId
        });

        if (!enrollment) {
            throw new Error("You are not enrolled in this course");
        }

        // Create or update progress
        const progress = await progressModel.findOneAndUpdate(
            {
                student: studentId,
                lesson: lessonId
            },
            {
                student: studentId,
                course: courseId,
                lesson: lessonId,
                completed: true
            },
            {
                new: true,
                upsert: true
            }
        );

        return progress;
    };

    getCourseProgress = async (studentId, courseId) => {

        // Check course
        const course = await courseModel.findById(courseId);

        if (!course) {
            throw new Error("Course not found");
        }

        // Check enrollment
        const enrollment = await enrollmentModel.findOne({
            student: studentId,
            course: courseId
        });

        if (!enrollment) {
            throw new Error("You are not enrolled in this course");
        }

        // Get total lessons
        const totalLessons = await lessonModel.countDocuments({
            course: courseId
        });

        // Get completed lessons
        const completedLessons = await progressModel.countDocuments({
            student: studentId,
            course: courseId,
            completed: true
        });

        let percentage = 0;

        if (totalLessons > 0) {
            percentage = Math.round(
                (completedLessons / totalLessons) * 100
            );
        }

        return {
            totalLessons,
            completedLessons,
            percentage
        };
    };
}

module.exports = new ProgressService();