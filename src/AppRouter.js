import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import { useState } from "react";
import AboutUsPage from "./pages/AboutUs";
import Home from "./pages/HomeDesign";
import SkillsAndExperience from "./pages/SkillsSection";
import Navbar from "./pages/Navbar";
import Portfolio from "./pages/Portfolio";
import ContactSection from "./pages/ContactUs";
import ProgressBar from "./pages/Progressbar/Progressbar";

const AppRouter = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const navigateTo = (path) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate(path);
    }, 1500); // 1.5-second delay before navigation
  };

  return (
    <>
      // <Navbar navigateTo={navigateTo} />
      {loading && <ProgressBar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/aboutus" element={<AboutUsPage />} />
        <Route path="/skills" element={<SkillsAndExperience />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<ContactSection />} />
      </Routes>
    </>
  );
};

export default AppRouter;
