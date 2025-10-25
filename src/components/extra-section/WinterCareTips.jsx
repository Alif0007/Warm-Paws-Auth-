import React from "react";

const winterTips = [
  {
    id: 1,
    title: "Keep Your Pet Warm Indoors",
    description:
      "As temperatures drop, ensure your pet stays cozy indoors. Provide soft blankets, warm bedding, and avoid exposing them to cold floors for long periods.",
    icon: "❄️",
  },
  {
    id: 2,
    title: "Moisturize Paws Regularly",
    description:
      "Cold weather can cause cracked paws. Apply pet-safe balms to keep them moisturized and prevent irritation from snow, salt, or ice.",
    icon: "🐾",
  },
  {
    id: 3,
    title: "Limit Outdoor Time",
    description:
      "Shorter walks during extreme cold will reduce the risk of hypothermia, frostbite, and discomfort in your pets. Stay alert to their body language.",
    icon: "🧥",
  },
  {
    id: 4,
    title: "Hydrate & Maintain Nutrition",
    description:
      "Pets lose moisture faster in winter. Make sure water bowls stay full, and feed a balanced diet to support warmth and immunity.",
    icon: "💧",
  },
];

const WinterCareTips = () => {
  return (
    <div className="py-10 bg-base-200">
      <h2 className="text-3xl font-bold text-center text-primary mb-8">
        Winter Care Tips for Pets
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto px-4">
        {winterTips.map((tip) => (
          <div key={tip.id} className="card shadow-lg bg-base-100 border">
            <div className="card-body">
              <div className="text-4xl mb-2">{tip.icon}</div>
              <h3 className="card-title text-primary">{tip.title}</h3>
              <p className="text-sm opacity-80">{tip.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WinterCareTips;
