import mongoose from 'mongoose';


const FileSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    path:{
        type:String
    },
},{
    timestamps:true
})

export const File =mongoose.model('File', FileSchema);