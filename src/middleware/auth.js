const jwt = require('jsonwebtoken');
const admin = require('../model/admin');

const auth = async (req, res, next) => {
    try {
        
        if (req.method === 'POST' && req.path === '/survey-form') {
            
            next();
        } else {
            
            const token = req.cookies.auth;

            const verifyUser = jwt.verify(token, process.env.SECRET_KEY);

            const auth = await admin.findOne({ _id: verifyUser }).select({ _id: 1 });

            if (auth) {
                req.token = token;
                req._id = auth._id;
                next();
            } else {
                const info = {
                    status: false,
                    message: 'Authentication failed!..'
                }
                res.status(401).send(info);
            }
        }
    } catch (error) {
        const info = {
            status: false,
            message: "Server Error: " + error.message
        }
        console.log(error);
        res.status(500).send(info);
    }
}

module.exports = auth;