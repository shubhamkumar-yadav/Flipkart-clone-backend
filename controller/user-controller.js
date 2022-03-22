import { usersSchema } from "../model/userSchema.js";
const userSignup = async (request,response)=>{
    try{
        const exist = await usersSchema.findOne({username:request.body.username});
        if(exist){
            response.status(401).json('User Already Exist');
        }
        const user = request.body;
        const newUser = new usersSchema(user);
        await newUser.save();
        response.status(200).json('Signup Successful')
    }catch(error){
        console.log(error.message);
    }
};
const userLoginIn = async (request,response)=>{
    try{
        let user = await usersSchema.findOne({username:request.body.username,password:request.body.password});
        if (user){
            response.status(200).json(`${request.body.username} login successful`);
        }else{
            return response.status(401).json('Invalid Username/password');
        }
    }catch(error){
        console.log(error.message);
    }
};
export {userSignup,userLoginIn};