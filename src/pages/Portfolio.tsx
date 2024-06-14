import React from "react";
import { WobbleCardDemo } from "../ui/WobbleCard";

import { Container } from "@mui/joy";
import { Title } from "@mui/icons-material";
import { FlipWords } from "../ui/FlipWords";

export default function Portfolio() {
     return (
          <Container maxWidth="xl">
               <Title>Portfolio</Title>
               <div>
                    <span>the</span>
                    <span>
                         <FlipWords words={["dasf0", "dsfds", "cxvxdcmv x "]} />
                    </span>
               </div>
               <WobbleCardDemo />
          </Container>
     );
}
