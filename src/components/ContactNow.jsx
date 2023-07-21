import Box from "@mui/material/Box";

import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import { Instagram, WhatsApp, EmailTwoToneIcon } from "@mui/icons-material";
const actions = [
	{ icon: <Instagram />, name: "Instagram" },
	{ icon: <WhatsApp />, name: " WhatsApp" },
];
export default function ContactNow() {
	return (
		<div>
			<SpeedDial ariaLabel="Contact Now" icon={<SpeedDialIcon />}>
				{actions.map((action) => (
					<SpeedDialAction
						key={action.name}
						icon={action.icon}
						tooltipTitle={action.name}
					/>
				))}
			</SpeedDial>
		</div>
	);
}
