const mongoose = require('../models/Course');
const CourseModel = mongoose.model('course');

const CourseRepository = function () {
    //insert the new course
    this.insertCourse = (course) => {
        return new Promise((resolve, reject) => {
            const newCourse = new CourseModel({
                code: course.code,
                name: course.name,
                credits:course.credits,
                lecturerincharge: course.lecturerincharge,
                instructor: course.instructor,
            });

            newCourse.save().then(() => {
                resolve({status: 200, message: "Course is successfully added to the system"});
            }).catch(err => {
                reject({status: 500, message: "Error: " + err})
            })
        })
    };
    //get all the course details
    this.getAllCourses = () => {
        return new Promise((resolve, reject) => {
            CourseModel.find().exec().then((course) => {
                resolve({status: 200, courses: course})
            }).catch(err => {
                reject({status: 404, message: "Error: " + err})
            })
        })
    }
};

module.exports = new CourseRepository();