import "./App.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import About from "./components/about/About";
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
		<Router>
			<ThemeProvider theme={darkTheme}>
				<CssBaseline />
				<main>
					<Nav />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/about" element={<About />} />
					</Routes>
					<Footer />
				</main>
			</ThemeProvider>
		</Router>
	);
}

export default App;
