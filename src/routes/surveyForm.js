const express = require('express');
const router = express.Router();

const surveyForm = require("../model/surveyForm");
const auth = require('../middleware/auth');

router.use(auth);

router.route('/survey-form/')
    .post(async (req, res) => {
        try {
            const newSurvey =  new surveyForm(req.body);
            const result = await newSurvey.save();

            const info = {
                status: true,
                message: "Thank you for your survey",
                result
            }

            res.status(201).send(info);

        } catch (err) {
            const info = {
                status: false,
                message: "Server Error: " + err.message
            }
            res.status(500).send(info);
            console.log(err);
        }
    })
    .get(async (req, res) => {
        try {
            const result = await surveyForm.find();

            const info = {
                status: true,
                message: "List of all the survey",
                result
            }

            res.status(200).send(info);
        } catch (error) {
            const info = {
                status: false,
                message: "Serve Error: " + error.message
            }
            res.status(500).send(info);
            console.log(error);
        }
    });

router.route('/survey-form/:id')
    .get(async (req, res) => {
        try {
            const _id = req.params.id;
            const result = await surveyForm.findById(_id);

            if(result) {
                const info = {
                    status: true,
                    message: "Individual survey form data.",
                    result
                }
    
                res.status(200).send(info);
            } else {
                const info = {
                    status: false,
                    message: "No Data Found.",
                }
    
                res.status(400).send(info);
            }

            
        } catch (error) {
            const info = {
                status: false,
                message: "Serve Error: " + error.message
            }
            res.status(500).send(info);
            console.log(error);
        }
    })
    .patch(async (req, res) => {
        try {
            const _id = req.params.id;

            const result = await surveyForm.findByIdAndUpdate(_id, req.body, {
                new: true
            });

            const info = {
                status: true,
                message: "survey updated successful",
                result
            }

            res.status(200).send(info);

        } catch (error) {
            const info = {
                status: false,
                message: "Serve Error: " + error.message
            }
            res.status(500).send(info);
            console.log(error);
        }
    }).delete(async (req, res) => {
        try {
            const _id = req.params.id;
            const result = await surveyForm.findByIdAndDelete(_id);

            const info = {
                status: true,
                message: "survey deleted successfully",
            }

            res.status(200).send(info);

        } catch (error) {
            const info = {
                status: false,
                message: "Serve Error: " + error.message
            }
            res.status(500).send(info);
            console.log(error);
        }
    })

router.route('/auth').get((req, res) => {

});

module.exports = router;

