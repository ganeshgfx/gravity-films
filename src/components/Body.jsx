import Brand from "./Blogo.svg";
import {
	ListItemIcon,
	Divider,
	ListItemText,
	ListItem,
	List,
	Box,
	Typography,
	colors,
} from "@mui/material";
import {
	NewspaperTwoTone,
	MovieFilterTwoTone,
	MusicNoteTwoTone,
	ColorLensTwoTone,
	AutoFixHighTwoTone,
	Diversity1TwoTone,
	SellTwoTone,
} from "@mui/icons-material";

function Body() {
	return (
		<div className="container d-flex justify-content-center flex-column flex-nowrap">
			<div
				className="card p-0 m-0"
				style={{ backgroundColor: "#0000", color: "white" }}
			>
				<div
					className="card border border-1 gradient p-0 m-0"
					style={{
						opacity: "20%",
						position: "absolute",
						width: "100%",
						height: "100%",
						zIndex: -1,
						backgroundColor: "#0000",
					}}
				></div>
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
			<div className="container">
				<Typography gutterBottom>
					<Box sx={{ fontWeight: 300, fontSize: "h3.fontSize" }}>
						Our Services
					</Box>
				</Typography>

				<List>
					<ListItem>
						<ListItemIcon>
							<NewspaperTwoTone style={{ color: "white" }} />
						</ListItemIcon>
						<ListItemText primary="Press Release & Magazines" />
					</ListItem>
					<Divider />
					<ListItem>
						<ListItemIcon>
							<MovieFilterTwoTone style={{ color: "white" }} />
						</ListItemIcon>
						<ListItemText primary="Video Production" />
					</ListItem>
					<Divider />
					<ListItem>
						<ListItemIcon>
							<MusicNoteTwoTone style={{ color: "white" }} />
						</ListItemIcon>
						<ListItemText primary="Music Production" />
					</ListItem>
					<Divider />
					<ListItem>
						<ListItemIcon>
							<ColorLensTwoTone style={{ color: "white" }} />
						</ListItemIcon>
						<ListItemText primary="Nelson's Art" />
					</ListItem>
					<Divider />
					<ListItem>
						<ListItemIcon>
							<AutoFixHighTwoTone style={{ color: "white" }} />
						</ListItemIcon>
						<ListItemText primary="Graphic Design" />
					</ListItem>
					<Divider />
					<ListItem>
						<ListItemIcon>
							<Diversity1TwoTone style={{ color: "white" }} />
						</ListItemIcon>
						<ListItemText primary="Wedding & Events" />
					</ListItem>
					<Divider />
					<ListItem>
						<ListItemIcon>
							<SellTwoTone style={{ color: "white" }} />
						</ListItemIcon>
						<ListItemText primary="Commercial Branding" />
					</ListItem>
				</List>
			</div>
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
