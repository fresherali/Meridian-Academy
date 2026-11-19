
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Services from "./pages/Services";
import Courses from "./pages/Courses";
import ScrollToTop from "./components/ScrollToTop";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import FeeStructure from "./pages/FeeStructure";

function App() {
  return (
    <BrowserRouter>
    <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/fees" element={<FeeStructure />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
