import React, { useRef } from "react";
import Title from "./Title";
import { Card, Divider, Stack, Typography } from "@mui/joy";
import {
     motion,
     useMotionTemplate,
     useMotionValue,
     useSpring,
} from "framer-motion";
import AnimatedTextCharacter from "./AnimatedTextCharacter";
export default function ServiceHero() {
     return (
          <Card
               sx={{
                    p: "24px",
                    mb: "16px",
                    borderRadius: "16px",
               }}
          >
               <Divider
                    sx={{
                         my: 0.5,
                         visibility: "hidden",
                    }}
               />
               <Title
                    title="We Provide Exceptional Services for All!"
                    center={true}
               />
               <Divider
                    sx={{
                         my: 1,
                         visibility: "hidden",
                    }}
               />
               <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                         duration: 4,
                         type: "spring",
                    }}
                    style={{
                         marginTop: 2,
                    }}
                    className="grid grid-cols-1 grid-rows-3 lg:grid-cols-3 md:grid-rows-1 gap-4 h-full"
               >
                    {datas.map((data, index) => (
                         // <InfoCard key={index} data={data} />
                         <HoverCard data={data} key={index} />
                    ))}
                    <Divider
                         sx={{
                              my: 0.5,
                              visibility: "hidden",
                         }}
                    />
               </motion.div>
          </Card>
     );
}
const datas = [
     {
          title: "INDIVIDUALS",
          text: "We offer personalized services for individuals, including film making, photography, graphics design, and content writing. Elevate your personal projects with our professional expertise.",
          color: "#442728",
          image: "/services/alpha.svg",
     },
     {
          title: "SMALL BUSINESSES",
          text: "Boost your small business with our website development, digital marketing, and brand building services. Our creative solutions help you stand out and grow effectively.",
          color: "#39473e",
          image: "/services/beta.svg",
     },
     {
          title: "LARGE ENTERPRISES",
          text: "For large enterprises, we provide scalable services like advanced VFX, high-end cinematography, and comprehensive tech support to maintain your competitive edge.",
          color: "#233840",
          image: "/services/gamma.svg",
     },
];

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;

const HoverCard = (props) => {
     const data = props.data;
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
                    cursor: "pointer",
                    backgroundColor: "#292929",
                    padding: "1px",
               }}
               className="relative rounded-xl"
          >
               <div
                    style={{
                         transform: "translateZ(75px)",
                         transformStyle: "preserve-3d",
                         backgroundColor: data.color,
                         borderStyle: "solid",
                         borderWidth: "1px",
                         borderColor: "#252525",
                         padding: "20px",
                         backgroundImage: `url(${data.image})`,
                         backgroundPosition: "right bottom",
                         backgroundOrigin: "content-box",
                         backgroundSize: "contain",
                         backgroundRepeat: "no-repeat",
                         height: "100%",
                    }}
                    className=" inset-4 grid rounded-xl shadow-lg"
               >
                    <div
                         style={{
                              transform: "translateZ(60px)",
                              color: "#c7c7c7",
                              fontWeight: 500,
                         }}
                    >
                         <AnimatedTextCharacter text={data.title} />
                    </div>

                    <Divider
                         sx={{
                              mt: 2,
                              visibility: "hidden",
                         }}
                    />
                    <motion.span
                         initial={{ opacity: 0 }}
                         animate={{ opacity: 1 }}
                         transition={{
                              duration: 5,
                         }}
                         style={{
                              color: "#c7c7c7",
                              transform: "translateZ(50px)",
                         }}
                    >
                         {data.text}
                    </motion.span>
                    <Divider
                         sx={{
                              m: 12,
                              visibility: "hidden",
                         }}
                    />
               </div>
          </motion.div>
     );
};
