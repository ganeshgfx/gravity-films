import UIsparkle from "@/Components/UIsparkle";
import Focuscards from "@/Components/Focuscards";
import Ourclients from "@/Components/Ourclients";
import Ourservices from "@/Components/Ourservices";
import Reveal from "@/Components/anime/Reveal";
export default function Home() {
     return (
          <Reveal width="100%">
               <main>
                    <article
                         itemScope
                         itemType="http://schema.org/Article"
                         aria-label="Gravity Films - Creative & Innovative Business Solutions for Your Brand"
                         className="main-content"
                         role="main"
                    >
                         <meta
                              itemProp="headline"
                              content="Gravity Films - The Best in Class Creative & Innovative Business Solutions for Your Brand that You Can Trust"
                         />
                         <meta
                              itemProp="description"
                              content="We are a team of passionate developers and designers dedicated to creating innovative solutions that make a difference."
                         />
                         <meta itemProp="author" content="Gravity Films" />
                         <UIsparkle />
                         <Ourclients />
                         <Ourservices />
                         <Focuscards />
                         <div
                              style={{ opacity: 0 }}
                              className="flex flex-col items-center justify-center p-11 opacity-50 bg-gray-100"
                         >
                              <h3 className="text-xl font-bold text-center mt-10">
                                   We are a team of passionate developers and
                                   designers dedicated to creating innovative
                                   solutions that make a difference.
                              </h3>
                              <a
                                   className="text-xl text-center cursor-pointer mt-5"
                                   href="https://g.co/kgs/bmqE866"
                                   target="_blank"
                                   rel="noopener noreferrer"
                                   title="Learn more about us"
                              >
                                   Learn more about us
                              </a>
                         </div>
                    </article>
               </main>
          </Reveal>
     );
}
