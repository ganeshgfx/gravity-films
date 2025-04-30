"use client";
import React, { useEffect, useRef } from "react";
import {
     motion,
     useAnimation, useInView
} from "framer-motion";
const Reveal = ({ children, delay = 0, width = "fit-content", ...props }) => {
     const ref = useRef(null);
     const isInView = useInView(ref, { once: true });
     const mainControls = useAnimation();
     useEffect(() => {
          if (isInView) {
               mainControls.start("visible");
          }
     }, [isInView, mainControls]);
     return <div ref={ref} style={{ position: "relative", width: width, overflow: "hidden" }}>
          <motion.div
               variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1, },
               }}
               initial="hidden"
               animate={mainControls}
               transition={{ duration: 0.8, delay: delay, ease: "easeInOut" }}
          >{children}</motion.div>
     </div>;
};
export default Reveal;