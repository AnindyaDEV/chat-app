import jwt from 'jsonwebtoken';
import User from '../models/user.model.js';

const protectRoute = async(req,res,next)=>{
    try {
        const token=req.cookies.jwt;
        if(!token){
            return res.status(401).json({error:'Unauthorized'});
        }

        const decodedData=jwt.verify(token,process.env.JWT_SECRET);

        if(!decodedData){
            return res.status(401).json({error:'Unauthorized'});
        }

        const user = await User.findById(decodedData.userId).select('-password');

        if(!user){
            return res.status(401).json({error:'User not found'});
        }

        req.user= user;

        next();

    } catch (error) {
        console.log("Error in protect route middleware", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

export default protectRoute;