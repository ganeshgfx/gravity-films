import { CleanHandsOutlined, WorkOutline } from "@mui/icons-material";
import { Card, Stack, Typography } from "@mui/joy";
import { IconInfoCircle } from "@tabler/icons-react";
import React from "react";
import { Link } from "react-router-dom";

const Links = (props: any) => {
     const ui = props.isMobile ? (
          giveList(props.justifyContent, props.isMobile)
     ) : (
          <></>
     );
     const ui2 =
          props.justifyContent == "space-around" && props.isMobile ? (
               <Card
                    color="primary"
                    invertedColors={false}
                    orientation="horizontal"
                    size="lg"
                    variant="soft"
                    sx={{
                         p: 2,
                         bgcolor: "primary.main",
                         justifyContent: "space-around",
                    }}
               >
                    {ui}
               </Card>
          ) : (
               ui
          );
     return ui2;
};
function giveList(justifyContent, isMobile) {
     return (
          <Stack
               direction="row"
               justifyContent={justifyContent}
               spacing={2}
               alignItems="center"
               // sx={{
               //      width: isMobile ? "100%" : "unset",
               // }}
          >
               <Link to="/services">
                    <Stack direction="row" spacing={2} alignItems="center">
                         <CleanHandsOutlined style={{ color: "white" }} />
                         <Typography
                              style={{
                                   color: "white",
                                   textAlign: "center",
                                   fontFamily: "Poppins",
                              }}
                         >
                              Services
                         </Typography>
                    </Stack>
               </Link>
               <Link to="/portfolio">
                    <Stack direction="row" alignItems="center" spacing={1}>
                         <WorkOutline style={{ color: "white" }} />
                         <Typography
                              style={{
                                   color: "white",
                                   textAlign: "center",
                                   fontFamily: "Poppins",
                              }}
                         >
                              Portfolio
                         </Typography>
                    </Stack>
               </Link>
               <Link to="/about">
                    <Stack direction="row" alignItems="center" spacing={1}>
                         <IconInfoCircle style={{ color: "white" }} />
                         <Typography
                              style={{
                                   color: "white",
                                   textAlign: "center",
                                   fontFamily: "Poppins",
                              }}
                         >
                              About Us
                         </Typography>
                    </Stack>
               </Link>
          </Stack>
     );
}
export default Links;
