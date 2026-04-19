# 🌾 FoodBridge — Community Food Sharing Platform

A full-stack MERN application that connects people with surplus food to those
who need it — reducing waste and fighting hunger, one listing at a time.

> Built for Hyperbloom Hacks 2026 | UN SDG 2 — Zero Hunger

<img width="1912" height="966" alt="Screenshot 2026-04-14 085219" src="https://github.com/user-attachments/assets/e2cf7f6d-d68d-4aa6-9efe-c082d8161b61" />


---

## 🔗 Links

- 🌐 **Live Demo:** https://foodbridge-green.vercel.app
- 🏆 **Devpost:** https://devpost.com/software/foodbridge-e8lxth
- 📝 **Blog Post:** https://rakshita-dev.hashnode.dev/building-foodbridge-hackathon-mern-project?utm_source=hashnode&utm_medium=feed

---

## ✨ Features

- 📦 Post surplus food listings with title, description, quantity, location, category and expiry date
- 🔍 Search listings by food name or location in real time
- 🗂️ Filter by category — Cooked Meal, Vegetables, Fruits, Packaged, Beverages
- 🤝 Claim available food listings
- ⚠️ Expiry warning badge for listings expiring within 24 hours
- 🕒 Time ago display — "Posted 2 hours ago"
- 🗑️ Delete your own listings
- 📊 My Posts page to track all your listings and their status
- ✅ Claimed page to view all food you have claimed
- 🌍 About page with SDG 2 impact statistics
- 🔔 Toast notifications for all actions

---

## 🛠️ Tech Stack

**Frontend**
- React.js (Vite)
- Tailwind CSS
- React Router DOM
- Axios
- Day.js
- React Hot Toast

**Backend**
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose

**Deployment**
- Frontend → Vercel
- Backend → Render

---

---

## 🚀 Getting Started

### Prerequisites
- Node.js installed
- MongoDB Atlas account

### 1. Clone the repository
```bash
git clone https://github.com/Rakshita006/foodbridge.git
cd foodbridge
```

### 2. Set up the backend
```bash
cd server
npm install
```

Create a `.env` file inside `server/`:
MONGO_URI=your_mongodb_connection_string
PORT=5000

Start the server:
```bash
node index.js
```

### 3. Set up the frontend
```bash
cd client
npm install
```

Create a `.env` file inside `client/`:

VITE_API_URL=http://localhost:5000/api

Start the frontend:
```bash
npm run dev
```

### 4. Open the app
http://localhost:5173

## 🚧 Challenges Faced

- **CORS issues** between deployed frontend and backend — fixed by
  whitelisting Vercel URLs in Express CORS config
- **Vite environment variables** — learned to use `import.meta.env`
  and `VITE_` prefix instead of `process.env`
- **Data consistency bug** — claimed listings were disappearing, fixed
  by fetching all listings and filtering on the frontend
- **Expiry badge** — dates stored as midnight UTC were causing the badge
  not to show, fixed by setting time to end of day before comparing

## 🔮 Future Improvements

- JWT Authentication for secure user identity
- Map view to show nearby listings
- Real time notifications when food is posted nearby
- React Native mobile app
- NGO integration for bulk posting and claiming
- Auto removal of expired listings

  ## 📚 What I Learned

- Building and deploying a complete full stack MERN application
- REST API design with Express and Mongoose
- Tailwind CSS dark theme UI
- Environment variables for dev vs production
- Free deployment with Render and Vercel

  ## 🌍 SDG Alignment

FoodBridge directly addresses **UN SDG 2 — Zero Hunger** by enabling
communities to share surplus food freely, reducing waste and helping
feed those in need.

---

## 👩‍💻 Author

**Rakshita Kumari**
- GitHub:https://github.com/Rakshita006
- Hashnode: https://hashnode.com/@devraxita

---

*Built with ❤️ for Hyperbloom Hacks 2026*
