const express = require('express');
const admin = require('../model/admin');
const jtw = require('jsonwebtoken');

const router = express.Router();


router.post('/login', async (req, res) => {
    try {
        const { userName, password } = req.body;

        const result = await admin.findOne({ userName, password });

        if (result) {

            const token = jtw.sign({_id: result._id}, process.env.SECRET_KEY);

            res.cookie('auth', token, {
                expires: new Date(Date.now() + 500000),
                httpOnly: true
            });

            const info = {
                status: true,
                message: "Login successful!...",
            }

            res.status(200).send(info);

        } else {
            const info = {
                status: false,
                message: "Authentication failed!..."
            }

            res.status(401).send(info);
        }

    } catch (error) {
        const info = {
            status: false,
            message: "Server Error: " + error.message
        }

        res.status(500).send(info);
        console.log(error);
    }
}).get('/logout', (req, res) => {
    try {
        res.clearCookie('auth');

        const info = {
            status: true,
            message: "Logout successfully!..."
        }

        res.status(200).send(info);

    } catch (error) {
        const info = {
            status: false,
            message: "server error: " + error.message
        }
        res.status(500).send(info);
        console.log(error);
    }
}).post('/signup', async (req, res) => {
    try {
        const newAdmin = new admin(req.body);
        const result = await newAdmin.save();

        if (result) {

            const token = jtw.sign({_id: result._id}, process.env.SECRET_KEY);

            res.cookie('auth', token, {
                expires: new Date(Date.now() + 500000),
                httpOnly: true
            });

            const info = {
                status: true,
                message: "New Admin Created successfully"
            }
            res.status(200).send(info);
        } else {
            const info = {
                status: false,
                message: "Authentication failed!..."
            }

            res.status(401).send(info);
        }




    } catch (error) {
        const info = {
            status: false,
            message: "server error: " + error.message
        }
        res.status(500).send(info);
        console.log(error);
    }
});


module.exports = router;