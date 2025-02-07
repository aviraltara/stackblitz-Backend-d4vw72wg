import mongoose from "mongoose";

import { orderItemSchema } from "./orderItemSchema";

const orderSchema = new mongoose.Schema({
    orderPrice:{
        type:Number,
        required:true,
    },
    customer:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
    },
    orderItems:{
        type:[orderItemSchema],// now to define this structure which is little complex we create mini models within the file for defining this property.
    },
    address:{
        type:String,
        required:true,
    },
    status:{
        type:String,
        enum:["PENDING","CANCELLED","DELIVERED"],
        default:"PENDING",
    }



},{timestamps:true});

export const order = mongoose.model("order",orderSchema);
