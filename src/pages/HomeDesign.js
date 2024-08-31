import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './YourCustomStyles.css'; // Assuming you have additional custom styles
import TypingAnimation from './typingAnimation';
import { Link } from 'react-router-dom';



const Home = () => {
  return (
    <div
      id="home"
      className="row w-100 vh-100 p-0 m-0"
      style={{
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundImage:
          "url('https://img.freepik.com/free-photo/modern-workplace-arrangement-with-cup-coffee_23-2148404549.jpg?t=st=1716458644~exp=1716462244~hmac=ec694efc7b18cce4f1a0a34edb46430ea0f8a439ac64212579df2523d4fe1253&w=1380')"
      }}
    >


      <div
        className="home-content text-start text-white p-5 vh-100  d-flex justify-content-center align-items-center flex-column"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}
      >
        <h2 className="m-0 py-2"></h2>
        <h1
          className="p-0 m-0 py-2 pt-md-5 text-center d-md-none"
          style={{
            fontWeight: 800,
            color: '#fff',
            fontSize:"70px",
            letterSpacing: '9px',
          }}
        >
          I<span style={{ color: '#2e3dda' }}>'M </span>Yasir <span className="heading-typing"> <TypingAnimation /> </span>
        </h1>
        <span
          className="p-0 m-0 py-2 pt-md-5 text-center d-none d-md-block"
          style={{
            fontWeight: 800,
            color: '#fff',
            letterSpacing: '9px',
            fontSize: "100px"
          }}
        >
          I<span style={{ color: '#2e3dda' }}>'M </span>Yasir <span className="heading-typing"> <TypingAnimation /> </span>
        </span>
        <div className="verticalflip w-100 justify-content-center d-flex align-items-center">
          &nbsp;
          <span className="text-white">MERN Stack Developer</span>
          <span className="text-white">Full Stack Developer</span>
          <span className="text-white">Wordpress Developer</span>
        </div>

        <p className="d-block d-md-none py-4 text-white text-center">
          To secure a web dev position in a reputable organization to utilize my skills while making a significant
          role in the success of the organization.
        </p>
        <p className="d-none d-md-block py-4 home-para text-white text-center">
          To work and improve my skills as a web dev and find efficient and sustainable solutions to improve internet
          and online web space for everyone...
          <br />
          <br />
          To secure a web dev position in a reputable organization to utilize my skills while making a significant
          role in the success of the organization.
        </p>
        <div className="d-flex gap-3 flex-wrap btnss justify-content-center align-items-center">
          <div>
          <Link to="/portfolio">
              <button  className="w-100 btn btn-lg p-3 border-custom text-white" >
                My Work
              </button>
            </Link>
          </div>
          <div>
            <Link to="/skills">
              <button
                className="bg-custom w-100 btn btn-lg text-white p-3"
               
              >
                My Experience<i className="ms-3 fa-solid fa-arrow-down"></i>
              </button>
            </Link>
          </div>
        </div>
      </div>


    </div>
  );
};

export default Home;
