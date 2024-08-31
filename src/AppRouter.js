import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";

import AboutUsPage from "./pages/AboutUs.js";
import Home from "./pages/HomeDesign.js";
import SkillsAndExperience from "./pages/SkillsSection.js";
import Navbar from "./pages/Navbar.js";
import Portfolio from "./pages/Portfolio.js";
import ContactSection from "./pages/ContactUs.js";
import ProgressBar from "./pages/Progressbar/Progressbar.js";
const AppRouter = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const navigateTo = (path) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate(path);
    }, 1500); // 3-second delay before navigation
  };

  return (
    <>
      <Navbar navigateTo={navigateTo} />
      {loading && <ProgressBar />}
      {!loading && (
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/home" exact element={<Home />} />
          <Route path="/aboutus" exact element={<AboutUsPage />} />
          <Route path="/skills" exact element={<SkillsAndExperience />} />
          <Route path="/portfolio" exact element={<Portfolio />} />
          <Route path="/contact" exact element={<ContactSection />} />
        </Routes>
      )}
    </>
  );
};

export default AppRouter;
