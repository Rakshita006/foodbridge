import React, { useEffect, useState } from 'react';
import axios from 'axios';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import toast from 'react-hot-toast';
import API_URL from '../api.js';
dayjs.extend(relativeTime);


const MyPosts = () => {

  const [myFoods, setMyFoods]=useState([])
  const [loading, setLoading]=useState(false)
  const userName=localStorage.getItem('foodbridge_user')

  const fetchMyPosts=async()=>{
      try {
        const res=await axios.get(`${API_URL}/foods`)
        const myPosts=res.data.filter(food=>food.postedBy===userName)
        setMyFoods(myPosts)
      } catch (error) {
        toast.error('Error fetching your posts.');
      }finally{
        setLoading(false);
      }
  }

  useEffect(()=>{
    fetchMyPosts()
  },[])

  const handleDelete=async(id)=>{
    if (!window.confirm('Are you sure you want to delete this listing?')) return;
    try {
     await axios.delete(`${API_URL}/foods/${id}`) 
     toast.success('Post deleted successfully!')
     fetchMyPosts()
    } catch (error) {
      toast.error('Error deleting listing.');
    }
  }

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  };
  return (
    <div className="px-4">
      <div className="bg-emerald-950 border border-emerald-800 rounded-xl p-6 mb-6 flex justify-between items-center">
        <div>
          <h1 className="text-white text-2xl font-medium mb-1">My Posts</h1>
          <p className="text-emerald-400 text-sm">All food listings you have posted, {userName}.</p>
        </div>
        <div className="bg-gray-900 rounded-xl p-4 text-center min-w-[70px]">
          <p className="text-emerald-500 text-2xl font-medium">{myFoods.length}</p>
          <p className="text-gray-400 text-xs">Total Posts</p>
        </div>
      </div>

      {loading ? (
        <p className="text-gray-400 text-center mt-10">Loading...</p>
      ) : myFoods.length === 0 ? (
        <p className="text-gray-400 text-center mt-10">You haven't posted anything yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {myFoods.map(food => (
            <div key={food._id} className="bg-gray-900 border border-gray-700 rounded-xl p-5 flex flex-col gap-3">

              <div className="flex justify-between items-start">
                <h3 className="text-white font-medium text-base">{food.title}</h3>
                <span className={`text-xs px-2 py-1 rounded-lg ${food.isClaimed ? 'bg-red-900 text-red-300' : 'bg-emerald-900 text-emerald-300'}`}>
                  {food.isClaimed ? 'Claimed' : 'Available'}
                </span>
              </div>

              <p className="text-gray-400 text-sm">{food.description}</p>

              <div className="flex flex-col gap-1">
                <p className="text-gray-400 text-xs">📦 Quantity: {food.quantity}</p>
                <p className="text-gray-400 text-xs">📍 Location: {food.location}</p>
                <p className="text-gray-400 text-xs">⏳ Expires: {formatDate(food.expiryDate)}</p>
                <p className="text-gray-400 text-xs">🕒 Posted: {dayjs(food.createdAt).fromNow()}</p>
                {food.isClaimed && (
                  <p className="text-gray-400 text-xs">✅ Claimed by: {food.claimedBy}</p>
                )}
              </div>

              {!food.isClaimed && (
                <button
                  onClick={() => handleDelete(food._id)}
                  className="w-full bg-red-900 hover:bg-red-800 text-red-300 text-sm py-2 rounded-lg transition"
                >
                  🗑️ Delete Listing
                </button>
              )}

              </div>
          ))}
        </div>
      )}

    </div>

    
  )
}

export default MyPosts