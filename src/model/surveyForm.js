const mongoose = require('mongoose');

const validator = require('validator');;


const surveyFormSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required!..."],
        minlength: 4,
    }, 
    email: {
        type: String,
        required: [true, "Email is required!..."],
        unique: [true, "This email is already in used."],
        validate(email) {
            if (!validator.isEmail(email)) {
                throw new Error("Invalid Email");
            }
        }
    },
    phone: {
        type: String,
        required: [true, "Phone number is required"],
        unique: [true, "This phone is already in used."],
        validate(phone) {
            if (!validator.isMobilePhone(phone, 'en-IN')) {
                throw new Error("Invalid Phone!...");
            }
        }
    },
    gender: {
        type: String,
        required: [true, "Gender is required!..."]
    },
    nationality:  {
        type: String,
        required: [true, "Nationality is required!..."]
    },
    address: {
        type: String,
        required: [true, "Address is required!..."]
    },
    message:  {
        type: String,
        required: [true, "Message is required!..."]
    }
});

const surveyForm = new mongoose.model('surveyForm', surveyFormSchema);

module.exports = surveyForm;