import mongoose from 'mongoose'

const foodSchema=new mongoose.Schema({
  title:{
    type:String,
    required:true
  },
  description:{
    type:String,
    required:true
  },
  quantity:{
    type:String,
    required:true
  },
  location:{
    type:String,
    required:true
  },
  expiryDate:{
    type:String,
    required:true
  },
  postedBy:{
    type:String,
    required:true
  },
  isClaimed:{
    type: Boolean,
    default:false
  },
  claimedBy:{
    type:String,
    default:''
  },
  category: {
  type: String,
  default: 'Other'
},
},{timestamps:true})

const Food=new mongoose.model('Food', foodSchema)

export default Food