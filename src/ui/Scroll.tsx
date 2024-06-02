import React from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import HoverCard from "./HoverCard";
import { LearnMore } from "./LearnMore";
import { Container } from "@mui/joy";
import Title from "./Title";
export default function Scroll() {
     const targetRef = useRef(null);
     const { scrollYProgress } = useScroll({
          target: targetRef,
     });

     const x = useTransform(scrollYProgress, [0, 1], ["1%", "-100%"]);
     const x2 = useTransform(scrollYProgress, [0, 1], ["1%", "100%"]);
     const o = useTransform(scrollYProgress, [0, 1], ["1%", "100%"]);
     return (
          <>
               {/* <div className="mask-top" /> */}
               <section
                    ref={targetRef}
                    className="relative h-[300vh] md:h-[300vh] mask"
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
                    <div className="sticky top-0 flex h-screen items-center overflow-hidden justify-center">
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
                              <div>
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
                         </div>
                    </div>
               </section>
          </>
     );
}
const Card = ({ card }) => {
     return (
          <HoverCard data={card} />
          // <div
          //      key={card.id}
          //      className="group relative h-[512px] w-[512px] overflow-hidden bg-neutral-200"
          // >
          //      <div
          //           style={{
          //                backgroundImage: `url(${card.url})`,
          //                backgroundSize: "cover",
          //                backgroundPosition: "center",
          //           }}
          //           className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
          //      ></div>
          //      <div className="absolute inset-0 z-10 grid place-content-center">
          //           <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-white backdrop-blur-lg">
          //                {card.title}
          //           </p>
          //      </div>
          // </div>
     );
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
