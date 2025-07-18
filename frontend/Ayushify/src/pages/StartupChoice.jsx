import React from 'react';

const StartupChoice = ({ onSelect }) => {
  const categories = ["Ayurveda", "Yoga & Naturopathy", "Unani", "Siddha", "Homeopathy"];

  return (
    <div className="bg-white p-6 rounded shadow text-center">
      <h2 className="text-xl font-bold mb-4">Select Startup Category</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => onSelect(cat)}
            className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
};

export default StartupChoice;
