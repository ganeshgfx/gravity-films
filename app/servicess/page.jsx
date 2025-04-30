import React from "react";
import HoverCards from "../../Components/HoverCards";
import ServiceHero from "../../Components/ServiceHero";
import Reveal from "@/Components/anime/Reveal";

export default function Page() {
     return (
          <Reveal>
               <div>
                    <HoverCards />
                    <ServiceHero />
               </div>
          </Reveal>
     );
}
