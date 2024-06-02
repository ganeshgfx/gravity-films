import React from "react";
import { BentoGridUi } from "../ui/BentoGrid";
import { Container } from "@mui/joy";
import Title from "../ui/Title";

export default function Services() {
     return (
          <Container maxWidth="xl">
               <Title title="OUR SERVICES" />
               <BentoGridUi />
          </Container>
     );
}
