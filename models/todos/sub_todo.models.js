import mongoose from "mongoose";
const  subTodo = new mongoose.Schema({},{});

export const Todo = mongoose.model("SubTodo",subTodoSchema);