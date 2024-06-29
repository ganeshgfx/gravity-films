import { Instagram, MailOutline, WhatsApp } from "@mui/icons-material";
import { Box, Chip, Container, Divider, Stack } from "@mui/joy";
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
                    <Container
                         maxWidth="xl"
                         sx={{
                              opacity: 0.5,
                         }}
                    >
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
                              <Stack
                                   gap={1}
                                   sx={{
                                        flexGrow: 1,
                                   }}
                              >
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
                                        style={{
                                             marginLeft: "3px",
                                        }}
                                        href="tel:+919033535655"
                                        target="_blank"
                                   >
                                        <Chip
                                             startDecorator={
                                                  <HiPhoneArrowUpRight />
                                             }
                                             variant="soft"
                                        >
                                             +91 903 3535655
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
                              </Stack>
                              <Stack sx={{}}>
                                   <div
                                        style={{
                                             flexGrow: 1,
                                             display: "flex",
                                             justifyContent: "flex-end",
                                        }}
                                   >
                                        <img
                                             src="/logo-footer.svg"
                                             style={{
                                                  width: "50%",
                                                  height: "50%",
                                                  objectFit: "contain",
                                             }}
                                             alt="logo"
                                        />
                                   </div>
                              </Stack>
                         </Stack>
                         <Divider
                              sx={{
                                   my: 0.5,
                                   visibility: "hidden",
                              }}
                         />
                         <Stack
                              direction="row-reverse"
                              justifyContent="space-between"
                              alignItems="center"
                              sx={{
                                   mx: 2,
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
                         </Stack>

                         <Box
                              sx={{
                                   mx: 2.5,
                              }}
                         >
                              <p
                                   style={{
                                        color: "white",
                                        fontSize: "1rem",
                                   }}
                              >
                                   All Rights Reserved
                              </p>
                         </Box>
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
