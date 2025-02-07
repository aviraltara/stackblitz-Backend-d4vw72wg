import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    
    description:{
        required:true,
        type:String,
    },
    productImage:{
        // you dont add buffer data in this as it makes the system heavy,
        type:String,// iss meing images , pdf jinhe buffer data khete hai unka link aayega cloud wla jahan woh uploaded hai : like AWS , Cloudnary and other.
    },
    price:{
        type:Number,
        default:0,
    },
    stock:{
        default:0,
        type:Number,
    },
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Category",
        required:true,// good practice write at end
    },

},{timestamps:true});

export const Product = mongoose.model("Product",productSchema);
