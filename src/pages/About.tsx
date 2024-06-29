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
          { src: "/members/bantai.jpg", name: "Vishal Bhoya" },
          { src: "/members/hetal.jpg", name: "Hetal Patel" },
          { name: "Sheetal Mishra", src: "/members/shital.jpg" },
          { name: "Jiten", src: "/members/jiten.jpg" },
          { name: "Ganesh Ghutiya", src: "/members/ganesh.jpg" },
          { name: "Ravi Kumar", src: "/members/rv.jpg" },
          { name: "Sarthak Patel", src: "/members/sarthak.jpg" },
          { name: "Pravin Gayakwad", src: "/members/pravin.jpg" },
          { name: "Sarthak Thakur", src: "/members/sarthak_t.jpg" },
          { name: "Sneha Maurya", src: "/members/sneha.jpg" },
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
                              <DockCard key={src.name}>
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
