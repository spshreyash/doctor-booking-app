const Doctor = require("../model/Doctor");
const jwt = require("jsonwebtoken");

async function Doctorauth(req, res, next) {
    const token = req.cookies.token;
    console.log("Token:", token);

    if (!token) {
        return res.status(401).json({ msg: "Doctor is not authorized - No token" });
    }

    try {
        const decode = jwt.verify(token, process.env.JWT_KEY);
        console.log("Decoded Token:", decode);

        const doctor = await Doctor.findById(decode.id)
        console.log("Doctor found:", doctor);

        if (!doctor) {
            return res.status(404).json({ msg: "Doctor not found in database" });
        }

        req.userId = doctor._id;
        req.user = doctor;
        next();

    } catch (error) {
        console.error("JWT verification error:", error);
        return res.status(500).json({ msg: "Server error during authentication" });
    }
}

module.exports = Doctorauth;
