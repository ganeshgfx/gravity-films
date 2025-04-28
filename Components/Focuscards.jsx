"use client";
import { FocusCards } from "@/Components/ui/focus-cards";

export function Focuscards() {
  const cards = [
    {
      title: "Akshar Academy",
      images: [
        "/WorkCards/akshar1.jpeg",
        "/WorkCards/akshar2.jpeg",
        "/WorkCards/akshar3.jpeg",
      ],
    },
    {
      title: "HAZELCORP",
      images: [
        "/WorkCards/hazel0.png",
        "/WorkCards/hazel1.webp",
        "/WorkCards/hazel2.webp",
        "/WorkCards/hazel3.webp",
        "/WorkCards/hazel4.webp",
        "/WorkCards/hazel5.jpg",
      ],
    },
    {
      title: "HERMOD",
      images: [
        "/WorkCards/hermod1.png",
        "/WorkCards/hermod2.png",
        "/WorkCards/hermod3.jpg",
        "/WorkCards/hermod4.jpg",
        "/WorkCards/hermod5.jpg",
      ],
    },
    {
      title: "Hindustan Unilever",
      images: [
        "/WorkCards/hul1.jpg",
        "/WorkCards/hul2.jpg",
        "/WorkCards/hul3.jpg",
        "/WorkCards/hul4.png",
        "/WorkCards/hul4.JPG",
      ],
    },
    {
      title: "ICON BAGS",
      images: [
        "/WorkCards/icon1.jpg",
        "/WorkCards/icon2.jpg",
        "/WorkCards/icon3.jpg",
        "/WorkCards/icon4.jpg",
      ],
    },
    {
      title: "Indie Grow",
      images: ["/WorkCards/ig.png", "/WorkCards/ig.png"],
    },
    {
      title: "2dP",
      images: [
        "/WorkCards/2dp.jpg",
        "/WorkCards/2dp2.jpg",
        "/WorkCards/2dp3.jpg",
      ],
    },
    {
      title: "Miss India",
      images: ["/WorkCards/miss2.jpg", "/WorkCards/miss3.jpg"],
    },
    {
      title: "MYFITNESS",
      images: ["/WorkCards/mf.png", "/WorkCards/mf.png"],
    },
    {
      title: "National Institute of Fashion Technology",
      images: ["/WorkCards/nift.jpg", "/WorkCards/nift.jpg"],
    },
    {
      title: "nuts & jars",
      images: ["/WorkCards/nutsnjar.jpg", "/WorkCards/nutsnjar.jpg"],
    },
    {
      title: "S Creation Films",
      images: [
        "/WorkCards/s.png",
        "/WorkCards/s1.jpg",
        "/WorkCards/s2.jpg",
        "/WorkCards/s3.jpg",
      ],
    },
  ];

  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-white to-gray-100">
      <div className="w-full max-w-[1400px] mx-auto">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-4 lg:text-4xl">
          Proudly Presented
        </h2>
        <FocusCards cards={cards} />
      </div>
    </div>
  );
}
