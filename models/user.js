import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {type: String, required:true},
    email: {type: String, required:true},
    password: {type: String, required:true},
    role: {type: String, default:'Customer'},
},{timestamps: true})

export default mongoose.model('User',userSchema,'e_commerce_users')