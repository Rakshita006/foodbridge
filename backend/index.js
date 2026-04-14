import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
import foodRoutes from './routes/foodRoutes.js'

dotenv.config()

const app=express()

app.use(cors())
app.use(express.json())

app.get('/',(req,res)=>{
  res.send('Food bridge api is running')
})

app.use('/api/foods',foodRoutes)

const PORT=process.env.PORT || 5000

mongoose.connect(process.env.MONGO_URI)
.then(()=>{
  console.log('mongodb connected');
  app.listen(PORT,()=>{
    console.log(`Server running on http://localhost:${PORT}`);
    
  })
})