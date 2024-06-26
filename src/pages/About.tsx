import React, { useRef } from "react";
import { Container, Divider, Stack } from "@mui/joy";
import Title from "../ui/Title";
import { BackgroundBeamsDemo } from "../ui/BackgroundBeamsDemo";
import AnimatedTooltip from "../ui/AnimatedTooltip";
import { Location } from "../ui/Location";
import AnimatedTextCharacter from "../ui/AnimatedTextCharacter";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import {
     motion,
     useMotionTemplate,
     useMotionValue,
     useSpring,
} from "framer-motion";
import SocialCards from "../ui/SocialCards";
import { Dock } from "../components/Dock";
import { DockCard } from "../components/DockCard";
import { Card } from "../components/Card";
import Story from "../ui/Story";
export default function About() {
     const GRADIENTS = [
          "https://products.ls.graphics/mesh-gradients/images/03.-Snowy-Mint_1-p-130x130q80.jpeg",
          "https://products.ls.graphics/mesh-gradients/images/04.-Hopbush_1-p-130x130q80.jpeg",
          "https://products.ls.graphics/mesh-gradients/images/06.-Wisteria-p-130x130q80.jpeg",
          "https://products.ls.graphics/mesh-gradients/images/09.-Light-Sky-Blue-p-130x130q80.jpeg",
          "https://products.ls.graphics/mesh-gradients/images/12.-Tumbleweed-p-130x130q80.jpeg",
          "https://products.ls.graphics/mesh-gradients/images/15.-Perfume_1-p-130x130q80.jpeg",
          "https://products.ls.graphics/mesh-gradients/images/36.-Pale-Chestnut-p-130x130q80.jpeg",
          "https://products.ls.graphics/mesh-gradients/images/09.-Light-Sky-Blue-p-130x130q80.jpeg",
          "https://products.ls.graphics/mesh-gradients/images/12.-Tumbleweed-p-130x130q80.jpeg",
          "https://products.ls.graphics/mesh-gradients/images/15.-Perfume_1-p-130x130q80.jpeg",
          "https://products.ls.graphics/mesh-gradients/images/36.-Pale-Chestnut-p-130x130q80.jpeg",
     ];
     return (
          <Container maxWidth="xl">
               <div className="ms-2 mb-5 mt-5">
                    <Title title="About Us" />
               </div>
               <BackgroundBeamsDemo />
               <div
                    className="ms-2 mt-9 mb-5"
                    style={{
                         display: "flex",
                         justifyContent: "center",
                         alignItems: "center",
                    }}
               >
                    <Title title="Our Story" />
               </div>
               <div className="ms-2 mt-9 mb-5">
                    <Story />
               </div>
               <div className="ms-2 mt-19 mb-5">
                    <Title title="Meet Our Team Members" />
               </div>
               <div className="flex mt-5 items-center justify-center mb-10 w-full">
                    <Dock>
                         {GRADIENTS.map((src, index) => (
                              <DockCard key={src}>
                                   <Card src={src} />
                              </DockCard>
                         ))}
                    </Dock>
               </div>
               <div className="ms-2 mt-5">
                    <Title title="Contact Us" />
               </div>
               <SocialCards />
               <div className="ms-2 mt-5">
                    <Title title="Locate Us" />
               </div>
               <Location />
          </Container>
     );
}
const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;
