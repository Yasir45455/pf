import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = ({ navigateTo }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: '#2e3dda' }}>
      <div className="container-fluid px-5">
        
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                navigateTo("/home");
              }}
              className="nav-link text-white"
            >
              <b>Home</b>
            </a>
            <a
              href="#aboutus"
              onClick={(e) => {
                e.preventDefault();
                navigateTo("/aboutus");
              }}
              className="nav-link text-white"
            >
              <b>About</b>
            </a>
            <a
              href="#skills"
              onClick={(e) => {
                e.preventDefault();
                navigateTo("/skills");
              }}
              className="nav-link text-white"
            >
              <b>Skills</b>
            </a>
            <a
              href="#portfolio"
              onClick={(e) => {
                e.preventDefault();
                navigateTo("/portfolio");
              }}
              className="nav-link text-white"
            >
              <b>Portfolio</b>
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                navigateTo("/contact");
              }}
              className="nav-link text-white"
            >
              <b>Contact</b>
            </a>
          </div>
        </div>
        <a className="navbar-brand text-white" href="#home"><b>Yasir Masood</b></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
