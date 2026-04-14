import express from 'express'
import { claimFood, createFood, deleteFood, getAllFood } from '../controllers/foodController.js'

const router=express.Router()

router.get('/',getAllFood)
router.post('/', createFood)
router.patch('/:id/claim',claimFood)
router.delete('/:id',deleteFood)

export default router