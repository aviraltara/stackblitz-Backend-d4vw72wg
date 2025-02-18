import mongoose from "mongoose"

const productSchema = new mongoose.Schema({
    description:{
        required:true,
        type:String,
    },
    name : {
        required:true,
        type:String,
    },
    productImage:{
        type:String,// string isliye kyunki ismein jahan store kiya jayega usak url aayega.
    },
    price:{
        type:Number,
        default:0,
    },
    stock:{
        type:Number,
        default:0,
    },
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Category",
        required:true,
    },
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        
    }
},{timestamps:true});

export const Product = mongoose.model("Product",productSchema);