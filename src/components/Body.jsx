import Brand from "./Blogo.svg";
import { Box, Typography, Card, CardContent } from "@mui/material";
import Services from "./Body/Services";
import Background from "./UI/Background";
import { Suspense } from "react";

import { Appring } from "./3d/Appring";
import { Planet } from "./3d/Planet";
import { Ring } from "./3d/Ring";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

function Body() {
	return (
		<div className="container d-flex justify-content-center flex-column flex-nowrap">
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
					<div>
						<Canvas>
							<ambientLight />
							<pointLight position={[5, 5, 5]} intensity={1} />
							<pointLight position={[-3, -3, 2]} />
							<Appring />
							<Planet />
							<Ring />
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
			<Services />
			<br />
			<div className="container">
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
				</div>
			</div>
			<div className="container">
				<Typography gutterBottom>
					<Box sx={{ fontWeight: 270, fontSize: "h4.fontSize" }}>
						WORK SAMPLES
					</Box>
				</Typography>
			</div>
			<div className="container">
				<Typography gutterBottom>
					<Box sx={{ fontWeight: 270, fontSize: "h4.fontSize" }}>OUR TEAM</Box>
				</Typography>
			</div>
		</div>
	);
}
export default Body;
