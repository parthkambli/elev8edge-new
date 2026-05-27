// import Hero from "./components/Hero";
// import About from "./components/About";
// import ClientLogos from "./components/ClientLogos";
// import Work from "./components/Work";
// import Services from "./components/Services";
// import Projects from "./components/Projects";
// import Achievement from "./components/Achievement";
// import Testimonial from "./components/Testimonial";
// import Footer from "./components/Footer";
// function App() {
//   return (
//     <main className="bg-black text-white overflow-hidden">
//       <Hero />
//       <About />
//       <ClientLogos />
//       <Work />
//       <Services />
//       <Projects />
//       <Achievement />
//       <Testimonial />
//       <Footer />
//     </main>
//   );
// }

// export default App;









import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Navbar from "./components/Navbar";
import Contact from "./pages/Contact";
import Project from "./pages/Project";

import TermsConditions from "./pages/TermsConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
    <ScrollToTop />
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />

        <Route path="/projects" element={<Project />} />
        <Route path="/contact" element={<Contact />} />

        <Route
          path="/terms-conditions"
          element={<TermsConditions />}
        />

        <Route
          path="/privacy-policy"
          element={<PrivacyPolicy />}
        />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;