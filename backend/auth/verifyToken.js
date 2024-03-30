import jwt from "jsonwebtoken"
import Doctor from "../models/DoctorSchema.js"
import User from "../models/UserSchema.js"


export const authenticate = async (req, res, next) =>{

    //get token from headers
    const authToken = req.headers.authorization

    //check token is existing or not
    if(!authToken || !authToken.startsWith("Bearer ")){
        return res.status(401).json({success: false, message:"No token, authorization denied"})
    }

    try {
            const token = authToken.split(" ")[1];

            //verify token
            const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY)

            req.userId = decoded.id
            req.role = decoded.role

            next();  //must be call the next function
    } catch (error) {

        if(error.name ==="TokenExpiredError"){
            return res.status(401).json({message:"Token expired"})
        }
        
        return res.status(401).json({success: false, message:"Invalid Token"})
        
    }
}


export const restrict = roles=> async (req, res, next) => {
    const userId = req.userId

    let user;

    const patient = await User.findById(userId)
    const doctor = await Doctor.findById(userId)


    if(patient){
        user = patient
    }
    if(doctor){
        user = doctor
    }


    if(!roles.includes(user.role)){
        return res.status(401).json({success:false,message:"You are not authorized"})
    }

    next();
}