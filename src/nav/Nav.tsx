import {
     CleanHandsOutlined,
     ExtensionOutlined,
     InfoOutlined,
     InfoRounded,
     InfoTwoTone,
     Instagram,
     LinkedIn,
     Mail,
     MailOutline,
     WhatsApp,
     Work,
     WorkOutline,
} from "@mui/icons-material";
import { Card, Container, Divider, IconButton, Stack } from "@mui/joy";
import { IconInfoCircle } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import Links from "./Links";
import { useMediaQuery } from "@mui/material";
import { GrLinkedinOption } from "react-icons/gr";
import React from "react";
function Nav() {
     const isSmallScreen = useMediaQuery("(max-width:768px)");
     return (
          <Container
               sx={{
                    pt: 4,
                    opacity: 0.75,
               }}
               maxWidth="xl"
          >
               <div
                    style={{
                         display: "flex",
                         justifyContent: "space-between",
                         alignItems: "center",
                    }}
               >
                    <Link to="/">
                         <img
                              style={{ height: 50, width: 50 }}
                              src="logo.svg"
                         ></img>
                    </Link>
                    <Link to="/">
                         <h1
                              style={{
                                   color: "white",
                                   textAlign: "start",
                                   marginLeft: 1,
                                   fontSize: "large",
                              }}
                         >
                              GRAVITY FILMS
                         </h1>
                    </Link>
                    <div
                         style={{
                              flexGrow: 1,
                              display: "flex",
                              justifyContent: "flex-end",
                         }}
                    >
                         <Links
                              isMobile={!isSmallScreen}
                              justifyContent="flex-end"
                         />
                         <div style={{ width: "20px" }} />
                         <Divider orientation="vertical" />
                    </div>

                    <Stack direction="row" spacing={1}>
                         <a
                              href="https://instagram.com/gravityfilmsin"
                              target="_blank"
                         >
                              <IconButton
                                   sx={{
                                        //hover effect
                                        transition: "0.5s",
                                        "&:hover": {
                                             backgroundColor:
                                                  "rgba(255,255,255,0.1)",
                                        },
                                   }}
                                   aria-label="Instagram"
                              >
                                   <Instagram style={{ color: "white" }} />
                              </IconButton>
                         </a>
                         <a href="https://wa.me/919033535655" target="_blank">
                              <IconButton
                                   sx={{
                                        //hover effect
                                        transition: "0.5s",
                                        "&:hover": {
                                             backgroundColor:
                                                  "rgba(255,255,255,0.1)",
                                        },
                                   }}
                                   aria-label="WhatsApp"
                              >
                                   <WhatsApp style={{ color: "white" }} />
                              </IconButton>
                         </a>
                         <a
                              href="mailto:info@gravityfilms.space"
                              target="_blank"
                         >
                              <IconButton
                                   sx={{
                                        //hover effect
                                        transition: "0.5s",
                                        "&:hover": {
                                             backgroundColor:
                                                  "rgba(255,255,255,0.1)",
                                        },
                                   }}
                                   aria-label="Email"
                              >
                                   <MailOutline style={{ color: "white" }} />
                              </IconButton>
                         </a>
                         {/* https://www.linkedin.com/company/gravityfilms */}
                         <a
                              href="https://www.linkedin.com/company/gravityfilms"
                              target="_blank"
                         >
                              <IconButton
                                   sx={{
                                        //hover effect
                                        transition: "0.5s",
                                        "&:hover": {
                                             backgroundColor:
                                                  "rgba(255,255,255,0.1)",
                                        },
                                   }}
                                   aria-label="LinkedIn"
                                   className="svg-container"
                              >
                                   {/* <LinkedIn style={{ color: "white" }} /> */}
                                   <GrLinkedinOption />
                              </IconButton>
                         </a>
                    </Stack>
               </div>
               <Divider sx={{ my: 1, opacity: 0 }} />
               <Links isMobile={isSmallScreen} justifyContent="space-around" />
               <Divider sx={{ my: 0.5, opacity: 0 }} />
          </Container>
     );
}

export default Nav;
