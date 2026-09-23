const enrollmentModel = require("../Model/enrollmentModel");
const lessonModel = require("../Model/lessonModel");
const progressModel = require("../Model/progressModel");

class DashboardService {

    getStudentDashboard = async (studentId) => {

        const enrollments = await enrollmentModel
            .find({ student: studentId })
            .populate("course");

        const dashboard = [];

        for (const enrollment of enrollments) {

            const courseId = enrollment.course._id;

            const totalLessons = await lessonModel.countDocuments({
                course: courseId
            });

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

            dashboard.push({
                course: enrollment.course,
                totalLessons,
                completedLessons,
                percentage
            });
        }

        return dashboard;
    };

    getAdminDashboard = async () => {

        const totalStudents = await userModel.countDocuments({
            role: "student"
        });

        const totalCourses = await courseModel.countDocuments();

        const totalEnrollments = await enrollmentModel.countDocuments();

        const totalLessons = await lessonModel.countDocuments();

        return {
            totalStudents,
            totalCourses,
            totalEnrollments,
            totalLessons
        };
    };
}

module.exports = new DashboardService();