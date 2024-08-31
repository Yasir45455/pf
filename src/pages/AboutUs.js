import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap is imported
import yasirImage from '../assets/yasir.png'; // Adjust the path based on where you place the image


const calculateDetailedAge = (birthDate) => {
  const today = new Date();
  const birthDateObj = new Date(birthDate);
  const totalSeconds = Math.floor((today - birthDateObj) / 1000);

  const years = Math.floor(totalSeconds / (365.25 * 24 * 60 * 60));
  const days = Math.floor((totalSeconds % (365.25 * 24 * 60 * 60)) / (24 * 60 * 60));
  const hours = Math.floor((totalSeconds % (24 * 60 * 60)) / (60 * 60));
  const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
  const seconds = totalSeconds % 60;

  return { years, days, hours, minutes, seconds };
};

const AboutSection = () => {

  const [hasError, setHasError] = useState(false);

  const handleImageError = () => {
    setHasError(true);
  };

  const birthDate = '1996-11-01'; // Format: YYYY-MM-DD

  const [age, setAge] = useState(calculateDetailedAge(birthDate));

  useEffect(() => {
    const interval = setInterval(() => {
      setAge(calculateDetailedAge(birthDate));
    }, 1000); // Update every second

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [birthDate]);

  return (
    <section className="animation-section about-section w-100 " id="about">

      <div className="d-flex gap-3 justify-content-center text-mediumaquamarine mt-3">
        <span className="h1 text-dark d-none d-md-block" style={{ fontWeight: "800", fontSize: "80px" }}>About Me</span>
        <span className="h1 text-dark d-md-none" style={{ fontWeight: "800", fontSize: "40px" }}>About Me</span>
      </div>
      <hr style={{ height: '5px' }} />
      <div className="row py-5 about-content d-flex justify-content-center align-items-center flex-wrap">
      <div className="col-12 col-sm-5 col-lg-5 d-md-none  border mb-5">
          <div className=' d-flex justify-content-center align-items-center ' >
            
              <img
                src={yasirImage}
                className="img-fluid  rounded-3 bg-custom about-imgg border-custom"
                alt="Profile"
                onError={handleImageError}
                   // Adjust the degree of rotation as needed
                  style={{ width: "25rem", height: "43rem" }}
              />

          </div>
        </div>
        <div className="col-12 col-sm-5 col-lg-5 d-none d-md-block border">
          <div className=' d-flex justify-content-center align-items-center mb-5' >
            <div style={{ position: "relative", width: "25rem", height: "43rem" }}>
              <div
              className='rounded-3 bg-custom'
                style={{
                  position: "absolute",
                  top: "0",
                  left: "0",
                  width: "100%",
                  height: "100%",
                  transform: "rotate(-5deg)", // Adjust the degree of rotation as needed
                  zIndex: "1",
                }}
              ></div>
              <img
                src={yasirImage}
                className="img-fluid rounded-3 bg-white about-imgg border-custom"
                alt="Profile"
                onError={handleImageError}
                   // Adjust the degree of rotation as needed
                  style={{ width: "25rem", height: "43rem", position: "relative", zIndex: "2",transform: "rotate(-20deg)", }}
              />
            </div>

          </div>
        </div>

        <div className="col-12 col-md-1"></div>

        <div className="col-12 col-lg-5 px-5 px-lg-0 about-heading p-3">
          <span className="display-5 fw-bolder" style={{ color: '#222222' }}>
            Turning <span className="text-gradient fw-bolder">Ideas</span> into{' '}
            <span className="text-gradient fw-bolder px-2 rounded">Exceptional</span> Designs..
          </span>
          <br />
          <br />
          <div>
            <span style={{ color: '#222222', fontSize: "30px", fontWeight: "800" }}>I'm Yasir Masood</span>

            <p className="text-muted fw-bold mt-3">
              Hi, I'm Yasir Masood, a MERN stack developer from Rawalpindi, Pakistan. I graduated with a degree in Computer Science from COMSATS University Pakistan in March 2022. Now based in Islamabad, I focus on building web applications using MongoDB, Express.js, React.js, and Node.js.
              <br></br>
              I enjoy solving problems and creating websites that are both functional and user-friendly. I love learning new things and working with other developers. Outside of coding, I like to explore the beautiful landscapes of Islamabad, which inspires my work. I’m excited about new challenges and making a difference in the tech world!
            </p>
            <div className='d-flex justify-content-start align items-center mb-3'>
              <div>
                <span style={{ fontWeight: "800", fontSize: "30px" }}>Age:</span> <span className='ms-3 fw-bold h6'> <span style={{ fontSize: "25px" }}>  {age.years} </span> years <span style={{ fontSize: "25px" }}>  {age.days} </span> days <span style={{ fontSize: "25px" }}>{age.hours}  </span>  hours <span style={{ fontSize: "25px" }}>  {age.minutes} </span> minutes <span style={{ fontSize: "30px" }}>  {age.seconds} </span> seconds</span>
              </div>
            </div>
            <div
              className="d-flex bg-custom flex-wrap justify-content-between text-white rounded py-3 px-4"
              style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}
            >
              <div className="flex-fill mx-2">
                <ul className="list-unstyled mb-0">
                  <li style={{ marginBottom: '10px' }}>
                    <strong>Birthday:</strong> <span>1 Nov 1996</span>
                  </li>

                  <li>
                    <strong>Status:</strong> <span>Married</span>
                  </li>
                </ul>
              </div>
              <div className="flex-fill mx-2">
                <ul className="list-unstyled mb-0">
                  <li style={{ marginBottom: '10px' }}>
                    <strong>Religion:</strong> <span>Muslim</span>
                  </li>
                  <li style={{ marginBottom: '10px' }}>
                    <strong>Phone:</strong> <span>+923065778113</span>
                  </li>
                  <li>
                    <strong>Degree:</strong> <span>BS(CS)</span>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>

        <div className="col-12 col-sm-2 border-0 border-end border"></div>
      </div>

      <hr style={{ height: '2px' }} />
    </section>
  );
};

export default AboutSection;
