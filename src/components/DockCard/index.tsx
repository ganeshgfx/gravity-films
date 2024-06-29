import * as React from "react";
import {
     animated,
     useIsomorphicLayoutEffect,
     useSpringValue,
} from "@react-spring/web";

import { useMousePosition } from "../hooks/useMousePosition";
import { useWindowResize } from "../hooks/useWindowResize";

import { useDock } from "../Dock/DockContext";
import styles from "../../components/DockCard/styles.module.scss";
import { Box } from "@mui/joy";
import { motion } from "framer-motion";

interface DockCardProps {
     children: React.ReactNode;
}

const INITIAL_WIDTH = 84;

export const DockCard = ({ children }: DockCardProps) => {
     const cardRef = React.useRef<HTMLButtonElement>(null!);
     /**
      * This doesn't need to be real time, think of it as a static
      * value of where the card should go to at the end.
      */

     const [elCenterX, setElCenterX] = React.useState<number>(0);

     const size = useSpringValue(INITIAL_WIDTH, {
          config: {
               mass: 0.1,
               tension: 320,
          },
     });

     const opacity = useSpringValue(0);
     const y = useSpringValue(0, {
          config: {
               friction: 29,
               tension: 238,
          },
     });

     const dock = useDock();

     // console.log(children.props.src.name);

     const name = children.props.src.name;

     /**
      * This is just an abstraction around a `useSpring` hook, if you wanted you could do this
      * in the hook above, but these abstractions are useful to demonstrate!
      */
     useMousePosition(
          {
               onChange: ({ value }) => {
                    const mouseX = value.x;

                    if (dock.width > 0) {
                         const transformedValue =
                              INITIAL_WIDTH +
                              36 *
                                   Math.cos(
                                        (((mouseX - elCenterX) / dock.width) *
                                             Math.PI) /
                                             2,
                                   ) **
                                        12;

                         if (dock.hovered) {
                              size.start(transformedValue);
                         }
                    }
               },
          },
          [elCenterX, dock],
     );

     useIsomorphicLayoutEffect(() => {
          if (!dock.hovered) {
               size.start(INITIAL_WIDTH);
          }
     }, [dock.hovered]);

     useWindowResize(() => {
          const { x } = cardRef.current.getBoundingClientRect();

          setElCenterX(x + INITIAL_WIDTH / 2);
     });

     const timesLooped = React.useRef(0);
     const timeoutRef = React.useRef<number>();
     const isAnimating = React.useRef(false);
     const handleClick = () => {
          if (!isAnimating.current) {
               isAnimating.current = true;
               opacity.start(0.5);

               timesLooped.current = 0;

               y.start(-INITIAL_WIDTH / 2, {
                    loop: () => {
                         if (3 === timesLooped.current++) {
                              timeoutRef.current = setTimeout(() => {
                                   opacity.start(0);
                                   y.set(0);
                                   isAnimating.current = false;
                                   timeoutRef.current = undefined;
                              }, 2000);
                              y.stop();
                         }
                         return { reverse: true };
                    },
               });
          } else {
               /**
                * Allow premature exit of animation
                * on a second click if we're currently animating
                */
               clearTimeout(timeoutRef.current);
               opacity.start(0);
               y.start(0);
               isAnimating.current = false;
          }
     };

     React.useEffect(() => () => clearTimeout(timeoutRef.current), []);

     const [hovered, setHovered] = React.useState(false);

     return (
          <motion.div
               whileHover={{ scale: 1.1 }}
               whileTap={{
                    scale: 0.9,
                    //blur
                    // filter: "blur(10px)",
               }}
               initial={{ scale: 1 }}
          >
               <Box
                    sx={{
                         marginTop: "4rem",
                         filter: "saturate(0%)contrast(1.2) brightness(1.1)",
                         // saturation 100 on hover
                         transition: "all 1s",
                         "&:hover": {
                              filter: "saturate(100%)contrast(1) brightness(1)",
                         },
                    }}
               >
                    <div className={styles["dock-card-container"]}>
                         <motion.span
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              transition={{ delay: 1 }}
                              style={{
                                   display: hovered ? "block" : "none",
                                   position: "absolute",
                                   top: -45,
                                   zIndex: 9999,
                                   backgroundColor: "rgba(0,0,0,0.8)",
                                   paddingTop: "8px",
                                   paddingBottom: "8px",
                                   paddingLeft: "16px",
                                   paddingRight: "16px",
                                   borderRadius: "5rem",
                                   textAlign: "center",
                                   textWrap: "nowrap",
                              }}
                         >
                              {name}
                         </motion.span>
                         <animated.button
                              ref={cardRef}
                              className={styles["dock-card"]}
                              // onClick={handleClick}
                              onMouseEnter={() => {
                                   setHovered(true);
                              }}
                              onMouseLeave={() => {
                                   setHovered(false);
                              }}
                              style={{
                                   width: size,
                                   height: size,
                                   y,
                              }}
                         >
                              {children}
                         </animated.button>
                         <animated.div
                              className={styles["dock-dot"]}
                              style={{ opacity }}
                         />
                    </div>
               </Box>
          </motion.div>
     );
};
