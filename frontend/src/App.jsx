import { Route, Routes, useLocation } from "react-router-dom";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { ProjectsProvider } from "./context/ProjectsContext";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import Projects from "./pages/Projects/Projects";
import ProjectToShow from "./pages/ProjectToShow/ProjectToShow";
// import PageTransition from "./components/PageTransition/PageTrasition";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import { HelmetProvider } from "react-helmet-async";

import { AnimatePresence } from "framer-motion";

function App() {
    const location = useLocation();

    return (
        <HelmetProvider>
            <div className="app">
                <ProjectsProvider>
                    <Header />
                    <main className="main">
                        <ScrollToTop />
                        <AnimatePresence mode="wait" initial={false}>
                            <Routes location={location} key={location.pathname}>
                                <Route path="/" element={<Home />} />
                                <Route path="/about" element={<About />} />
                                <Route
                                    path="/projects"
                                    element={<Projects />}
                                />
                                <Route
                                    path="/project/:id"
                                    element={<ProjectToShow />}
                                />
                                <Route path="/contact" element={<Contact />} />
                                <Route path="*" element={<NotFound />} />
                            </Routes>
                        </AnimatePresence>
                    </main>
                    <Footer />
                </ProjectsProvider>
            </div>
        </HelmetProvider>
    );
}

export default App;
