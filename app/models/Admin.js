const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');


const AdminSchema = new Schema({
    username: {
        type: String,
        unique:true
    },
    password: {
        type: String,
        minlength:6,
        maxlength:12
    },
    email: {
        type: String,
        unique: true
    },

    phone: {
        type: Number,
        maxlength: 10
    },


});

AdminSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSalt(6), null);
};
AdminSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};

module.exports = AdminModel = mongoose.model('admin',AdminSchema);