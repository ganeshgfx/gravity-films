import React from "react";
import { WobbleCardDemo } from "../ui/WobbleCard";
import { Container } from "@mui/joy";

export default function Portfolio() {
     return (
          <>
               <Container maxWidth="xl">
                    <span className="text-4xl md:text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                         OUR WORKS
                    </span>
                    <WobbleCardDemo />
               </Container>
          </>
     );
}
