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
import { Canvas } from "@react-three/fiber";
import Cylinder3d from "../3d/Cylinder3d";
export default function Services() {
	return (
		<div>
			<Typography gutterBottom>
				<Box sx={{ fontWeight: 300, fontSize: "h3.fontSize" }}>
					Our Services
				</Box>
			</Typography>
			<div className="d-flex">
				<div
					className="flex-fill card"
					style={{
						backgroundColor: "transparent",
					}}
				>
					<Canvas>
						<pointLight position={[10, 10, 10]} />
						<ambientLight />
						<Cylinder3d position={[-1.2, 0, 0]} />
						<Cylinder3d position={[1.2, 0, 0]} />
					</Canvas>
				</div>
				<div>
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
			</div>
		</div>
	);
}
