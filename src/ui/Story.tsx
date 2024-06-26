import * as React from "react";
import { useInView, animated, config } from "@react-spring/web";
import styled from "styled-components";
import { FlipWords } from "./FlipWords";

const PAGE_TITLES = [
     `Our story begins in a small town, where a team with big dreams started from scratch. We had a rough plan to launch a creative media agency, focusing on making our brand identity creating content that made sense—believing in the idea that gravity attracts everything in filmmaking and creative media`,
     `Gravity Films started as an Instagram page, where we quickly landed some exciting projects. As our quality and skills improved, we expanded by adding a new team member and eventually decided to establish an office. With our enhanced services, we gained widespread appreciation for our work.`,
     `As we continue to grow day by day, we've become a team of 15 individuals. Looking ahead, our vision is to expand this team to include 100+ creative young minds. Our success lies in leading brands, major companies, and fostering a productive aura of creativity, guided by the motto that fortune always grows. We aim to scale globally collaborating with larger brands and strengthening our powerful community in the digital world.`,
     `In filmmaking, we've built a tech-savvy team, and our journey has been a smooth one as we've developed brands through designing and creating content that resonates powerfully in the ever-evolving meta world of online presence and marketing.`,
     ``,
];
export default function Story() {
     return (
          <div>
               {PAGE_TITLES.map((title, index) => (
                    <Page key={title}>
                         <Title i={index}>{title}</Title>
                    </Page>
               ))}
          </div>
     );
}
export const Title = ({
     children,
     i,
}: {
     children: React.ReactNode;
     i: Number;
}) => {
     const isEven = Number(i) % 2 === 0;
     const [ref, springs] = useInView(
          () => ({
               from: {
                    opacity: 0.05,
                    x: isEven ? -200 : 200,
                    scale: 0.7,
               },
               to: {
                    opacity: 1,
                    x: 0,
                    rotate: 0,
                    scale: 1,
               },
          }),
          {
               rootMargin: "-45% 0px -45% 0px",
               amount: buildInteractionObserverThreshold(),
          },
     );

     return (
          <>
               <animated.h2 ref={ref} className="story-text" style={springs}>
                    {children}
               </animated.h2>
          </>
     );
};
const buildInteractionObserverThreshold = (count = 100): number[] => {
     const threshold: number[] = [];

     const parts = 1 / count;

     for (let i = 0; i <= count; i++) {
          threshold.push(parseFloat((parts * i).toFixed(2)));
     }

     return threshold;
};

const Page = styled.div`
     display: flex;
     justify-content: center;
     align-items: center;
     margin-top: 40px;

     & > h2 {
          font-size: 2vw;
          text-align: center;
     }
`;
