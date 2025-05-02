import React from "react";
import HoverCards from "../../Components/HoverCards";
import ServiceHero from "../../Components/ServiceHero";
import Reveal from "@/Components/anime/Reveal";

export default function Page() {
     return (
          <main>
               <article
                    itemScope
                    itemType="http://schema.org/Article"
                    aria-label="Gravity Films Services We Offer to Our Clients"
                    className="main-content"
                    role="main"
               >
                    <meta
                         itemProp="headline"
                         content="Gravity Films - Services We Offer to Our Clients"
                    />
                    <meta
                         itemProp="description"
                         content="We offer a range of services including video production, photography, and post-production. Our team is dedicated to delivering high-quality content that meets your needs."
                    />
                    <meta itemProp="author" content="Gravity Films" />
                    <Reveal>
                         <div>
                              <HoverCards />
                              <ServiceHero />
                         </div>
                    </Reveal>
               </article>
          </main>
     );
}
