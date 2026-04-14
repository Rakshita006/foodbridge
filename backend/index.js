import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
import foodRoutes from './routes/foodRoutes.js'

dotenv.config()

const app=express()

app.use(cors({
  origin: [
    'http://localhost:5173',
    'https://foodbridge-green.vercel.app',
    'https://foodbridge-git-main-rakshita0903-3695s-projects.vercel.app'
  ],
  methods: ['GET', 'POST', 'PATCH', 'DELETE'],
  credentials: true
}));

app.use(express.json());

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