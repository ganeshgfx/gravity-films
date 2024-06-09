import React from "react";
import { BentoGridUi } from "../ui/BentoGrid";
import { Box, Card, Container, Stack } from "@mui/joy";
import Title from "../ui/Title";
import ServiceHero from "../ui/ServiceHero";
export default function Services() {
     return (
          <Container maxWidth="xl">
               <ServiceHero />
               <BentoGridUi />
          </Container>
     );
}
