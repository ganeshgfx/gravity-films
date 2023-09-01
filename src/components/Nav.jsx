import Logo from "./logo.svg";
import { Instagram, WhatsApp, Email } from "@mui/icons-material";
import MailOutlineTwoToneIcon from "@mui/icons-material/MailOutlineTwoTone";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import { NavLink } from "react-router-dom";
function Nav() {
	return (
		<nav className="navbar">
			<div className="container">
				<div className="navbar-brand">
					<NavLink style={{ textDecoration: "none" }} to="/">
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
					</NavLink>
				</div>
				<Stack direction="row" spacing={1}>
					<a href="https://instagram.com/gravity.films_" target="_blank">
						<IconButton aria-label="Instagram">
							<Instagram style={{ color: "white" }} />
						</IconButton>
					</a>
					<a href="https://wa.me/919033535655" target="_blank">
						<IconButton aria-label="WhatsApp">
							<WhatsApp style={{ color: "white" }} />
						</IconButton>
					</a>
					<a href="mailto:business.gravityfilms@gmail.com" target="_blank">
						<IconButton aria-label="Email">
							<MailOutlineTwoToneIcon style={{ color: "white" }} />
						</IconButton>
					</a>
				</Stack>
			</div>
		</nav>
	);
}

export default Nav;
