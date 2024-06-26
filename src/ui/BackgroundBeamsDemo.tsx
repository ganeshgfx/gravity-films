"use client";
import React from "react";
import { BackgroundBeams } from "./background-beams";

export function BackgroundBeamsDemo() {
     return (
          <div
               className="w-full rounded-2xl bg-neutral-950 relative flex flex-col items-center justify-center antialiased"
               style={{
                    textAlign: "center",
               }}
          >
               <div
                    className=" mx-auto px-6 py-10 md:px-10
               "
               >
                    <h1 className=" text-2xl">
                         Gravity Films was originally built by young creators
                         with creative minds and a skilled tech team.
                    </h1>
                    <p className="text-neutral-500 mx-auto my-2 mt-5 text-center relative  text-xl z-10">
                         At Gravity Films, we strive to deliver creative digital
                         content solutions to our clients, meeting the needs of
                         e-commerce and commercial brands. We don't just focus
                         on filmmaking; we excel in content creation and digital
                         branding across all mediums. Our niche lies in fashion
                         brands, e-commerce shoots, and a more comprehensive
                         approach to every solution.
                    </p>
                    <span className="block text-center mt-5">
                         Our unified offerings are designed to elevate brands
                         and enhance their marketing impact in the digital and
                         social networking world.
                    </span>
               </div>
               <BackgroundBeams />
          </div>
     );
}
