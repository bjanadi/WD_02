const express = require('express');
const router = express.Router();
const IAssignmentRepository = require('../repository/IAssignmentRepository');




router.get('/get-assignments', (req, res, next) => {
    IAssignmentRepository.getAllAssignments().then((assignments) => {
        res.status(assignments.status).send(assignments.assignments)
    }).catch(err => {
        res.status(err.status).send(err.message)
    })
});

router.post('/add-assignment', (req, res, next) => {
    const body = req.body;
    IAssignmentRepository.insertAssignment(body).then((data) => {
        res.status(data.status).send(data.message)
    }).catch(err => {
        res.status(err.status).send(err.message)
    })
});

router.put('/update-assignment/:id', (req, res, next) => {
    const id = req.params.id;
    const user = req.body;
    IAssignmentRepository.update(id, user).then(data => {
        res.status(data.status).send({message: data.message});
    }).catch(err => {
        res.status(err.status).send({message: "Error: " + err});
    })
});


router.delete('/delete-assignment/:id', (req, res, next) => {
    const id = req.params.id;
    IAssignmentRepository.delete(id).then(data => {
        res.status(data.status).send({message: data.message});
    }).catch(err => {
        res.status(err.status).send({message: "Error: " + err});
    })
});

module.exports = router;