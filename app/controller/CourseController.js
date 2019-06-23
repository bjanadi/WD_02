const express = require('express');
const router = express.Router();
const CourseRepository = require('../repository/CourseRepository');




router.get('/get-courses', (req, res, next) => {
    CourseRepository.getAllCourses().then((courses) => {
        res.status(courses.status).send(courses.courses)
    }).catch(err => {
        res.status(err.status).send(err.message)
    })
});

router.post('/add-course', (req, res, next) => {
    const body = req.body;
    CourseRepository.insertCourse(body).then((data) => {
        res.status(data.status).send(data.message)
    }).catch(err => {
        res.status(err.status).send(err.message)
    })
});

router.delete('/delete/:code', (req, res) => {
    CourseRepository.delete(req.params.code).then(data => {
        res.status(data.status).send(data.message)
    }).catch(err => {
        res.status(err.status).send({message: err.message});
    })
});




module.exports = router;