import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

export default function Home() {
  const navigate = useNavigate();

  const onNavigate = (path) => {
    navigate(`/${path}`);
  };

  const AyushInfo = [
    {
      title: "Ayurveda",
      description:
        "Ayurveda is an ancient Indian system of medicine that emphasizes balance in bodily systems using diet, herbal treatment, and yogic breathing.",
      image:
        "https://vediherbals.com/cdn/shop/articles/AyurvedaHistory.jpg?v=1739768432",
    },
    {
      title: "Yoga",
      description:
        "Yoga is a spiritual and physical discipline that includes breath control, meditation, and body postures for health and relaxation.",
      image:
        "https://www.fitnessgymyoga.com/wp-content/uploads/2017/05/download-Images-Yoga-yoga-stock-photos-for-free-or-amazingly.jpg",
    },
    {
      title: "Unani",
      description:
        "Unani medicine is based on the principles of Greek medicine, focusing on the balance of bodily fluids and using natural healing techniques.",
      image:
        "https://www.considracare.pk/wp-content/uploads/2023/05/unani-1.jpg",
    },
    {
      title: "Siddha",
      description:
        "Siddha is one of the oldest systems of medicine from South India that uses herbs and minerals for holistic healing.",
      image:
        "https://tse2.mm.bing.net/th/id/OIP.4Gyl874ZY7Y1wWUYKaCqjwHaFj?rs=1&pid=ImgDetMain&o=7&rm=3",
    },
    {
      title: "Homeopathy",
      description:
        "Homeopathy is a system of alternative medicine based on the principle of treating 'like with like' using natural substances.",
      image:
        "https://homeopathic-college.com/wp-content/uploads/2020/08/shutterstock_659314069-scaled.jpg",
    },
  ];

  return (
    <div className="w-full min-h-screen flex flex-col items-center text-center bg-gradient-to-b from-green-50 to-white">
      {/* Header */}
      {/* <Header onRoleSelect={(role) => onNavigate(role.toLowerCase())} onNavigate={onNavigate} /> */}

      {/* Welcome Section */}
      <div className="w-full flex flex-col items-center justify-center py-16">
        <h1 className="text-5xl md:text-7xl font-bold text-green-700 mb-6 drop-shadow-md">
          Welcome to AYUSHify
        </h1>
        <p className="text-xl text-gray-700 max-w-2xl px-4">
          Ancient wisdom meets modern business. Your direct line to government approval.
          Focus on healing, we'll bridge the gap.
        </p>
      </div>

      {/* AYUSH Info Section */}
      <div className="w-full px-6 py-10 space-y-10">
        {AyushInfo.map(({ title, description, image }) => (
          <div
            key={title}
            className="flex flex-col md:flex-row items-center gap-6 max-w-6xl mx-auto bg-white p-4 rounded-xl shadow-md"
          >
            <img
              src={image}
              alt={title}
              className="w-full md:w-1/3 rounded-lg shadow-md"
            />
            <div className="text-left">
              <h3 className="text-3xl font-bold text-green-700 mb-2">{title}</h3>
              <p className="text-lg text-gray-700 max-w-2xl">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
