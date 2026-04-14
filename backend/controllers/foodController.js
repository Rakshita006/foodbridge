import Food from "../models/Food.js"

export const getAllFood=async(req,res)=>{
  try {
    const foods=await Food.find().sort({createdAt:-1})
    res.status(200).json(foods)
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export const createFood=async(req,res)=>{
  try {
    const food=new Food(req.body)
    const savedFood=await food.save()
    res.status(201).json(savedFood)
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

export const claimFood=async(req,res)=>{
  try {
    const food=await Food.findById(req.params.id)
    if(!food)return res.status(404).json({ message: 'Food not found' });
    if(food.isClaimed)return res.status(400).json({ message: 'Already claimed' });

    food.isClaimed=true;
    food.claimedBy=req.body.claimedBy

    const updatedFood=await food.save()
    res.status(200).json(updatedFood)
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export const deleteFood=async(req,res)=>{
  try {
    const food=await Food.findByIdAndDelete(req.params.id)
    if(!food) return res.status(404).json({ message: 'Food not found' });
    res.status(200).json({ message: 'Listing deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}