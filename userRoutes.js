const express=require("express")
const UserModel =require("./Models/user");

const router=express.Router()
const jwt=require("jsonwebtoken")
const { isAuthenticated } = require("./auth")
router.post("/signup",async(req,res)=>{
    try {
        let {email,password,confirmpassword}=req.body
        let user=await UserModel.findOne({email})
        if(user){
            return res.json({
                error:"User Already Exists"
            })
        }  
        if(password!==confirmpassword){
            return res.json({
                error:"Password and confirm password does not match"
            })
        }
        user= await UserModel.create({email,password})
        res.json(user)

    } catch (error) {
        res.json(error.message)
    }
})

router.post("/signin",async (req,res)=>{
    try {
        let {email,password}=req.body
        let user=await UserModel.findOne({email})
        if(!user){
            return res.json({
                error:"User does not exists"
            })
        }
        if(password!=user.password){
            return res.json({
                error:"Password does not match"
            })
        }
        const token=jwt.sign({_id:user._id},process.env.JWT_SECRET)
        res.json({user,token})
    } catch (error) {
        res.json({error:error.message})
    }
   
})

module.exports=router