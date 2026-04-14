import axios from 'axios'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'

const ClaimedFood = () => {

  const [claimedFoods, setClaimedFoods]=useState([])
  const [loading, setLoading]=useState(true)
  const userName=localStorage.getItem('foodbridge_user')

  const fetchClaimedFoods=async()=>{
    
      try {
        const res=await axios.get('http://localhost:5000/api/foods')

        const myClaimed=res.data.filter(
          food=> food.isClaimed && food.claimedBy===userName
        )
        setClaimedFoods(myClaimed)
      } catch (error) {
        toast.error('Error fetching claimed foods.');
      }finally{
        setLoading(false)
      }
  }

  useEffect(()=>{
    fetchClaimedFoods()
  },[])

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  };
  return (
    <div className="px-4">

      <div className="bg-emerald-950 border border-emerald-800 rounded-xl p-6 mb-6">
        <h1 className="text-white text-2xl font-medium mb-1">Your Claimed Food</h1>
        <p className="text-emerald-400 text-sm">Food items you have claimed, {userName}.</p>
      </div>

      {loading ? (
        <p className="text-gray-400 text-center mt-10">Loading...</p>
      ) : claimedFoods.length === 0 ? (
        <p className="text-gray-400 text-center mt-10">You haven't claimed any food yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {claimedFoods.map(food => (
            <div key={food._id} className="bg-gray-900 border border-gray-700 rounded-xl p-5 flex flex-col gap-3">
              
              <div className="flex justify-between items-start">
                <h3 className="text-white font-medium text-base">{food.title}</h3>
                <span className="text-xs px-2 py-1 rounded-lg bg-emerald-900 text-emerald-300">
                  Claimed
                </span>
              </div>

              <p className="text-gray-400 text-sm">{food.description}</p>

              <div className="flex flex-col gap-1">
                <p className="text-gray-400 text-xs">📦 Quantity: {food.quantity}</p>
                <p className="text-gray-400 text-xs">📍 Location: {food.location}</p>
                <p className="text-gray-400 text-xs">⏳ Expires: {formatDate(food.expiryDate)}</p>
                <p className="text-gray-400 text-xs">👤 Posted by: {food.postedBy}</p>
              </div>

            </div>
          ))}
        </div>
      )}

    </div>
  )
}

export default ClaimedFood