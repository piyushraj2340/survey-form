const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

router.use(auth);

router.route('/authentication').get((req, res) => {
    try {
        if(req._id) {
            const info = {
                status: true,
                message: "Authentication Success",
            }

            res.status(200).send(info);
        } else {
            const info = {
                status: false,
                message: "Authentication Failed",
            }

            res.status(401).send(info);
        }
    } catch (error) {
        const info = {
            status: false,
            message: 'Server error: ' + error.message
        }
        res.status(500).send(info);
        console.log(error);
    }
});

module.exports = router;

