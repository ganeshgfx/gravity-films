import Brand from "./Blogo.svg";
import { Box, Typography, Card, CardContent, Container } from "@mui/material";
import Services from "./Body/Services";
import Background from "./UI/Background";
import { Suspense } from "react";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Gravity from "./3d/Gravity";
import { NavLink, Route, Router, Routes } from "react-router-dom";
import About from "./about/About";
import AboutCarousel from "./about/AboutCarousel";
import WorkSampleCarousel from "./work/WorkSampleCarousel";

function Body() {
  return (
    <div className=" d-flex justify-content-center flex-column flex-nowrap">
      <div
        className="card p-0 m-0"
        style={{ backgroundColor: "#0000", color: "white" }}
      >
        <Background />
        <div className="d-flex justify-content-center flex-column flex-nowrap">
          {/* <img
						src={Brand}
						alt="Gravity Films Brand"
						className="container pt-5 main-logo"
					/> */}
          <div className="main-logo">
            <Canvas>
              <ambientLight />
              <pointLight position={[5, 5, 5]} intensity={1} />
              <pointLight position={[-3, -3, 2]} />
              <Gravity />
              <OrbitControls />
            </Canvas>
          </div>
          <span className="text-center main-text-1">GRAVITY</span>
          <span className="text-center fw-lighter main-text-2">FILMS</span>
          <div className="text-center pb-5">
            Sound | Camera | Action
            <br />
            VFX / GFX / SFX
            <br />
            Visual Effects Filmmaking
          </div>
        </div>
      </div>
      <br />
      <div className="container-xxl">
        <Services />
        <br />
        <div>
          <Typography gutterBottom>
            <Box sx={{ fontWeight: 270, fontSize: "h4.fontSize" }}>
              OUR CLIENTS
            </Box>
          </Typography>
          <div className="d-flex justify-content-center flex-row flex-nowrap">
            <div class="flip-card" tabIndex="0">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <img
                    src={Brand}
                    alt="Gravity Films Brand"
                    className="brand-logo"
                  />
                </div>
                <div class="flip-card-back">
                  <Background />
                </div>
              </div>
            </div>
            <div class="flip-card" tabIndex="0">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <img
                    src={Brand}
                    alt="Gravity Films Brand"
                    className="brand-logo"
                  />
                </div>
                <div class="flip-card-back">
                  <Background />
                </div>
              </div>
            </div>
            <div class="flip-card" tabIndex="0">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <img
                    src={Brand}
                    alt="Gravity Films Brand"
                    className="brand-logo"
                  />
                </div>
                <div class="flip-card-back">
                  <Background />
                </div>
              </div>
            </div>
            <div class="flip-card" tabIndex="0">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <img
                    src={Brand}
                    alt="Gravity Films Brand"
                    className="brand-logo"
                  />
                </div>
                <div class="flip-card-back">
                  <Background />
                </div>
              </div>
            </div>
            <div class="flip-card" tabIndex="0">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <img
                    src={Brand}
                    alt="Gravity Films Brand"
                    className="brand-logo"
                  />
                </div>
                <div class="flip-card-back">
                  <Background />
                </div>
              </div>
            </div>
            <div class="flip-card" tabIndex="0">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <img
                    src={Brand}
                    alt="Gravity Films Brand"
                    className="brand-logo"
                  />
                </div>
                <div class="flip-card-back">
                  <Background />
                </div>
              </div>
            </div>
            <div class="flip-card" tabIndex="0">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <img
                    src={Brand}
                    alt="Gravity Films Brand"
                    className="brand-logo"
                  />
                </div>
                <div class="flip-card-back">
                  <Background />
                </div>
              </div>
            </div>
            <div class="flip-card" tabIndex="0">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <img
                    src={Brand}
                    alt="Gravity Films Brand"
                    className="brand-logo"
                  />
                </div>
                <div class="flip-card-back">
                  <Background />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Typography gutterBottom>
            <Box sx={{ fontWeight: 270, fontSize: "h4.fontSize" }}>
              WORK SAMPLES
            </Box>
          </Typography>
          <WorkSampleCarousel />
        </div>
        <div>
          <Typography gutterBottom>
            <Box sx={{ fontWeight: 270, fontSize: "h4.fontSize" }}>
              OUR TEAM
            </Box>
          </Typography>
          <AboutCarousel />
        </div>
      </div>
    </div>
  );
}
export default Body;
