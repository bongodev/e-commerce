import mongoose from 'mongoose';


const ProductSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String
    },
    madeIn:{
        type:String
    },
    category:{
        type:String
    },
    price:{
        type:Number
    },
    pQty:{
        type:Number
    },
    isDeleted:{
        type:Boolean,
        default:false
    },
    userId:{
        type:mongoose.Types.ObjectId,
        ref:'User'
    },
    fileId:{
        type:mongoose.Types.ObjectId,
        ref:'File'
    }
},{
    timestamps:true
})

export const Product =mongoose.model('Product', ProductSchema);