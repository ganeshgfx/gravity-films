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
     ];
     return (
          <Container
               maxWidth="lg"
               sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "1rem",
               }}
          >
               {logos.map((logo, index) => (
                    <img
                         style={{
                              height: "64px",
                              margin: "1rem",
                         }}
                         src={`/logos/${logo}`}
                         alt={logo}
                    />
               ))}
          </Container>
     );
}
