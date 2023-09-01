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
	Height,
} from "@mui/icons-material";
import AboutCarousel from "../about/AboutCarousel";

export default function Services() {
	return (
		<div>
			<Typography gutterBottom>
				<Box sx={{ fontWeight: 270, fontSize: "h4.fontSize" }}>
					OUR SERVICES
				</Box>
			</Typography>
			<div className="d-flex  align-items-center">
				<div
					className="flex-fill card"
					style={{
						backgroundColor: "transparent",
					}}
				>
					<AboutCarousel />
				</div>
				<div style={{ textWrap: "nowrap" }}>
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
								<SellTwoTone style={{ color: "white" }} />
							</ListItemIcon>
							<ListItemText primary="E-commerce" />
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
			</div>
		</div>
	);
}
