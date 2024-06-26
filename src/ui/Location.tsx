"use client";
import React from "react";
import { PinContainer } from "./3d-pin";
import { Box, Stack } from "@mui/joy";

export function Location() {
     return (
          <a
               className="flex items-center justify-center"
               href="https://maps.app.goo.gl/ya5vhXJA29HZLBN69"
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
                              fontSize: "1rem",
                              fontWeight: "bold",
                              marginTop: "1rem",
                              marginLeft: "0.5rem",
                              flexGrow: 1,
                              display: "flex",
                              flexDirection: "column",
                         }}
                    >
                         <span>Siyaram Skyline,</span>
                         <span>
                              Near, At, near Our Lady Of Help English School,
                         </span>
                         <span>Samarvarni, Silvassa,</span>
                         <span>
                              Dadra and Nagar Haveli and Daman and Diu - 396230,
                         </span>
                         <span>India.</span>
                         <Box
                              sx={{
                                   color: "white",
                                   opacity: 0.05,
                                   //show on hover
                                   transition: "1.5s",
                                   "&:hover": {
                                        color: "white",
                                        opacity: 1,
                                   },
                              }}
                         >
                              Planet Earth, Milky Way Galaxy, Observable
                              Universe, ∞.
                         </Box>
                    </div>
                    <PinContainer
                         title="Loaction of Gravity Films"
                         href="https://maps.app.goo.gl/ya5vhXJA29HZLBN69"
                    >
                         <iframe
                              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d330.8412394038532!2d73.01316181371138!3d20.257120111563857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be0cb360f36347b%3A0xbef572bfddf82f9a!2sGravity%20Films!5e0!3m2!1sen!2sin!4v1719391451700!5m2!1sen!2sin"
                              loading="lazy"
                              style={{
                                   filter: "invert(90%)",
                              }}
                         ></iframe>
                    </PinContainer>
               </Stack>
          </a>
     );
}
