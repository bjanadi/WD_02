const express = require('express');
const router = express.Router();
const InstructorRepository = require('../repository/InstructorRepository');




router.get('/get-instructors', (req, res, next) => {
    InstructorRepository.getAllInstructors().then((instructors) => {
        res.status(instructors.status).send(instructors.instructors)
    }).catch(err => {
        res.status(err.status).send(err.message)
    })
});

router.post('/register-instructor', (req, res, next) => {
    const body = req.body;
    InstructorRepository.insertInstructor(body).then((data) => {
        res.status(data.status).send(data.message)
    }).catch(err => {
        res.status(err.status).send(err.message)
    })
});

router.delete('/delete/:username', (req, res) => {
    InstructorRepository.delete(req.params.username).then(data => {
        res.status(data.status).send(data.message)
    }).catch(err => {
        res.status(err.status).send({message: err.message});
    })
});




module.exports = router;