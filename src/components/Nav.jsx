import Logo from "./logo.svg";
import { Instagram, WhatsApp, Email } from "@mui/icons-material";
import MailOutlineTwoToneIcon from "@mui/icons-material/MailOutlineTwoTone";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
function Nav() {
	return (
		<nav
			className="navbar"
			style={
				{
					// display: 'flex',
					// flexDirection	: 'row',
					// alignItems: 'center',
					// paddingLeft:"20pt",
					// paddingTop:"10pt",
					// paddingBottom:"10pt",
				}
			}
		>
			<div className="container">
				<div className="navbar-brand">
					<img
						src={Logo}
						alt="Gravity Films"
						style={{
							height: "38pt",
						}}
					/>
					<span
						style={{
							marginLeft: "5pt",
							color: "#ffffff",
						}}
					>
						GRAVITY FILMS
					</span>
				</div>
				<Stack direction="row" spacing={1}>
					<IconButton aria-label="Instagram">
						<Instagram style={{ color: "white" }} />
					</IconButton>
					<IconButton aria-label="WhatsApp">
						<WhatsApp style={{ color: "white" }} />
					</IconButton>
					<IconButton aria-label="Email">
						<MailOutlineTwoToneIcon style={{ color: "white" }} />
					</IconButton>
				</Stack>
			</div>
		</nav>
	);
}

export default Nav;
