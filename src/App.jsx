import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import SpinLoader from "./components/partials/SpinLoader";
import ProjectsPage from "./components/pages/ProjectsPage";

function App() {
  return (
 <>
   <Router>
        <Routes>
        <Route path="/spin" element={<SpinLoader />} />
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<ProjectsPage />} />

        </Routes>
      </Router>
 </>
  )
  }
  export default App