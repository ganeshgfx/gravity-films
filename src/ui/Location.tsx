"use client";
import React from "react";
import { PinContainer } from "./3d-pin";
import { Stack } from "@mui/joy";

export function Location() {
     return (
          <a
               className="flex items-center justify-center"
               href="https://maps.app.goo.gl/f9xaNjLArTgfLtFY7"
               style={{
                    width: "100%",
               }}
          >
               <Stack
                    spacing={2}
                    sx={{
                         width: "100%",
                         flexDirection: "row",
                         //colomn for mobile
                         "@media (max-width: 600px)": {
                              flexDirection: "column",
                         },
                    }}
               >
                    <div
                         style={{
                              fontSize: "1.5rem",
                              fontWeight: "bold",
                              textAlign: "center",
                              flexGrow: 1,
                         }}
                    ></div>
                    <PinContainer
                         title="Loaction of Gravity Films"
                         href="https://maps.app.goo.gl/f9xaNjLArTgfLtFY7"
                    >
                         <iframe
                              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3743.0428054867616!2d73.01038087602741!3d20.257059413834348!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be0cb360f36347b%3A0xbef572bfddf82f9a!2sGravity%20Films!5e0!3m2!1sen!2sin!4v1718626313479!5m2!1sen!2sin&theme=dark"
                              loading="lazy"
                              data-theme="dark"
                              style={{
                                   filter: "invert(90%)",
                              }}
                         ></iframe>
                    </PinContainer>
               </Stack>
          </a>
     );
}
