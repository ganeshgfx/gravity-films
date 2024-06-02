import React, { useRef } from "react";
import {
     motion,
     useMotionTemplate,
     useMotionValue,
     useSpring,
} from "framer-motion";
import { PointOfSaleRounded } from "@mui/icons-material";

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;

const HoverCard = (props) => {
     const ref = useRef(null);

     const x = useMotionValue(0);
     const y = useMotionValue(0);

     const xSpring = useSpring(x);
     const ySpring = useSpring(y);

     const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

     const handleMouseMove = (e) => {
          if (!ref.current) return [0, 0];

          const rect = ref.current.getBoundingClientRect();

          const width = rect.width;
          const height = rect.height;

          const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
          const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

          const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
          const rY = mouseX / width - HALF_ROTATION_RANGE;

          x.set(rX);
          y.set(rY);
     };

     const handleMouseLeave = () => {
          x.set(0);
          y.set(0);
     };

     return (
          <motion.div
               ref={ref}
               onMouseMove={handleMouseMove}
               onMouseLeave={handleMouseLeave}
               style={{
                    transformStyle: "preserve-3d",
                    transform,
                    zIndex: 3000,
                    backgroundColor: "#292929",
               }}
               className="relative h-48 w-48 lg:h-96 lg:w-96 rounded-xl"
          >
               <div
                    style={{
                         transform: "translateZ(75px)",
                         transformStyle: "preserve-3d",
                         backgroundColor: "#1d1d1d",
                         backgroundImage: `url(${props.data.url})`,
                         backgroundSize: "cover",
                         backgroundPosition: "center",
                    }}
                    className="absolute inset-4 grid rounded-xl shadow-lg"
               >
                    <h1
                         style={{
                              transform: "translateZ(10px)",
                         }}
                         className="text-2xl font-bold ms-5 mt-5 shadow-md"
                    >
                         {/* {props.data.title} */}
                    </h1>
               </div>
          </motion.div>
     );
};

export default HoverCard;
