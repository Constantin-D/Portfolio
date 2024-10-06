import { Route, Routes, useLocation } from "react-router-dom";
import { ProjectsProvider } from "./context/ProjectsContext";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import Projects from "./pages/Projects/Projects";
// import PageTransition from "./components/PageTransition/PageTrasition";

import { AnimatePresence } from "framer-motion";

function App() {
    const location = useLocation();

    return (
        <div className="app">
            <ProjectsProvider>
                <Header />
                <main className="main">
                    <AnimatePresence mode="wait" initial={false}>
                        <Routes location={location} key={location.pathname}>
                            <Route path="/" element={<Home />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/projects" element={<Projects />} />
                            <Route path="/contact" element={<Contact />} />
                            <Route path="*" element={<NotFound />} />
                        </Routes>
                    </AnimatePresence>
                </main>
                <Footer />
            </ProjectsProvider>
        </div>
    );
}

export default App;
