import React from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import HoverCard from "./HoverCard";
import { LearnMore } from "./LearnMore";
export default function Scroll() {
     const targetRef = useRef(null);
     const { scrollYProgress } = useScroll({
          target: targetRef,
     });

     const x = useTransform(scrollYProgress, [0, 1], ["1%", "-100%"]);
     const x2 = useTransform(scrollYProgress, [0, 1], ["1%", "100%"]);
     const o = useTransform(scrollYProgress, [0, 1], ["1%", "100%"]);
     return (
          <section ref={targetRef} className="relative h-[300vh] ">
               <div className="sticky top-0 flex h-screen items-center overflow-hidden justify-center">
                    <div
                         style={{
                              height: "100%",
                              width: "100vw",
                              position: "absolute",
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                         }}
                    >
                         <LearnMore />
                    </div>
                    <div>
                         <motion.div style={{ x }} className="flex gap-4">
                              {cards1.map((card) => {
                                   return <Card card={card} key={card.id} />;
                              })}
                         </motion.div>
                         <motion.div
                              style={{ x: x2 }}
                              className="flex mt-4 gap-4"
                         >
                              {cards1.map((card) => {
                                   return <Card card={card} key={card.id} />;
                              })}
                         </motion.div>
                    </div>
               </div>
          </section>
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
          url: "/brands/cci.jpg",
          title: "Title",
          id: 1,
     },
     {
          url: "/brands/fr.png",
          title: "Title",
          id: 2,
     },
     {
          url: "/brands/hermod.jpg",
          title: "Title",
          id: 3,
     },
     {
          url: "/brands/hul.jpg",
          title: "Title",
          id: 4,
     },
     {
          url: "/brands/hzc.png",
          title: "Title",
          id: 5,
     },
];
