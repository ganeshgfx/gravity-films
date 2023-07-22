import Brand from "./Blogo.svg";
import { Box, Typography } from "@mui/material";
import Services from "./Body/Services";
import Background from "./UI/Background";

function Body() {
	return (
		<div className="container d-flex justify-content-center flex-column flex-nowrap">
			<div
				className="card p-0 m-0"
				style={{ backgroundColor: "#0000", color: "white" }}
			>
				<Background />
				<div className="d-flex justify-content-center flex-column flex-nowrap">
					<img
						src={Brand}
						alt="Gravity Films Brand"
						className="container pt-5 main-logo"
					/>

					<span className="text-center main-text-1">GRAVITY</span>
					<span className="text-center fw-lighter main-text-2">FILMS</span>
					<div className="text-center pb-5">
						Sound | Camera | Action
						<br />
						VFX / GFX / SFX
						<br /> Visual Effects Filmmaking
					</div>
				</div>
			</div>
			<br />
			<Services />
			<br />
			<div className="container">
				<Typography gutterBottom>
					<Box sx={{ fontWeight: 300, fontSize: "h3.fontSize" }}>
						Our Clients
					</Box>
				</Typography>
			</div>
			<div className="container">
				<Typography gutterBottom>
					<Box sx={{ fontWeight: 300, fontSize: "h3.fontSize" }}>
						Work Samples
					</Box>
				</Typography>
			</div>
			<div className="container">
				<Typography gutterBottom>
					<Box sx={{ fontWeight: 300, fontSize: "h3.fontSize" }}>Our Team</Box>
				</Typography>
			</div>
		</div>
	);
}
export default Body;
