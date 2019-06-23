const express = require('express');
const router = express.Router();
const AdminRepository = require('../repository/AdminRepository');
const Admin = require('../models/Admin');
const AdminSession = require('../models/AdminSession');


router.put('/update_admin/:username', (req, res) => {
   AdminRepository.updateAdmin(req.params.username, req.body).then((data) => {
       res.status(data.status).send(data.admins)
   }).catch(err => {
       res.status(err.status).send(err.message)
   })
});

router.get('/get-admins', (req, res, next) => {
    AdminRepository.getAllAdmins().then((admins) => {
        res.status(admins.status).send(admins.admins)
    }).catch(err => {
        res.status(err.status).send(err.message)
    })
});

router.post('/register-admin', (req, res, next) => {
    const body = req.body;
    AdminRepository.insertAdmin(body).then((data) => {
        res.status(data.status).send(data.message)
    }).catch(err => {
        res.status(err.status).send(err.message)
    })
});


//logging to the system

router.post('/login' , (req,res,next) => {
    const{body} = req;
    const {
        password
    }= body;
    let {
        email
    } = body;

    if(!email){
        return res.send({
            success:false,
            message: 'Error: Email cannot be blank'
        });
    }
    if(!password){
        return res.send({
            success:false,
            message:'Error: Password cannot be blank'
        })
    }
    Admin.find( {email:email} ,(err, admins) => {
        if(err){
            return res.send({
                success:false,
                message: 'Error: Email is not in the database'
            });
        }
        if(admins.length !== 1 ){
            return res.send({
                success:false,
                message: 'Error: Invalid Login '
            });
        }
        const admin = admins[0];
        const adminSession = new AdminSession();
        adminSession.email = admin.email;
        adminSession.save((err,doc) => {
            if(err){
                return res.send({
                    success:false,
                    message:'Error:server Error in saving admin session'
                });
            }
            return res.send({
                success:true,
                message:'Valid Login',
                token:doc._id
            })
        })
    })
});





module.exports = router;