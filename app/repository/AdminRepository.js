const mongoose = require('../models/Admin');
// mongoose.set('useFindAndModify', false);
const AdminModel = mongoose.model('admin');

const AdminRepository = function () {
    //insert the new admin
    this.insertAdmin = (admin) => {
        return new Promise((resolve, reject) => {
            const newAdmin = new AdminModel({
                username: admin.username,
                password: admin.password,
                email: admin.email,
                phone: admin.phone
            });

            newAdmin.save().then(() => {
                resolve({status: 200, message: "Admin is successfully registered to the system"});
            }).catch(err => {
                reject({status: 500, message: "Error: " + err})
            })
        })
    };
    //get all the admin details
    this.getAllAdmins = () => {
        return new Promise((resolve, reject) => {
            AdminModel.find().exec().then((admin) => {
                resolve({status: 200, admins: admin})
            }).catch(err => {
                reject({status: 404, message: "Error: " + err})
            })
        })
    }

    this.updateAdmin = (username, admin) => {
        return new Promise( (resolve, reject) => {
            AdminModel.findOneAndUpdate(
                {
                    username:username
                },
                {
                    password:admin.password,
                    email:admin.email,
                    phone:admin.phone
                }
            ).then( () =>{
                resolve({status:200, message:"Updated"})
            }).catch(err=>{
                reject({status:500, message:err})
            })
        })
    }
};

module.exports = new AdminRepository();