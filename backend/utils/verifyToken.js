const jwt = require('jsonwebtoken');


const verifyToken = (req, res, next) => {
    const authHeader = req.headers.token;
    if (authHeader) {
        const token = authHeader.split(" ")[1];
        jwt.verify(token, process.env.JWT_SEC_KEY, (err, user) => {
            if (err) return res.status(403).json("Invalid token");
            req.user = user;
            next()
        })
    } else {
        return res.status(401).json("Not authenticated");
    }
}

module.exports = { verifyToken }