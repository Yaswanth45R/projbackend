const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name:{
    type:String,
    required:true,
    maxlength:32,
    trim:true
  },
  lastname:{
    type:String,
    maxlength:32,
    trim:true
  },
  email:{
    type:String,
    trim:true,
    requrired:true,
    unique:true
  },
  userinfo:{
    type:String,
    trim:true
  },
  //TODO: come back here
  encry_password:{
    type:String,
    trim:true
  },
  salt:String,
  role:{
    type:Number,
    default:0
  },
  purchase:{
    type:Array,
    default:[]
  }
});

module.exports = mongoose.model("User",userSchema);