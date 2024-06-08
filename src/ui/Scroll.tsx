import React from "react";
import { motion, useTransform, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import HoverCard from "./HoverCard";
import { LearnMore } from "./LearnMore";
import Title from "./Title";
export default function Scroll() {
     const targetRef = useRef(null);
     const { scrollYProgress } = useScroll({
          target: targetRef,
     });
     const smoothProgress = useSpring(scrollYProgress, { mass: 0.1 });
     const x = useTransform(smoothProgress, [0, 1], ["1%", "-100%"]);
     const x2 = useTransform(smoothProgress, [0, 1], ["1%", "100%"]);
     const o = useTransform(smoothProgress, [0, 1], ["1%", "100%"]);
     return (
          <>
               <section
                    ref={targetRef}
                    className="relative h-[300vh] md:h-[300vh]"
               >
                    <div
                         style={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                         }}
                    >
                         <Title title="Our Work" />
                    </div>
                    <div
                         style={{
                              width: "100%",
                              height: "100px",
                         }}
                         className="wave bg2"
                    />
                    <div className="sticky top-0 flex h-screen items-center overflow-hidden justify-center bg2">
                         <motion.div
                              style={{
                                   height: "100%",
                                   width: "100%",
                                   position: "absolute",
                                   display: "flex",
                                   justifyContent: "center",
                                   alignItems: "center",
                                   flexDirection: "column",
                                   opacity: o,
                              }}
                         >
                              <LearnMore />
                              <div
                                   style={{
                                        width: "100%",
                                        height: "100px",
                                   }}
                                   className="wave bg1"
                              />
                              <div
                                   style={{
                                        width: "100%",

                                        display: "flex",
                                        justifyContent: "center",
                                   }}
                                   className="bg1"
                              >
                                   <Title title="Our Clients" />
                              </div>
                         </motion.div>

                         <div>
                              <motion.div style={{ x }} className="flex gap-4">
                                   {cards1.map((card) => {
                                        return (
                                             <Card card={card} key={card.id} />
                                        );
                                   })}
                              </motion.div>
                              <motion.div
                                   style={{ x: x2 }}
                                   className="flex mt-4 gap-4"
                              >
                                   {cards2.map((card) => {
                                        return (
                                             <Card card={card} key={card.id} />
                                        );
                                   })}
                              </motion.div>
                              <motion.div style={{ x }} className="flex gap-4">
                                   {cards1.map((card) => {
                                        return (
                                             <Card card={card} key={card.id} />
                                        );
                                   })}
                              </motion.div>
                         </div>
                    </div>
               </section>
          </>
     );
}
const Card = ({ card }) => {
     return <HoverCard data={card} />;
};
const cards1 = [
     {
          url: "/brands/hzc.png",
          title: "Hazelcop",
          id: 1,
     },
     {
          url: "/brands/ig.png",
          title: "Indiegrow Fusion",
          id: 2,
     },
     //
     {
          url: "/brands/cci.png",
          title: "Coffee Cup India ",
          id: 3,
     },
     {
          url: "/brands/fr.png",
          title: "Foreignroutes Immigration",
          id: 4,
     },
     {
          url: "/brands/hermod.jpg",
          title: "HERMOD",
          id: 4,
     },
     {
          url: "/brands/hul.jpg",
          title: "HINDUSTAN UNILEVER",
          id: 6,
     },
     {
          url: "/brands/hzc.png",
          title: "Hazelcop",
          id: 7,
     },
     {
          url: "/brands/ig.png",
          title: "Indiegrow Fusion",
          id: 8,
     },
     //
];
const cards2 = [
     //
     {
          url: "/brands/nift.jpg",
          title: "NIFT National Institute of Fashion Technology",
          id: 9,
     },
     {
          url: "/brands/nutsnjar.jpg",
          title: "Nuts N Jars",
          id: 10,
     },
     {
          url: "/brands/sf.png",
          title: "SCreation films",
          id: 11,
     },
     {
          url: "/brands/trid.png",
          title: "Tri Drashya",
          id: 12,
     },
     {
          url: "/brands/mf.png",
          title: "My Fitness Peanut Butter.",
          id: 13,
     },
     //
     {
          url: "/brands/ig.png",
          title: "Indiegrow Fusion",
          id: 14,
     },
     {
          url: "/brands/hzc.png",
          title: "Hazelcop",
          id: 15,
     },
     {
          url: "/brands/ig.png",
          title: "Indiegrow Fusion",
          id: 16,
     },
];
