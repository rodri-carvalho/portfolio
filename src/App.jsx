import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import Home from "./pages/Home";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Projects from "./pages/Projects";
import Knowledge from "./pages/Knowledge";
import Education from "./pages/Education";
import FindMe from "./pages/FindMe";

function App() {
	// Set the theme based on the user's previous choice stored in localStorage
	useEffect(() => {
		const storedTheme = localStorage.getItem("theme");
		if (storedTheme) {
			document.documentElement.setAttribute("data-theme", storedTheme);
		} else {
			// Set a default theme if none is set
			document.documentElement.setAttribute("data-theme", "light");
		}
	}, []);

	return (
		<Router>
			<div className="flex flex-col w-full min-h-screen overflow-x-hidden bg-primary">
				<Navbar />

				<main className="w-full bg-primary h-full flex flex-grow justify-center">
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/about" element={<About />} />
						<Route path="/projects" element={<Projects />} />
						<Route path="/knowledge" element={<Knowledge />} />
						<Route path="/education" element={<Education />} />
						<Route path="/findme" element={<FindMe />} />
						<Route path="/notfound" element={<NotFound />} />
						<Route path="/*" element={<NotFound />} />
					</Routes>
				</main>

				<Footer />
			</div>
		</Router>
	);
}

export default App;
