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
export default function About() {
     return (
          <Container maxWidth="xl">
               <div className="ms-2 mb-5 mt-5">
                    <Title title="About Us" />
               </div>
               <BackgroundBeamsDemo />
               <div className="ms-2 mt-5 mb-5">
                    <Title title="Our Story" />
               </div>
               <div className="ms-2 mt-5 mb-5">
                    <Title title="Meet Our Team Members" />
               </div>
               <div className="flex mt-5 items-center justify-center mb-10 w-full">
                    <AnimatedTooltip />
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
