import React, { useEffect, useState } from "react";
import axios from "axios";
import FoodCard from "../components/FoodCard.jsx";
import toast from "react-hot-toast";
import API_URL from "../api.js";

const CATEGORIES = ['All', 'Cooked Meal', 'Vegetables', 'Fruits', 'Packaged', 'Beverages', 'Other'];

const Home = () => {
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch]=useState('')
  const [activeCategory, setActiveCategory] = useState('All');

  const fetchFoods = async () => {
    try {
      const res = await axios.get(`${API_URL}/foods`);
      setFoods(res.data);
    } catch (error) {
      toast.error("Error fetching food listings.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFoods();
  }, []);

  const availableFood=foods.filter(f=> !f.isClaimed)

  const filteredFoods=availableFood.filter(food=>{
    const matchesSearch=
    food.location.toLowerCase().includes(search.toLocaleLowerCase()) ||
    food.title.toLowerCase().includes(search.toLowerCase())
  const matchesCategory =
    activeCategory==='All' || food.category===activeCategory

    return matchesCategory && matchesSearch
  }
  )
  return (
    <div className="px-4">
      {/* Hero Banner */}
      <div className="bg-emerald-950 border border-emerald-800 rounded-xl p-6 mb-6 flex justify-between items-center">
        <div>
          <h1 className="text-white text-2xl font-medium mb-1">
            Reduce waste. Feed someone today.
          </h1>
          <p className="text-emerald-400 text-sm">
            Browse available food near you or share what you have.
          </p>
        </div>
        <div className="flex gap-3">
          <div className="bg-gray-900 rounded-xl p-4 text-center min-w-[70px]">
            <p className="text-emerald-500 text-2xl font-medium">
              {foods.filter((f) => !f.isClaimed).length}
            </p>
            <p className="text-gray-400 text-xs">Available</p>
          </div>
          <div className="bg-gray-900 rounded-xl p-4 text-center min-w-[70px]">
            <p className="text-emerald-700 text-2xl font-medium">
              {foods.filter((f) => f.isClaimed).length}
            </p>
            <p className="text-gray-400 text-xs">Claimed</p>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="mb-6">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="🔍 Search by food name or location..."
          className="w-full bg-gray-900 border border-gray-700 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-emerald-500"
        />
      </div>

      {/* filter tabs */}
      <div className="flex gap-2 flex-wrap mb-6">
        {CATEGORIES.map(category => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-1.5 text-sm rounded-lg transition border ${
              activeCategory === category
                ? 'bg-emerald-600 text-white border-emerald-600'
                : 'bg-gray-900 text-gray-400 border-gray-700 hover:bg-gray-800'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Food Listings */}
      {loading ? (
        <p className="text-gray-400 text-center mt-10">Loading listings...</p>
      ) : foods.filter((f) => !f.isClaimed).length === 0 ? (
        <p className="text-gray-400 text-center mt-10">
          No food listings yet. Be the first to post!
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredFoods
            .filter((f) => !f.isClaimed)
            .map((food) => (
              <FoodCard key={food._id} food={food} onClaim={fetchFoods} onDelete={fetchFoods}/>
            ))}
        </div>
      )}
    </div>
  );
};

export default Home;
