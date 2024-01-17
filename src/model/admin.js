const mongoose = require('mongoose');

const adminSchema = mongoose.Schema({
    userName: {
        type: String,
        required: [true, "User Name is required!..."],
        minlength: 4,
    }, 
    password: {
        type: String,
        required: true,
        select: false
    }
});


const admin = new mongoose.model('admin', adminSchema);

module.exports = admin;