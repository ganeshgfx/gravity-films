import { Divider } from "@mui/joy";
import React from "react";

function LogoSlider() {
     const logos_1 = [
          "HRMD.png",
          "nnj.png",
          "hul.png",
          "nift.png",
          "scf.png",
          "ig.png",
          "cci.png",
          "3d.png",
     ];
     const logos_2 = [
          "mf.png",
          "fr.png",
          "HRMD.png",
          "Nuts-n-Jars.png.webp",
          "hul.png",
          "nift.png",
          "scf.png",
          "hzc.png",
     ];
     return (
          <>
               <div style={{ margin: 75 }} />
               <div className="wrapper">
                    {logos_1.map((logo, index) => (
                         <div
                              key={index}
                              className={`item itemLeft ${
                                   "item" + (index + 1)
                              }`}
                              style={{
                                   display: "flex",
                                   justifyContent: "center",
                              }}
                         >
                              <img
                                   style={{
                                        position: "relative",
                                   }}
                                   src={`/logos/${logo}`}
                                   alt={logo}
                              />
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
               <div style={{ margin: 75 }} />
               <Divider />
          </>
     );
}

export default LogoSlider;
