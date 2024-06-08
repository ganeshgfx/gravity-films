import { Container } from "@mui/joy";
import React from "react";
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
                         <div
                              style={{
                                   display: "flex",
                                   justifyContent: "space-between",
                                   alignItems: "center",
                                   padding: "20px 0",
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
                         </div>
                    </Container>
               </div>
          </div>
     );
}
