"use client";

import React from "react";
import DynamicDock from "dynamic-dock";
import { Card } from "../../src/components/Card";
import { Dock } from "../../src/components/Dock";
import { DockCard } from "../../src/components/DockCard";
import { DockDivider } from "../../src/components/DockDivider";

export default function AnimatedTooltip() {
     const GRADIENTS = [
          "https://products.ls.graphics/mesh-gradients/images/03.-Snowy-Mint_1-p-130x130q80.jpeg",
          "https://products.ls.graphics/mesh-gradients/images/04.-Hopbush_1-p-130x130q80.jpeg",
          "https://products.ls.graphics/mesh-gradients/images/06.-Wisteria-p-130x130q80.jpeg",
          "https://products.ls.graphics/mesh-gradients/images/09.-Light-Sky-Blue-p-130x130q80.jpeg",
          "https://products.ls.graphics/mesh-gradients/images/12.-Tumbleweed-p-130x130q80.jpeg",
          "https://products.ls.graphics/mesh-gradients/images/15.-Perfume_1-p-130x130q80.jpeg",
          null,
          "https://products.ls.graphics/mesh-gradients/images/36.-Pale-Chestnut-p-130x130q80.jpeg",
     ];
     return (
          <div
               style={{
                    display: "flex",
                    height: "100px",
               }}
          >
               {/* <DynamicDock gapX={10} imageWidth={100}>
                    <img
                         src="https://picsum.photos/300/300"
                         alt="TypeScript Image"
                         width={100}
                         height={100}
                         className="rounded-full"
                    />
                    <img
                         src="https://picsum.photos/300/300"
                         alt="React Image"
                         width={100}
                         height={100}
                         className="rounded-full"
                    />
                    <img
                         src="https://picsum.photos/300/300"
                         alt="NPM Image"
                         width={100}
                         height={100}
                         className="rounded-full"
                    />
                    <img
                         src="https://picsum.photos/300/300"
                         alt="ViteJs Image"
                         width={100}
                         height={100}
                         className="rounded-full"
                    />
                    <img
                         src="https://picsum.photos/300/300"
                         alt="ViteJs Image"
                         width={100}
                         height={100}
                         className="rounded-full"
                    />
                    <img
                         src="https://picsum.photos/300/300"
                         alt="ViteJs Image"
                         width={100}
                         height={100}
                         className="rounded-full"
                    />
                    <img
                         src="https://picsum.photos/300/300"
                         alt="ViteJs Image"
                         width={100}
                         height={100}
                         className="rounded-full"
                    />
               </DynamicDock> */}
               <Dock>
                    {GRADIENTS.map((src, index) =>
                         src ? (
                              <DockCard key={src}>
                                   <Card src={src} />
                              </DockCard>
                         ) : (
                              <DockDivider key={index} />
                         ),
                    )}
               </Dock>
          </div>
     );
}
