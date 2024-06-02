import { Container } from "@mui/joy";
import React from "react";

export default function Background() {
     return (
          <Container
               className="mobile-width"
               sx={{ position: "absolute", display: "flex" }}
               maxWidth="xl"
          >
               <div
                    className="card border border-1 gradient p-0 m-0"
                    style={{
                         opacity: "10%",
                         width: "100%",
                         height: "333.328px",
                         // zIndex: -1,
                         backgroundColor: "#0000",
                         borderRadius: "32px",
                         justifyContent: "center",
                    }}
               ></div>
          </Container>
     );
}
