import { useRef, useState } from "react";
import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";

const TARGET_TEXT = "Learn More";
const CYCLES_PER_LETTER = 2;
const SHUFFLE_TIME = 50;

const CHARS = "!@#$%^&*():{};|,.<>/?";

const LMButton = () => {
     const intervalRef = useRef(null);

     const [text, setText] = useState(TARGET_TEXT);

     const scramble = () => {
          let pos = 0;

          intervalRef.current = setInterval(() => {
               const scrambled = TARGET_TEXT.split("")
                    .map((char, index) => {
                         if (pos / CYCLES_PER_LETTER > index) {
                              return char;
                         }

                         const randomCharIndex = Math.floor(
                              Math.random() * CHARS.length,
                         );
                         const randomChar = CHARS[randomCharIndex];

                         return randomChar;
                    })
                    .join("");

               setText(scrambled);
               pos++;

               if (pos >= TARGET_TEXT.length * CYCLES_PER_LETTER) {
                    stopScramble();
               }
          }, SHUFFLE_TIME);
     };

     const stopScramble = () => {
          clearInterval(intervalRef.current || undefined);

          setText(TARGET_TEXT);
     };

     return (
          <Link to="/portfolio">
               <motion.button
                    whileHover={{
                         scale: 1.025,
                    }}
                    whileTap={{
                         scale: 0.975,
                    }}
                    onMouseEnter={scramble}
                    onMouseLeave={stopScramble}
                    style={{
                         zIndex: 90000,
                         backgroundColor: "#292929",
                         opacity: 0.7,
                    }}
                    className="group relative overflow-hidden rounded-xl border-[1px] px-8 py-6 font-mono font-medium uppercase text-neutral-300 transition-colors hover:text-indigo-300"
               >
                    <div
                         className="relative z-10 flex items-center gap-2"
                         style={{ color: "white" }}
                    >
                         <span
                              style={{
                                   fontSize: "1.5rem",
                              }}
                         >
                              {text}
                         </span>
                    </div>
                    <motion.span
                         initial={{
                              y: "100%",
                         }}
                         animate={{
                              y: "-100%",
                         }}
                         transition={{
                              repeat: Infinity,
                              repeatType: "mirror",
                              duration: 1,
                              ease: "linear",
                         }}
                         className="duration-300 absolute inset-0 z-0 scale-125 bg-gradient-to-t from-white-400/0 from-40% via-white-400/100 to-white-400/0 to-60% opacity-0 transition-opacity group-hover:opacity-100"
                    />
               </motion.button>
          </Link>
     );
};

export default LMButton;
