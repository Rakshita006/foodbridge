import React from "react";
import axios from "axios";
import toast from "react-hot-toast";
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import API_URL from "../api.js";
dayjs.extend(relativeTime);

const FoodCard = ({ food, onClaim, onDelete }) => {
  const userName = localStorage.getItem("foodbridge_user");
  const isOwner = food.postedBy === userName;

  const handleClaim = async () => {
    const claimedBy = localStorage.getItem("foodbridge_user");
    try {
      await axios.patch(`${API_URL}/foods/${food._id}/claim`, {
        claimedBy,
      });
      onClaim();
    } catch (error) {
      toast.error("Error claiming food. Please try again.");
    }
  };

  const handleDelete = async () => {
    if (!window.confirm("Are you sure you want to delete this listing?"))
      return;
    try {
      await axios.delete(`${API_URL}/foods/${food._id}`);
      onDelete();
    } catch (error) {
      toast.error("Error deleting listing. Please try again.");
    }
  };

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  const isExpiringSoon = (expiryDate) => {
    const now = new Date();
    const expiry = new Date(expiryDate);
    expiry.setHours(23, 59, 59);
    const hoursLeft = (expiry- now) / (1000 * 60 * 60);
    return hoursLeft <= 24 ;
  };
  return (
    <div className="bg-gray-900 border border-gray-700 rounded-xl p-5 flex flex-col gap-3">
      <div className="flex justify-between items-start">
        <div className="flex flex-col gap-1">
          <h3 className="text-white font-medium text-base">{food.title}</h3>
          {isExpiringSoon(food.expiryDate) && (
            <span className="text-xs px-2 py-0.5 rounded-lg bg-amber-900 text-amber-300 w-fit">
              ⚠️ Expiring Soon
            </span>
          )}
        </div>
        <span
          className={`text-xs px-2 py-1 rounded-lg ${food.isClaimed ? "bg-red-900 text-red-300" : "bg-emerald-900 text-emerald-300"}`}
        >
          {food.isClaimed ? "Claimed" : "Available"}
        </span>
      </div>

      <p className="text-gray-400 text-sm">{food.description}</p>

      <div className="flex flex-col gap-1">
        <p className="text-gray-400 text-xs">📦 Quantity: {food.quantity}</p>
        <p className="text-gray-400 text-xs">📍 Location: {food.location}</p>
        <p className="text-gray-400 text-xs">🏷️ Category: {food.category || 'Other'}</p>
        <p className="text-gray-400 text-xs">
          ⏳ Expires: {formatDate(food.expiryDate)}
        </p>
        <p className="text-gray-400 text-xs">👤 Posted by: {food.postedBy}</p>
        <p className="text-gray-400 text-xs">🕒 Posted: {dayjs(food.createdAt).fromNow()}</p>
      </div>

      {!food.isClaimed ? (
        <button
          onClick={handleClaim}
          className="w-full bg-emerald-600 hover:bg-emerald-500 text-white text-sm py-2 rounded-lg transition"
        >
          Claim This
        </button>
      ) : (
        <button
          disabled
          className="w-full bg-gray-800 text-gray-500 text-sm py-2 rounded-lg cursor-not-allowed"
        >
          Already Claimed
        </button>
      )}

      {isOwner && !food.isClaimed && (
        <button
          onClick={handleDelete}
          className="w-full bg-red-900 hover:bg-red-800 text-red-300 text-sm py-2 rounded-lg transition"
        >
          🗑️ Delete Listing
        </button>
      )}
    </div>
  );
};

export default FoodCard;
