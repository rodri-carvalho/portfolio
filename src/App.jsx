import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
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
	return (
		<Router>
			<div className="flex flex-col w-full min-h-screen overflow-x-hidden">
				<Navbar />

				<main className="w-full pb-8 h-full flex flex-grow justify-center mt-4">
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
