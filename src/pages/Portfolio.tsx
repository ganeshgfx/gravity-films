import React from "react";
import { WobbleCardDemo } from "../ui/WobbleCard";

import { Container } from "@mui/joy";
import { Title } from "@mui/icons-material";

export default function Portfolio() {
     return (
          <Container maxWidth="xl">
               <Title>Portfolio</Title>
               <WobbleCardDemo />
          </Container>
     );
}
