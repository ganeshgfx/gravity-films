import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { Sparkles } from "./Sparkle";
import Background from "./Background";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Gravity from "../3d/Gravity";
import Scroll from "../ui/Scroll";
import LogoSlider from "../ui/LogoSlider";

export default function Parallax() {
     const ref = useRef(null);
     const { scrollYProgress } = useScroll({
          target: ref,
          offset: ["start start", "end start"],
     });
     const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
     const textY = useTransform(scrollYProgress, [0, 1], ["0%", "250%"]);
     return (
          <>
               <div
                    ref={ref}
                    className="w-full h-screen overflow-hidden relative grid"
               >
                    <motion.div
                         style={{ y: textY }}
                         className="relative  z-40 mb-100 md:mb-80 text-center"
                    >
                         <div className="header">
                              <div
                                   className="main-logo"
                                   style={{
                                        display: "flex",
                                        justifyContent: "center",
                                   }}
                              >
                                   <Background />
                                   <Canvas>
                                        <ambientLight />
                                        <pointLight
                                             position={[5, 5, 5]}
                                             intensity={1}
                                        />
                                        <pointLight position={[-3, -3, 2]} />
                                        <Gravity />
                                        {/* <OrbitControls /> */}
                                   </Canvas>
                              </div>
                              <div
                                   style={{
                                        display: "flex",
                                        color: "white",
                                        flexDirection: "column",
                                   }}
                              >
                                   <div
                                        style={{
                                             display: "flex",
                                             justifyContent: "center",
                                        }}
                                   >
                                        <div style={{ position: "absolute" }}>
                                             <Sparkles />
                                        </div>
                                        <div
                                             style={{
                                                  display: "flex",
                                                  color: "white",
                                                  flexDirection: "column",
                                                  zIndex: 1,
                                             }}
                                        >
                                             <span className="main-text-1">
                                                  GRAVITY
                                             </span>
                                             <span className="text-center fw-lighter main-text-2">
                                                  FILMS
                                             </span>
                                             <div className="text-center pb-5">
                                                  We are Creative Media & Brand
                                                  Transformation
                                                  <br />
                                                  Ads | Online Presence | Media
                                                  Production
                                                  <br />
                                                  Creating ideas into reality
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </motion.div>
                    <motion.div
                         className="absolute inset-0 z-0"
                         style={{
                              // backgroundImage: `url(/a.jpg)`,
                              backgroundPosition: "bottom",
                              backgroundSize: "cover",
                              y: backgroundY,
                         }}
                    />
                    <div
                         className="absolute inset-0 z-20"
                         style={{
                              // backgroundImage: `url(/m.png)`,
                              backgroundPosition: "bottom",
                              backgroundSize: "cover",
                         }}
                    />
               </div>
               <Scroll />
               <LogoSlider />
               <div className="w-full bg-[#06141D]">
                    <div className="max-w-lg space-y-4 mx-auto py-24 text-neutral-300">
                         <p>
                              Lorem ipsum dolor sit amet consectetur,
                              adipisicing elit. Ipsam quae earum nobis quasi
                              repellat. Amet facere nulla dolorum accusantium
                              sit dolores odio excepturi facilis laboriosam
                              officiis dolorem, nobis reprehenderit molestiae.
                         </p>
                         <p>
                              Lorem ipsum dolor sit amet consectetur,
                              adipisicing elit. Ipsam quae earum nobis quasi
                              repellat. Amet facere nulla dolorum accusantium
                              sit dolores odio excepturi facilis laboriosam
                              officiis dolorem, nobis reprehenderit molestiae.
                         </p>
                         <p>
                              Lorem ipsum dolor sit amet consectetur,
                              adipisicing elit. Ipsam quae earum nobis quasi
                              repellat. Amet facere nulla dolorum accusantium
                              sit dolores odio excepturi facilis laboriosam
                              officiis dolorem, nobis reprehenderit molestiae.
                         </p>
                         <p>
                              Lorem ipsum dolor sit amet consectetur,
                              adipisicing elit. Ipsam quae earum nobis quasi
                              repellat. Amet facere nulla dolorum accusantium
                              sit dolores odio excepturi facilis laboriosam
                              officiis dolorem, nobis reprehenderit molestiae.
                         </p>
                         <p>
                              Lorem ipsum dolor sit amet consectetur,
                              adipisicing elit. Ipsam quae earum nobis quasi
                              repellat. Amet facere nulla dolorum accusantium
                              sit dolores odio excepturi facilis laboriosam
                              officiis dolorem, nobis reprehenderit molestiae.
                         </p>
                         <p>
                              Lorem ipsum dolor sit amet consectetur,
                              adipisicing elit. Ipsam quae earum nobis quasi
                              repellat. Amet facere nulla dolorum accusantium
                              sit dolores odio excepturi facilis laboriosam
                              officiis dolorem, nobis reprehenderit molestiae.
                         </p>
                         <p>
                              Lorem ipsum dolor sit amet consectetur,
                              adipisicing elit. Ipsam quae earum nobis quasi
                              repellat. Amet facere nulla dolorum accusantium
                              sit dolores odio excepturi facilis laboriosam
                              officiis dolorem, nobis reprehenderit molestiae.
                         </p>
                    </div>
               </div>
          </>
     );
}
