const courseModel = require("../Model/courseModel");

class CourseService {

    createCourse = async ({
        title,
        description,
        category,
        price,
        thumbnail,
        createdBy
    }) => {

        const course = new courseModel({
            title,
            description,
            category,
            price,
            thumbnail,
            createdBy
        });

        const response = await course.save();

        return response;
    };

    getAllCourses = async () => {

        const courses = await courseModel.find();

        return courses;
    };


    getCourseById = async (courseId) => {

        const course = await courseModel.findById(courseId);

        return course;
    };

    updateCourse = async (courseId, courseData) => {

        const course = await courseModel.findByIdAndUpdate(
            courseId,
            courseData,
            {
                new: true,
                runValidators: true
            }
        );

        return course;
    };

    deleteCourse = async (courseId) => {

        const course = await courseModel.findByIdAndDelete(courseId);

        return course;
    };
}

module.exports = new CourseService();