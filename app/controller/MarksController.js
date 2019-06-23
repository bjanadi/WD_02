const express = require('express');
const router = express.Router();
const MarksRepository = require('../repository/MarksRepository');
const Course = require('../models/Course');

router.post('/assign-marks', (req, res, next) => {
    const body = req.body;
    MarksRepository.insertMarks(body).then((data) => {
        res.status(data.status).send(data.message)
    }).catch(err => {
        res.status(err.status).send(err.message)
    })
});

router.get('/get-marks', (req, res, next) => {
    MarksRepository.getAllMarks().then((assignmentMarks) => {
        res.status(assignmentMarks.status).send(assignmentMarks.assignmentMarks)
    }).catch(err => {
        res.status(err.status).send(err.message)
    })
});

// router.get('/courseID', (req, res) => {
//     MarksRepository.getByID(req.params.code).then((assignmentMark) => {
//         res.status(assignmentMark.status).send(assignmentMark.assignmentMark)
//     }).catch(err => {
//         res.status(err.status).send({message:err.message})
//     })
// });

// router.get('/marks:courseID', (req, res) => {
//     MarksRepository.getByCourseID(req.params.code).then((assignmentMarks) => {
//         res.status(assignmentMarks.status).send(assignmentMarks.assignmentMarks)
//     }).catch(err => {
//         res.status(err.status).send({message:err.message})
//     })
// });


router.get('/:assignmentID', (req, res, next) => {
    const assignmentID = req.params.assignmentID;
    MarksRepository.getByID(assignmentID).then((marks) => {
        res.status(marks.status).send(marks.marks)
    }).catch(err => {
        res.status(err.status).send(err.message)
    })
});


router.get('/view-courses', (req, res, next) => {
    MarksRepository.getAllCourses().then((name) => {
        res.status(name.status).send(name.name)
    }).catch(err => {
        res.status(err.status).send(err.message)
    })
});

//get courses
router.get('/getCourses',(req,res) => {
    Course.find()
        .then(courses => res.json(courses))
});
module.exports = router;