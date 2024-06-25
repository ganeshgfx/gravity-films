import WhatsApp from "@mui/icons-material/WhatsApp";
import React from "react";
import {
     FiCreditCard,
     FiInstagram,
     FiMail,
     FiUser,
     FiUsers,
} from "react-icons/fi";
import { BsWhatsapp } from "react-icons/bs";
import { HiPhoneArrowUpRight } from "react-icons/hi2";

const SocialCards = () => {
     return (
          <div className="p-4">
               <div className="grid gap-4 grid-cols-2 lg:grid-cols-4">
                    <Card
                         title="Email"
                         subtitle="Mail Us"
                         href="mailto:info@gravityfilms.space"
                         Icon={FiMail}
                         bgColor="#07195299"
                         color="#071952"
                    />
                    <Card
                         title="Instagram"
                         subtitle="Checkout Our Instagram"
                         href="https://instagram.com/gravity.films_"
                         Icon={FiInstagram}
                         bgColor="#A0153E99"
                         color="#A0153E"
                    />
                    <Card
                         title="WhatsApp"
                         subtitle="Massage Us"
                         href="https://wa.me/919033535655"
                         Icon={BsWhatsapp}
                         bgColor="#0A684799"
                         color="#0A6847"
                    />
                    <Card
                         title="Call Us"
                         subtitle="Call Us Now"
                         href="tel:+919033535655"
                         Icon={HiPhoneArrowUpRight}
                         bgColor="#5E167599"
                         color="#5E1675"
                    />
               </div>
          </div>
     );
};

const Card = ({ title, subtitle, Icon, href, bgColor, color }) => {
     return (
          <a
               href={href}
               target="_blank"
               className="w-full p-4 border-[1px] relative overflow-hidden group bg-white"
               style={{
                    backgroundColor: opacity(bgColor),
                    borderColor: "#9f9f9f",
                    borderRadius: ".6rem",
               }}
          >
               <div
                    className="absolute inset-0 translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-500"
                    style={{
                         background: bgColor,
                    }}
               />

               <Icon
                    className="absolute z-10 -top-12 -right-12 text-9xl text-slate-100  group-hover:rotate-12 transition-transform duration-700"
                    style={{
                         color: "#9f9f9f",
                    }}
               />
               <Icon className="mb-2 text-2xl transition-colors relative z-10 duration-700" />
               <h3
                    className="font-medium text-lg text-slate-950 relative z-10 duration-300"
                    style={{
                         color: "#f9f9f9",
                    }}
               >
                    {title}
               </h3>
               <p
                    className="text-slate-400-200 relative z-10 duration-300"
                    style={{
                         color: "#9f9f9f",
                    }}
               >
                    {subtitle}
               </p>
          </a>
     );
};

export default SocialCards;

//eg #A0153E99 increase opacity 40 #A0153E40
function opacity(color) {
     return color.slice(0, -2) + "15";
}
