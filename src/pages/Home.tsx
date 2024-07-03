import {
     MotionValue,
     motion,
     useScroll,
     useSpring,
     useTransform,
} from "framer-motion";
import React, { useRef } from "react";
import { Sparkles } from "./Sparkle";
import Background from "./Background";
import { Canvas } from "@react-three/fiber";
import Gravity from "../3d/Gravity";
import Scroll from "../ui/Scroll";
import Logos from "../ui/Logos";
import { Container, Divider } from "@mui/joy";
import HeadText from "../ui/HeadText";
import ShuffleHero from "../ui/ShuffleHero";
import Title from "../ui/Title";

export default function Home() {
     const ref = useRef(null);

     const { scrollYProgress } = useScroll({
          target: ref,
          offset: ["start start", "end start"],
     });
     const smoothProgress = useSpring(scrollYProgress, { mass: 0.1 });
     //get true if  width is geater than height
     const backgroundY = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);
     let textY = new MotionValue<string>();
     const isMobile = window.innerWidth <= 768;
     if (isMobile) {
          textY = useTransform(smoothProgress, [0, 1], ["0%", "120%"]);
     } else {
          textY = useTransform(smoothProgress, [0, 1], ["0%", "200%"]);
     }
     return (
          <div>
               <div
                    ref={ref}
                    className="w-full h-screen overflow-hidden relative grid"
               >
                    <motion.div
                         style={{ y: textY }}
                         className="relative  z-40 mb-100 md:mb-80 text-center "
                    >
                         <div className="header">
                              <motion.div
                                   initial={{ opacity: 0 }}
                                   animate={{ opacity: 1 }}
                                   transition={{ duration: 1, delay: 0.4 }}
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
                              </motion.div>
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
                                             <motion.span
                                                  initial={{
                                                       opacity: 0,
                                                  }}
                                                  animate={{ opacity: 1 }}
                                                  transition={{
                                                       delay: 0.2,
                                                       duration: 1,
                                                  }}
                                                  className="main-text-1"
                                             >
                                                  GRAVITY
                                             </motion.span>
                                             <motion.span
                                                  initial={{ opacity: 0 }}
                                                  animate={{ opacity: 1 }}
                                                  transition={{
                                                       delay: 0.3,
                                                       duration: 1,
                                                  }}
                                                  className="text-center fw-lighter main-text-2"
                                             >
                                                  FILMS
                                             </motion.span>
                                             <motion.div
                                                  initial={{
                                                       opacity: 0,
                                                  }}
                                                  animate={{ opacity: 1 }}
                                                  transition={{
                                                       delay: 0.2,
                                                       duration: 1,
                                                  }}
                                                  className="text-center pb-5"
                                             >
                                                  We are Creative Media & Brand
                                                  Transformation
                                                  <br />
                                                  Ads | Online Presence | Media
                                                  Production
                                                  <br />
                                                  Creating ideas into reality
                                             </motion.div>
                                        </div>
                                   </div>
                              </div>
                         </div>
                         <Container maxWidth="xl">
                              <HeadText />
                         </Container>
                    </motion.div>
                    <motion.div
                         className="absolute inset-0 z-0"
                         style={{
                              marginTop: "50vh",
                              y: backgroundY,
                         }}
                    ></motion.div>
                    <div
                         className="absolute inset-0 z-20"
                         style={{
                              // backgroundImage: `url(/m.png)`,
                              backgroundPosition: "bottom",
                              backgroundSize: "cover",
                         }}
                    />
               </div>
               <Divider />
               <div
                    style={{
                         width: "100%",
                         height: "100px",
                         display: "flex",
                         paddingTop: "30px",
                         justifyContent: "center",
                    }}
                    className="bg1"
               >
                    <Title title="Our Clients" />
               </div>
               <Logos />
               <Divider
                    sx={{
                         marginTop: "50px",
                    }}
               />
               <ShuffleHero />
               <Scroll />
               {/* <WorkScroll /> */}

               {/* <LogoSlider /> */}
          </div>
     );
}
