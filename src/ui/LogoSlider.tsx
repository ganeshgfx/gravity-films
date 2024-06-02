import React from "react";

function LogoSlider() {
     const logos_1 = [
          "HRMD.svg",
          "Nuts-n-Jars.png.webp",
          "hul.svg",
          "nift.png",
          "scf.png",
          "ig.png",
          "cci.png",
          "3d.png",
          "hzc.png",
     ];
     const logos_2 = [
          "mf.svg",
          "fr.png",
          "HRMD.svg",
          "Nuts-n-Jars.png.webp",
          "hul.svg",
          "nift.png",
          "scf.png",
          "ig.png",
     ];
     return (
          <>
               <div className="wrapper">
                    {logos_1.map((logo, index) => (
                         <div
                              key={index}
                              className={`item itemLeft ${
                                   "item" + (index + 1)
                              }`}
                         >
                              <img src={`/logos/${logo}`} alt={logo} />
                         </div>
                    ))}
               </div>
               <div className="wrapper">
                    {logos_2.map((logo, index) => (
                         <div
                              key={index}
                              className={`item itemRight ${
                                   "item" + (index + 1)
                              }`}
                         >
                              <img src={`/logos/${logo}`} alt={logo} />
                         </div>
                    ))}
               </div>
          </>
     );
}

export default LogoSlider;
