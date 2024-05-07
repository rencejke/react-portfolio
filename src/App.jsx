import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import SpinLoader from "./components/partials/SpinLoader";

function App() {
  return (
 <>
   <Router>
        <Routes>
        <Route path="/spin" element={<SpinLoader />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
 </>
  )
  }
  export default App