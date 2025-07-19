"use client";
import React from "react";
import { SparklesCore } from "./ui/SparklesCore";
import { motion } from "framer-motion";

export function UIsparkle() {
     return (
          <div className="h-[16rem] w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md sm:h-[20rem]">
               <div
                    className="relative container-width flex items-center justify-center"
                    style={{ height: "18rem" }}
               >
                    {/* Core Sparkle Component */}
                    <SparklesCore
                         background="transparent"
                         minSize={0.4}
                         maxSize={1}
                         particleDensity={1200}
                         className="absolute inset-0 w-full h-full"
                         particleColor="#FFFFFF"
                    />

                    <div className="relative flex flex-col items-center">
                         {/* GRAVITY Text */}
                         <h1 itemProp="headline" className="text-5xl sm:text-7xl md:text-7xl lg:text-9xl text-center text-white z-10 mt-[5px] sm:mt-0">
                              GRAVITY
                         </h1>

                         {/* Films text */}
                         <h2 itemProp="headline" className="text-2xl sm:text-4xl text-white mt-0 sm:mt-1 bg-black bg-opacity-50 px-4 py-1 rounded-md ">
                              FILMS
                         </h2>

                         {/* Subtitle section */}
                         <motion.div
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: 0.2, duration: 1 }}
                              className="text-center text-white text-xs sm:text-lg bg-black bg-opacity-70 px-4 py-2 rounded-md shadow-lg z-20 mt-6"
                         >
                              <span itemProp="description" >
                                   We are Creative Media & Brand Transformation
                                   <br />
                                   Ads | Online Presence | Media Production
                                   <br />
                                   Creating ideas into reality
                              </span>
                         </motion.div>
                    </div>

                    <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
               </div>
          </div>
     );
}
