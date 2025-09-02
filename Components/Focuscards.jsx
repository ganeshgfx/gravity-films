"use client";
import { FocusCards } from "@/Components/ui/focus-cards";
import { cards } from "../data";

export default function Focuscards() {
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
