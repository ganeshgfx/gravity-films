import { Instagram, MailOutline, WhatsApp } from "@mui/icons-material";
import { Chip, Container, Divider, Stack } from "@mui/joy";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { HiPhoneArrowUpRight } from "react-icons/hi2";
import React from "react";
import { GrLinkedinOption } from "react-icons/gr";
export default function Footer() {
     return (
          <div
               style={{
                    display: "flex",
                    width: "100%",
                    flexDirection: "column",
               }}
               className="bg1"
          >
               <div
                    style={{
                         width: "100%",
                         height: "100px",
                    }}
                    className="wave bg2"
               />
               <div className="bg2">
                    <Container maxWidth="lg">
                         <Divider
                              sx={{
                                   my: 2,
                              }}
                         />
                         <Stack>
                              <Stack gap={1}>
                                   <a
                                        href="https://instagram.com/gravity.films_"
                                        target="_blank"
                                   >
                                        <Chip
                                             startDecorator={
                                                  <Instagram
                                                       style={{
                                                            color: "white",
                                                       }}
                                                  />
                                             }
                                             variant="soft"
                                        >
                                             @gravity.films_
                                        </Chip>
                                   </a>
                                   <a
                                        href="https://wa.me/919033535655"
                                        target="_blank"
                                   >
                                        <Chip
                                             startDecorator={
                                                  <WhatsApp
                                                       style={{
                                                            color: "white",
                                                       }}
                                                  />
                                             }
                                             variant="soft"
                                        >
                                             Gravity Films
                                        </Chip>
                                   </a>
                                   <a
                                        href="mailto:info@gravityfilms.space"
                                        target="_blank"
                                   >
                                        <Chip
                                             startDecorator={
                                                  <MailOutline
                                                       style={{
                                                            color: "white",
                                                       }}
                                                  />
                                             }
                                             variant="soft"
                                        >
                                             info@gravityfilms.space
                                        </Chip>
                                   </a>
                                   <a
                                        href="https://www.linkedin.com/company/gravityfilms"
                                        target="_blank"
                                   >
                                        <Chip
                                             startDecorator={<LinkedInIcon />}
                                             variant="soft"
                                        >
                                             linkedin.com/company/gravityfilms
                                        </Chip>
                                   </a>
                                   <a href="tel:+919033535655" target="_blank">
                                        <Chip
                                             startDecorator={
                                                  <HiPhoneArrowUpRight />
                                             }
                                             variant="soft"
                                        >
                                             +91 903 3535655
                                        </Chip>
                                   </a>
                              </Stack>
                         </Stack>
                         <Divider
                              sx={{
                                   my: 2,
                              }}
                         />
                         <Stack
                              direction="row"
                              justifyContent="space-between"
                              alignItems="center"
                              sx={{
                                   mx: 1,
                              }}
                         >
                              <div>
                                   <p
                                        style={{
                                             color: "white",
                                             fontSize: "1rem",
                                        }}
                                   >
                                        Gravity Films™
                                   </p>
                              </div>
                              <div>
                                   <p
                                        style={{
                                             color: "white",
                                             fontSize: "1rem",
                                        }}
                                   >
                                        All Rights Reserved
                                   </p>
                              </div>
                         </Stack>
                         <Divider
                              sx={{
                                   my: 2,
                              }}
                         />
                    </Container>
               </div>
          </div>
     );
}
