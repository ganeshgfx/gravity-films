import {
     Box,
     Container,
     Divider,
     Grid,
     List,
     ListItem,
     ListItemButton,
     ListItemContent,
     ListItemDecorator,
     Stack,
     Typography,
} from "@mui/joy";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import React from "react";
import TrailsText from "./TrailsText";
import {
     AnimationTwoTone,
     AutoFixHighTwoTone,
     CampaignTwoTone,
     Circle,
     ContentCutTwoTone,
     DrawTwoTone,
     KeyboardArrowLeft,
     KeyboardArrowRight,
     LanguageTwoTone,
     LocalSeeTwoTone,
     MovieFilterTwoTone,
     MusicNoteTwoTone,
     StayCurrentPortraitTwoTone,
     StickyNote2TwoTone,
     SupportAgentTwoTone,
     TheaterComedyTwoTone,
     TipsAndUpdatesTwoTone,
     VideocamTwoTone,
     ViewInArTwoTone,
} from "@mui/icons-material";
import Title from "./Title";
const services = [
     {
          id: 0,
          title: "Film Making",
          icon: <MovieFilterTwoTone />,
          color: "#f44336",
     },
     {
          id: 1,
          title: "Cinematography",
          icon: <VideocamTwoTone />,
          color: "#ff9800",
     },
     {
          id: 2,
          title: "Directing",
          icon: <TheaterComedyTwoTone />,
          color: "#4caf50",
     },
     {
          id: 3,
          title: "Editing",
          icon: <ContentCutTwoTone />,
          color: "#2196f3",
     },
     {
          id: 4,
          title: "VFX / CGI",
          icon: <ViewInArTwoTone />,
          color: "#9c27b0",
     },
     {
          id: 5,
          title: "Animations",
          icon: <AnimationTwoTone />,
          color: "#e91e63",
     },
     {
          id: 6,
          title: "Photography",
          icon: <LocalSeeTwoTone />,
          color: "#ff5722",
     },
     {
          id: 7,
          title: "Graphics Design",
          icon: <DrawTwoTone />,
          color: "#607d8b",
     },
     {
          id: 8,
          title: "Music / Sounds",
          icon: <MusicNoteTwoTone />,
          color: "#795548",
     },
     {
          id: 9,
          title: "Digital Marketing",
          icon: <CampaignTwoTone />,
          color: "#3f51b5",
     },
     {
          id: 10,
          title: "Website Development",
          icon: <LanguageTwoTone />,
          color: "#009688",
     },
     {
          id: 11,
          title: "App Development",
          icon: <StayCurrentPortraitTwoTone />,
          color: "#8bc34a",
     },
     {
          id: 12,
          title: "Content Writing",
          icon: <StickyNote2TwoTone />,
          color: "#ffeb3b",
     },
     {
          id: 13,
          title: "Tech Support",
          icon: <SupportAgentTwoTone />,
          color: "#ff9800",
     },
     {
          id: 14,
          title: "Brand Building",
          icon: <TipsAndUpdatesTwoTone />,
          color: "#ff5722",
     },
     {
          id: 15,
          title: "Visual Art",
          icon: <AutoFixHighTwoTone />,
          color: "#607d8b",
     },
];
const ShuffleHero = () => {
     return (
          <Container maxWidth="xl">
               <section className="w-full py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-8  mx-auto">
                    <div>
                         <Title title="Our Services" />
                         <Grid
                              my={1}
                              container
                              columns={{ xs: 8, sm: 8, md: 16 }}
                              sx={{ flexGrow: 1 }}
                         >
                              {services.map((service, index) => (
                                   <Grid xs={8} key={index}>
                                        <Stack
                                             direction="row"
                                             alignItems="center"
                                             spacing={1}
                                             px={2}
                                             py={1}
                                             sx={{
                                                  transformOrigin: "0% 0%",
                                                  border: "1px solid transparent",
                                                  borderRadius: "10px",
                                                  cursor: "pointer",
                                                  transition: "all 0.3s",
                                                  backgroundColor: "#1a1a1a",
                                                  "&:hover": {
                                                       transform:
                                                            "translateX(15px)rotate(-5deg)",
                                                       color: "#e6e6e6",
                                                       border: "1px solid #2d2d2d",
                                                  },
                                             }}
                                        >
                                             {service.icon}
                                             <Typography
                                                  noWrap
                                                  variant="plain"
                                                  sx={{
                                                       flexGrow: 1,
                                                       color: "inherit",
                                                  }}
                                             >
                                                  {service.title}
                                             </Typography>
                                             <KeyboardArrowRight />
                                        </Stack>
                                   </Grid>
                              ))}
                         </Grid>
                         <div
                              style={{
                                   visibility: "hidden",
                              }}
                         >
                              <Title title="." />
                         </div>
                    </div>
                    <ShuffleGrid />
               </section>
          </Container>
     );
};

const shuffle = (array) => {
     let currentIndex = array.length,
          randomIndex;

     while (currentIndex != 0) {
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;

          [array[currentIndex], array[randomIndex]] = [
               array[randomIndex],
               array[currentIndex],
          ];
     }

     return array;
};
const generateSquares = () => {
     return shuffle(services).map((sq) => (
          <motion.div
               key={sq.id}
               layout
               transition={{ duration: 1.5, type: "spring" }}
               className="w-full h-full flex items-center justify-center text-4xl text-white p-7 rounded-md shuffle"
               style={{
                    // backgroundImage: `url(${sq.src})`,
                    backgroundSize: "fit",
                    backgroundColor: "#262626",
               }}
          >
               {sq.icon}
          </motion.div>
     ));
};

const ShuffleGrid = () => {
     const timeoutRef = useRef(null);
     const [squares, setSquares] = useState(generateSquares());

     useEffect(() => {
          shuffleSquares();
          return () => clearTimeout(timeoutRef.current);
     }, []);

     const shuffleSquares = () => {
          setSquares(generateSquares());
          timeoutRef.current = setTimeout(shuffleSquares, 3000);
     };

     return (
          <div className="grid grid-cols-4 grid-rows-4 h-[450px] gap-1">
               {squares.map((sq) => sq)}
          </div>
     );
};

export default ShuffleHero;
