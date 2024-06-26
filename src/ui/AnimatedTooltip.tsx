"use client";

import React from "react";
import DynamicDock from "dynamic-dock";
import { Card } from "../../src/components/Card";
import { Dock } from "../../src/components/Dock";
import { DockCard } from "../../src/components/DockCard";
import { DockDivider } from "../../src/components/DockDivider";

export default function AnimatedTooltip() {
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
          </div>
     );
}
