import mongoose from 'mongoose';
const userSchema = new mongoose.Schema({
    firstname:{
        type:String,
        required:true,
        trim:true,
        min:5,
        max:10
    },
    lastname:{
        type:String,
        required:true,
        trim:true,
        min:5,
        max:10
    },
    username:{
        type:String,
        required:true,
        trim:true,
        unique:true,
        min:8,
        index:true,
        max:15,
        lowercase:true
    },
    email:{
        type:String,
        required:true,
        trim:true,
        unique:true,
        lowercase:true
    },
    password:{
        type:String,
        required:true,
        trim:true
    },
    phone:{
        type:String,
        required:true,
        trim:true,
        min:10,
        max:10
    }


});
const usersSchema = mongoose.model('user',userSchema);
export {usersSchema};