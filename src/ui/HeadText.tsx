import React from "react";

const HeadText = () => {
     return (
          <h2
               className="text-center text-5xl mt-20 md:mt-20 font-thin "
               style={{
                    color: "#2b2b2b",
               }}
          >
               {"“You can't blame gravity for falling in love” ~Albert Einstein"
                    .split("")
                    .map((child, idx) => (
                         <span className="hoverText" key={idx}>
                              {child}
                         </span>
                    ))}
          </h2>
     );
};

export default HeadText;
