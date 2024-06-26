import * as React from "react";
import { animated, useSpringValue } from "@react-spring/web";
import { clamp } from "@react-spring/shared";

import { useWindowResize } from "../hooks/useWindowResize";

import { DockContext } from "./DockContext";
import styles from "../../components/Dock/styles.module.scss";

interface DockProps {
     children: React.ReactNode;
}

export const DOCK_ZOOM_LIMIT = [-100, 50];

export const Dock = ({ children }: DockProps) => {
     const [hovered, setHovered] = React.useState(false);
     const [width, setWidth] = React.useState(0);
     const isZooming = React.useRef(false);
     const dockRef = React.useRef<HTMLDivElement>(null!);

     const setIsZooming = React.useCallback((value: boolean) => {
          isZooming.current = value;
          setHovered(!value);
     }, []);

     const zoomLevel = useSpringValue(1, {
          onChange: () => {
               setWidth(dockRef.current.clientWidth);
          },
     });

     useWindowResize(() => {
          setWidth(dockRef.current.clientWidth);
     });

     return (
          <div>
               <div className="hidden md:block">
                    <DockContext.Provider
                         value={{ hovered, setIsZooming, width, zoomLevel }}
                    >
                         <animated.div
                              ref={dockRef}
                              className={styles.dock}
                              onMouseOver={() => {
                                   if (!isZooming.current) {
                                        setHovered(true);
                                   }
                              }}
                              onMouseOut={() => {
                                   setHovered(false);
                              }}
                              style={{
                                   x: "0%",
                                   scale: zoomLevel
                                        .to({
                                             range: [
                                                  DOCK_ZOOM_LIMIT[0],
                                                  1,
                                                  DOCK_ZOOM_LIMIT[1],
                                             ],
                                             output: [2, 1, 0.5],
                                        })
                                        .to((value) => clamp(0.5, 2, value)),
                              }}
                         >
                              {children}
                         </animated.div>
                    </DockContext.Provider>
               </div>
               <div className="block md:hidden">
                    <div
                         style={{
                              display: "grid",
                              gridTemplateColumns: "repeat(6, 0.1fr)",
                              gridTemplateRows: "repeat(4,0.1fr)",
                              justifyContent: "center",
                              alignItems: "center",
                              gap: "1rem",
                         }}
                    >
                         {children}
                    </div>
               </div>
          </div>
     );
};
