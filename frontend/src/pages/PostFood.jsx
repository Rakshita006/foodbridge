import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const PostFood = ({ userName }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    location: "",
    quantity: "",
    expiryDate: "",
    category: "Other",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post("http://localhost:5000/api/foods", {
        ...formData,
        postedBy: userName,
      });

      toast.success("Food listed successfully!");
      navigate("/");
    } catch (error) {
      toast.error("Error posting food. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="px-4 max-w-2xl mx-auto">
      <div className="bg-gray-900 border border-gray-700 rounded-xl p-6">
        <h2 className="text-white text-xl font-medium mb-1">
          Post Surplus Food
        </h2>
        <p className="text-gray-400 text-sm mb-6">
          Fill in the details of the food you'd like to share.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1">
              <label className="text-gray-400 text-xs">Food Title</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="e.g. Fresh Vegetables"
                required
                className="bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-emerald-500"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-gray-400 text-xs">Quantity</label>
              <input
                type="text"
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
                placeholder="e.g. 2 kg"
                required
                className="bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-emerald-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1">
              <label className="text-gray-400 text-xs">Location</label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="e.g. Kolkata, West Bengal"
                required
                className="bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-emerald-500"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-gray-400 text-xs">Expiry Date</label>
              <input
                type="date"
                name="expiryDate"
                value={formData.expiryDate}
                onChange={handleChange}
                required
                className="bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-emerald-500"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-gray-400 text-xs">Category</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-emerald-500"
              >
                <option value="Other">Other</option>
                <option value="Cooked Meal">Cooked Meal</option>
                <option value="Vegetables">Vegetables</option>
                <option value="Fruits">Fruits</option>
                <option value="Packaged">Packaged</option>
                <option value="Beverages">Beverages</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-gray-400 text-xs">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Describe the food item..."
              required
              rows={3}
              className="bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-emerald-500 resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="bg-emerald-600 hover:bg-emerald-500 text-white text-sm py-2.5 rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Posting..." : "Submit Listing"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default PostFood;
