import { Container, Grid, Stack, Typography } from "@mui/joy";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import React from "react";
import { KeyboardArrowRight } from "@mui/icons-material";
import Title from "./Title";
import { servicesDatas as services } from "../data/ServicesData";
const ShuffleHero = () => {
     return (
          <Container maxWidth="xl">
               <div
                    style={{
                         width: "100%",
                         display: "flex",
                         justifyContent: "center",
                         paddingTop: 35,
                    }}
               >
                    <Title title="Our Services" />
               </div>
               <section className="w-full pt-9 pb-12 grid grid-cols-1 md:grid-cols-2 items-center gap-8  mx-auto">
                    <div>
                         <Grid
                              my={1}
                              container
                              columns={{ xs: 8, sm: 8, md: 16 }}
                              sx={{ flexGrow: 1, mt: 4 }}
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
