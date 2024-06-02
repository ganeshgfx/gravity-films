import React from "react";
import { TextGenerateEffect } from "../ui/Text-generate-effect";

const goal = `Oxygen gets you high. In a catastrophic emergency, we're taking giant, panicked breaths. Suddenly you become euphoric, docile. You accept your fate. It's all right here. Emergency water landing, six hundred miles an hour. Blank faces, calm as Hindu cows
`;
const about = `Oxygen gets you high. In a catastrophic emergency, we're taking giant, panicked breaths. Suddenly you become euphoric, docile. You accept your fate. It's all right here. Emergency water landing, six hundred miles an hour. Blank faces, calm as Hindu cows
`;
export default function About() {
     return (
          <div className="container">
               <div className="About" style={{ padding: "12rem" }}>
                    <h1 className="text-4xl md:text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                         ABOUT
                    </h1>
                    <TextGenerateEffect words={about} />;
               </div>
               <div
                    className="image"
                    style={{ display: "flex", justifyContent: "center" }}
               >
                    <img
                         src="public/space.jpg"
                         className="img-fluid"
                         alt="Responsive image"
                         style={{ width: "70%", borderRadius: "20px" }}
                    ></img>
               </div>
               <div className="goal" style={{ padding: "12rem" }}>
                    <h1 className="text-4xl md:text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                         OUR GOAL
                    </h1>
                    <TextGenerateEffect words={goal} />;
               </div>
          </div>
     );
}
