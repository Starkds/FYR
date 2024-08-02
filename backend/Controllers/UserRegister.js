import { User } from "../Models/UserModelSchema.js";

export const Register = async(req, res) =>{
    try{
     const {fullName , password , email , mobileNo} = req.body;

     if(!fullName || !password || !email || !mobileNo){
        return res.status(401).json({
            message: "Invalid User Data",
            success : false
        })
     }

     const user = await User.findOne({email});
     
     if(user){
        return res.status(401).json({
            message: "Email is already exist",
            success: false
        })
     }
   await  User.create({ fullName, email, password, mobileNo });

   return res.status(201).json({
    message: "Account Created Successfullly",
    success : true
   })

    }catch(error){
   console.log(error);
    }
}


export const Login  = async(req ,res)  =>{
    try{
      const {email , password} = req.body;

      if(!email || !password){
        return res.status(401).json({
            message: "Invalid login credential",
            success : false

        })
      }else{

        const user = await User.findOne({email});

        if(user){
            return res.status(401).json({
                message:"Email is not found",
                success: false
            })
        }
      }
    

    } catch(error){

    }
}




