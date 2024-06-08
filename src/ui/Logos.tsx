import React from "react";
import { motion } from "framer-motion";
import { Container } from "@mui/joy";

export default function Logos() {
     const logos = [
          "HRMD.png",
          "ig.png",
          "cci.png",
          "mf.png",
          "3d.png",
          "hul.png",
          "fr.png",
          "scf.png",
          "nnj.png",
          "hzc.png",
          "nift.png",
          "arv.png",
          "dri.png",
     ];
     return (
          <Container
               maxWidth="lg"
               sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "1rem",
               }}
               className="px-1 mb-1"
          >
               {logos.map((logo, index) => (
                    <motion.div
                         key={`logo_slide_${index}`}
                         initial={{
                              opacity: 0,
                              // if odd index card,slide from right instead of left
                              y: index % 2 === 0 ? 50 : -50,
                         }}
                         whileInView={{
                              opacity: 1,
                              y: 0, // Slide in to its original position
                              transition: {
                                   duration: 2, // Animation duration
                              },
                         }}
                         viewport={{ once: true }}
                    >
                         <img
                              className="brand-logo"
                              src={`/logos/${logo}`}
                              alt={logo}
                         />
                    </motion.div>
               ))}
          </Container>
     );
}
