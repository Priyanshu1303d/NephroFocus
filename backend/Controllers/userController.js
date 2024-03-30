

import UserSchema from "../models/UserSchema.js";

export const updateUser = async(req,res)=>{
    const id = req.params.id;

    try {

        const updateUser = await UserSchema.findByIdAndUpdate(id, {$set:req.body}, {new:true}).select("-password");
        res.status(200).json({success: true, message:"Successfully Updated", data:updateUser})


    } catch (err) {
        res.status(500).json({success: false, message:"Failed to Update"})
    }
}
export const deleteUser = async(req,res)=>{
    const id = req.params.id;

    try {

        await User.findByIdAndDelete(
            id,
        ).select("-password");

        res.status(200).json({success: true, message:"Successfully Deleted"})


    } catch (err) {
        res.status(500).json({success: false, message:"Failed to Delete"})
    }
}

export const getSingleUser = async(req,res)=>{
    const id = req.params.id;

    try {

        const user = await UserSchema.findById(id,).select("-password");
        res.status(200).json({success: true, message:"User found", data:user})


    } catch (err) {
        res.status(404).json({success: false, message:"No user Found"})
    }
}

export const getAllUser = async(req,res)=>{

    try {

        const users = await UserSchema.find({}).select("-password");
        res.status(200).json({success: true, message:"Users found", data:users})


    } catch (err) {
        res.status(404).json({success: false, message:"Not Found"})
    }
}