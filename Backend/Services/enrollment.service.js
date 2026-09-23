const enrollmentModel = require("../Model/enrollmentModel");
const courseModel = require("../Model/courseModel");

class EnrollmentService {

    enrollStudent = async (studentId, courseId) => {

        // Check whether course exists
        const course = await courseModel.findById(courseId);

        if (!course) {
            throw new Error("Course not found");
        }

        // Check duplicate enrollment
        const existingEnrollment = await enrollmentModel.findOne({
            student: studentId,
            course: courseId
        });

        if (existingEnrollment) {
            throw new Error("Already enrolled in this course");
        }

        // Create enrollment
        const enrollment = new enrollmentModel({
            student: studentId,
            course: courseId
        });

        return await enrollment.save();
    };

    getMyCourses = async (studentId) => {

        const enrollments = await enrollmentModel
            .find({ student: studentId })
            .populate("course");

        return enrollments;
    };
}

module.exports = new EnrollmentService();