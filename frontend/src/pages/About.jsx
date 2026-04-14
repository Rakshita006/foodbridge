import React from 'react';

const About = () => {
  return (
    <div className="px-4 max-w-4xl mx-auto">

      {/* Hero */}
      <div className="bg-emerald-950 border border-emerald-800 rounded-xl p-8 mb-6 text-center">
        <h1 className="text-white text-3xl font-medium mb-3">🌾 About FoodBridge</h1>
        <p className="text-emerald-400 text-base max-w-2xl mx-auto">
          FoodBridge is a community-driven platform that connects people with surplus food
          to those who need it — reducing waste and fighting hunger, one listing at a time.
        </p>
      </div>

      {/* SDG Section */}
      <div className="bg-gray-900 border border-gray-700 rounded-xl p-6 mb-6">
        <h2 className="text-white text-xl font-medium mb-4"> Our Mission & SDG Alignment</h2>
        <div className="grid grid-cols-1 sm:grid-cols-1 gap-4">
          <div className="bg-gray-800 border border-emerald-800 rounded-xl p-5">
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-emerald-900 text-emerald-300 text-xs px-2 py-1 rounded-lg">UN SDG 2</span>
              <h3 className="text-white font-medium">Zero Hunger</h3>
            </div>
            <p className="text-gray-400 text-sm">
              Every day, tonnes of edible food go to waste while millions go hungry.
              FoodBridge directly tackles this by enabling individuals, restaurants,
              and households to share surplus food with their local community — for free.
            </p>
          </div>
        </div>
      </div>

      {/* How it works */}
      <div className="bg-gray-900 border border-gray-700 rounded-xl p-6 mb-6">
        <h2 className="text-white text-xl font-medium mb-4"> How It Works</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-gray-800 rounded-xl p-4 text-center">
            <p className="text-4xl mb-3">📦</p>
            <h3 className="text-white font-medium text-sm mb-1">1. Post Surplus Food</h3>
            <p className="text-gray-400 text-xs">Anyone can list food they have to give away — cooked meals, vegetables, packaged goods and more.</p>
          </div>
          <div className="bg-gray-800 rounded-xl p-4 text-center">
            <p className="text-4xl mb-3">🔍</p>
            <h3 className="text-white font-medium text-sm mb-1">2. Browse & Search</h3>
            <p className="text-gray-400 text-xs">People in need can browse listings and search by food name or location to find what's available nearby.</p>
          </div>
          <div className="bg-gray-800 rounded-xl p-4 text-center">
            <p className="text-4xl mb-3">🤝</p>
            <h3 className="text-white font-medium text-sm mb-1">3. Claim & Connect</h3>
            <p className="text-gray-400 text-xs">Claim a listing to reserve it. The poster and claimer can then connect to arrange pickup.</p>
          </div>
        </div>
      </div>

      {/* Impact Stats */}
      <div className="bg-gray-900 border border-gray-700 rounded-xl p-6 mb-6">
        <h2 className="text-white text-xl font-medium mb-4">🌍 Why It Matters</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-emerald-950 border border-emerald-800 rounded-xl p-4 text-center">
            <p className="text-emerald-400 text-3xl font-medium mb-1">1/3</p>
            <p className="text-gray-400 text-xs">of all food produced globally is wasted every year</p>
          </div>
          <div className="bg-emerald-950 border border-emerald-800 rounded-xl p-4 text-center">
            <p className="text-emerald-400 text-3xl font-medium mb-1">828M</p>
            <p className="text-gray-400 text-xs">people go to bed hungry every night around the world</p>
          </div>
          <div className="bg-emerald-950 border border-emerald-800 rounded-xl p-4 text-center">
            <p className="text-emerald-400 text-3xl font-medium mb-1">$1T</p>
            <p className="text-gray-400 text-xs">worth of food is wasted annually at the consumer level</p>
          </div>
        </div>
      </div>

      {/* Tech Stack */}
      <div className="bg-gray-900 border border-gray-700 rounded-xl p-6 mb-6">
        <h2 className="text-white text-xl font-medium mb-4">🛠️ Built With</h2>
        <div className="flex flex-wrap gap-2">
          {['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Tailwind CSS', 'Axios', 'Mongoose', 'React Router'].map(tech => (
            <span key={tech} className="bg-gray-800 border border-gray-700 text-gray-300 text-xs px-3 py-1.5 rounded-lg">
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="text-center py-6">
        <p className="text-gray-500 text-sm">Built with ❤️ for Hyperbloom Hacks 2026 · SDG 2 — Zero Hunger</p>
      </div>

    </div>
  );
};

export default About;