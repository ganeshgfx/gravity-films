import React from "react";
import { cn } from "../utils/cn";
import {
     IconClipboardCopy,
     IconFileBroken,
     IconSignature,
} from "@tabler/icons-react";
import Title from "./Title";
import {
     LOGOS_IDS,
     portfolioData,
     servicesData,
     servicesToBrands,
} from "../data/ServicesData";
import { Box, Card, CardOverflow, Typography } from "@mui/joy";
import Modal from "./Modal";
import { DirectionAwareHover } from "./DirectionAwareHover";
export function BentoGridUi() {
     return (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mx-auto">
               {servicesData.map((data, index) => (
                    <div key={index}>
                         <Card
                              sx={{
                                   backgroundColor: "#1e1e1e",
                                   borderRadius: "16px",
                                   display: "flex",
                                   flexDirection: "column",
                                   cursor: "pointer",
                              }}
                              key={index}
                         >
                              <CardOverflow
                                   className="service-icon"
                                   sx={{
                                        display: "grid",
                                        placeItems: "end",
                                        backgroundColor: "#262626",
                                        py: 2,
                                   }}
                              >
                                   {data.icon}
                              </CardOverflow>
                              <div
                                   style={{
                                        color: "white",
                                        fontSize: "1.5rem",
                                        marginLeft: ".5rem",
                                   }}
                              >
                                   <Title title={data.title} center={false} />
                              </div>
                              <Typography sx={{ flexGrow: 1, ml: ".5rem" }}>
                                   {data.text}
                              </Typography>
                              <Modal>
                                   <div
                                        style={{
                                             display: "flex",
                                             flexWrap: "wrap",
                                             justifyContent: "center",
                                             gap: "1rem",
                                             marginTop: "1rem",
                                             marginBottom: "1rem",
                                        }}
                                   >
                                        {/* {getBrandData(data.id)} */}
                                        {/* {portfolioData
                                             .get(data.id)
                                             .map((item, i) => (
                                                  // <img src={item} />

                                                  <DirectionAwareHover
                                                       imageUrl={item}
                                                       children={undefined}
                                                  ></DirectionAwareHover>
                                             ))} */}
                                   </div>
                              </Modal>
                         </Card>
                    </div>
               ))}
          </div>
     );
}
const Skeleton = () => (
     <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);
const items = [
     {
          title: "The Dawn of Innovation",
          description:
               "Explore the birth of groundbreaking ideas and inventions.",
     },
     {
          title: "The Digital Revolution",
          description: "Dive into the transformative power of technology.",
     },
     {
          title: "The Art of Design",
          description:
               "Discover the beauty of thoughtful and functional design.",
     },
];

const BentoGrid = ({
     className,
     children,
}: {
     className?: string;
     children?: React.ReactNode;
}) => {
     return (
          <div
               className={cn(
                    "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4  mx-auto ",
                    className,
               )}
          >
               {children}
          </div>
     );
};

const BentoGridItem = ({
     className,
     title,
     description,
}: {
     className?: string;
     title?: string | React.ReactNode;
     description?: string | React.ReactNode;
     header?: React.ReactNode;
     icon?: React.ReactNode;
}) => {
     return (
          <div
               className={cn(
                    "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-aqua border border-transparent justify-between flex flex-col space-y-4",
                    className,
               )}
               style={{ borderColor: "#3a3a3a", backgroundColor: "#1f1f1f" }}
          >
               <Skeleton />
               <div
                    className="group-hover/bento:translate-x-2 transition duration-200"
                    style={{ color: "white" }}
               >
                    <div
                         className="font-sans font-bold text-neutral-600 :text-neutral-200 mb-2 mt-2"
                         style={{ color: "white" }}
                    >
                         {title}
                    </div>
                    <div
                         className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300"
                         style={{ color: "white" }}
                    >
                         {description}
                    </div>
               </div>
          </div>
     );
};
function getBrandData(id: string) {
     const brands = servicesToBrands.get(id).map((brandId, i) => {
          getBrandData(brandId);
     });
     return brands;
}
