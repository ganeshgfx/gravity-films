"use client";
import React, { useEffect, useState } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { motion } from "framer-motion";
import { services } from "../data";

// Shuffle Function
const shuffleArray = (array) => {
  let currentIndex = array.length;

  while (currentIndex !== 0) {
    const randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

// Main Component
const OurServices = () => {
  return (
    <div className="container-width px-6 py-4 sm:px-2 lg:px-4">
      <h2 className="text-2xl font-bold text-gray-800 text-center lg:text-4xl">
        Our Services
      </h2>
      <section className="w-full pt-3 pb-4 grid grid-cols-1 md:grid-cols-2 items-start gap-8 lg:pb-12">
        {/* Services List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 grid-rows-8 gap-2 h-auto sm:h-[500px]">
          {services.map((service) => (
            <div key={service.id}>
              <div className="h-full flex items-center gap-3 p-4 rounded-md border hover:border-gray-700 hover:text-gray-300 transition">
                <div className="text-2xl text-black">{service.icon}</div>
                <p className="flex-grow text-black truncate">{service.title}</p>
                <ArrowForwardIcon className="text-white" />
              </div>
            </div>
          ))}
        </div>

        {/* Shuffle Grid */}
        <div className="sticky top-24">
          <ShuffleGrid />
        </div>
      </section>
    </div>
  );
};

const ShuffleGrid = () => {
  const [shuffledServices, setShuffledServices] = useState([]);

  useEffect(() => {
    setShuffledServices(shuffleArray([...services])); // Shuffle on mount
    const interval = setInterval(() => {
      setShuffledServices(shuffleArray([...services])); // Shuffle every 3s
    }, 3000);

    return () => clearInterval(interval); // Cleanup
  }, []);

  return (
    <div className="grid grid-cols-4 grid-rows-4 gap-2 h-[500px]">
      {shuffledServices.map((service) => (
        <motion.div
          key={service.id}
          layout
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center text-white p-4 rounded-md sm:px-1 sm:py-1"
          style={{ backgroundColor: "#262626" }}
        >
          {service.icon}
        </motion.div>
      ))}
    </div>
  );
};

export default OurServices;
