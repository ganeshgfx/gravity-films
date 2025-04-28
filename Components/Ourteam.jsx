"use client";
import React from "react";
import { AnimatedTooltip } from "./ui/animated-tooltip";
const people = [
     {
          id: 1,
          name: "Hetal",
          image: "/Team/dogs/nelson.jpg",
          image2: "/Team/People/hetal.jpg",
     },
     {
          id: 2,
          name: "Bantai",
          image: "/Team/dogs/rutvik.jpg",
          image2: "/Team/People/bantai.jpg",
     },
     {
          id: 3,
          name: "Jiten",
          image: "/Team/dogs/pravin.jpg",
          image2: "/Team/People/jiten.jpg",
     },
     {
          id: 4,
          name: "Pravin",
          image: "/Team/dogs/jiten.jpg",
          image2: "/Team/People/pravin.jpg",
     },
     {
          id: 5,
          name: "Nelson",
          image: "/Team/dogs/nelson.jpg",
          image2: "/Team/People/nelson.png",
     },
     //   {
     //     id: 6,
     //     name: "Sneha",
     //     image: "/Team/dogs/sneha.jpg",
     //     image2: "/Team/People/sneha.jpg",
     //   },
];

export function Ourteam() {
     return (
          <div className="flex flex-row flex-wrap items-center justify-center mb-10 mt-10 w-full px-4">
               <AnimatedTooltip items={people} />
          </div>
     );
}
