import React from "react";
import { cn } from "../utils/cn";
import {
     IconClipboardCopy,
     IconFileBroken,
     IconSignature,
} from "@tabler/icons-react";
import Title from "./Title";
import {
     servicesDatas,
     servicesToBrands,
     portfolioData,
} from "../data/ServicesData";
import { Box, Card, CardOverflow, Typography } from "@mui/joy";
import Modal from "./Modal";
import { DirectionAwareHover } from "./DirectionAwareHover";
export function BentoGridUi() {
     const services = servicesDatas.map((data, index) => {
          return data.id;
     });
     const works = services.map((service) => {
          return servicesToBrands.get(service);
     });
     //console.log(works);
     return (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mx-auto">
               {servicesDatas.map((data, index) => (
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
                                        {manipulateData(data.id)}

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

function manipulateData(id) {
     try {
          const brandsArray = servicesToBrands.get(id);

          const arrayOfWorksArray = brandsArray.map((brand, i) => {
               return portfolioData.get(brand);
          });

          const works = arrayOfWorksArray.flat();

          return works.map((item, i) => {
               const fileType = checkFileTypeImageOrVideoFromUrlEnd(item.data);

               if (item.type == id) {
                    return (
                         <DirectionAwareHover
                              key={i}
                              imageUrl={item.data}
                              children={undefined}
                              isImage={fileType === "image"}
                         ></DirectionAwareHover>
                    );
               }
          });
     } catch (e) {
          //console.log(e);
     }
}

function checkFileTypeImageOrVideoFromUrlEnd(url) {
     const imageExtensions = ["jpg", "jpeg", "png", "svg", "gif"];
     const videoExtensions = ["mp4", "mov", "avi", "mkv", "webm"];
     const extension = url.split(".").pop();
     if (imageExtensions.includes(extension)) {
          return "image";
     } else if (videoExtensions.includes(extension)) {
          return "video";
     }
     return "unknown";
}
