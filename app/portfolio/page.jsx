import { Paraleximages } from "@/Components/Paralexiamges";
import { Compare } from "@/Components/ui/Compare";
import { VideosForPortfolio } from "@/Components/VideosForPortfolio";
import React from "react";
import Reveal from "@/Components/anime/Reveal";
const page = () => {
     return (
          <main>
               <article
                    itemScope
                    itemType="http://schema.org/Article"
                    aria-label="Gravity Films Portfolio"
                    className="main-content"
                    role="main"
               >
                    <meta
                         itemProp="headline"
                         content="Gravity Films - Portfolio Showcase of Cinematic Excellence and Editing Mastery"
                    />
                    <meta
                         itemProp="description"
                         content="Explore the portfolio of Gravity Films, showcasing cinematic excellence and editing mastery. Discover our captivating projects that redefine visual storytelling."
                    />
                    <meta itemProp="author" content="Gravity Films" />
                    <Reveal>
                         <div className="overflow-hidden">
                              <div className="compare lg:mb-4">
                                   <h2 className="text-2xl font-bold text-gray-800 text-center mb-4 lg:text-4xl">
                                        CINEMATIC EXPERIENCE
                                   </h2>
                                   <video
                                        src="./video/2.mp4"
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        poster=".\before.jpg"
                                        className="rounded-lg border border-gray-300 shadow-lg lg:w-full lg:h-[75vh] object-cover"
                                   />
                              </div>
                              <h2 className="text-2xl font-bold text-gray-800 text-center lg:text-4xl mt-8">
                                   EDITING
                              </h2>
                              <p className="text-justify text-gray-600 mb-4 px-4 lg:px-8 ">
                                   Experience the magic of editing with our advanced tools and techniques.
                                   Compare the before and after images to see the transformation.
                              </p>
                              <div className="w-full aspect-[16/9] px-4 flex items-center justify-center [perspective:800px] [transform-style:preserve-3d]">
                                   <Compare
                                        firstImage="./before.jpg"
                                        secondImage="./after.jpg"
                                        firstImageClassName="object-cover w-full h-full"
                                        secondImageClassname="object-cover w-full h-full"
                                        className="w-full h-full rounded-[22px] md:rounded-lg"
                                        slideMode="hover"
                                        autoplay={true}
                                   />
                              </div>

                              <Paraleximages />
                              <VideosForPortfolio />
                         </div>
                    </Reveal>
               </article>
          </main>
     );
};

export default page;
