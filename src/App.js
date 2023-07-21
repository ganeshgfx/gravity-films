import "./App.css";
import Nav from "./components/Nav";
import Body from "./components/Body";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const darkTheme = createTheme({
	palette: {
		mode: "dark",
	},
});
const lightTheme = createTheme({
	palette: {
		mode: "light",
	},
});
function App() {
	return (
		<ThemeProvider theme={darkTheme}>
			<CssBaseline />
			<main>
				<div
					className="App"
					style={{
						// backgroundColor: "#171717",
						// color: "#ffffff",
						height: "100%",
						width: "100%",
					}}
				>
					<Nav />
					<Body />
					<Footer />
				</div>
			</main>
		</ThemeProvider>
	);
}

export default App;
