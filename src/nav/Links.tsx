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
     const btnStle = {
          px: 1,
          py: 0.7,
          transition: "0.5s",
          "&:hover": {
               backgroundColor: "rgba(255,255,255,0.1)",
               borderRadius: "10px",
          },
     };

     return (
          <Stack
               direction="row"
               justifyContent={justifyContent}
               alignItems="center"
               // sx={{
               //      width: isMobile ? "100%" : "unset",
               // }}
          >
               <Link to="/services">
                    <Stack
                         direction="row"
                         spacing={0.5}
                         alignItems="center"
                         sx={btnStle}
                    >
                         <CleanHandsOutlined style={{ color: "white" }} />
                         <Typography
                              style={{
                                   color: "white",
                                   textAlign: "start",
                                   fontFamily: "Poppins",
                              }}
                         >
                              Services
                         </Typography>
                    </Stack>
               </Link>
               <Link to="/portfolio">
                    <Stack
                         sx={btnStle}
                         direction="row"
                         alignItems="center"
                         spacing={0.5}
                    >
                         <WorkOutline style={{ color: "white" }} />
                         <Typography
                              style={{
                                   color: "white",
                                   textAlign: "start",
                                   fontFamily: "Poppins",
                              }}
                         >
                              Portfolio
                         </Typography>
                    </Stack>
               </Link>
               <Link to="/about">
                    <Stack
                         sx={btnStle}
                         direction="row"
                         alignItems="center"
                         spacing={0.5}
                    >
                         <IconInfoCircle style={{ color: "white" }} />
                         <Typography
                              sx={{
                                   color: "white",
                                   textAlign: "start",
                                   fontFamily: "Poppins",
                                   wordBreak: "keep-all",
                              }}
                         >
                              About&nbsp;Us
                         </Typography>
                    </Stack>
               </Link>
          </Stack>
     );
}
export default Links;
