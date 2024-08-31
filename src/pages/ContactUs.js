import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ContactSection = () => {
  return (
    <>
      <div className="d-flex gap-3 justify-content-center text-mediumaquamarine mt-3">
        <span className="h1 text-dark d-none d-md-block" style={{ fontWeight: "800", fontSize: "80px" }}>Get in Touch</span>
        <span className="h1 text-dark d-md-none" style={{ fontWeight: "800", fontSize: "40px" }}>Get in Touch</span>
      </div>
      <hr style={{ height: '5px' }} />
      <div className="d-flex gap-3 justify-content-center text-mediumaquamarine p-4">
        <span className="h1 text-dark text-wrap" style={{ fontWeight: "800", fontSize: "20px" }}>Have any questions? I'd love to hear from you. Yes i'm available 24/7</span>
      </div>
      <section className="contact-section p-5 text-center d-flex justify-content-center align-items-center" id="contact" >

        <div className="container  p-5">


          <div className=" d-flex justify-content-center flex-column align-items-center">


            <div >
              <h1 className="text-custom mb-4">Feel Free to Contact Me</h1>
              <div className="d-flex align-items-center flex-wrap justify-content-center gap-4 mb-4">
                <span className="bg-primary rounded d-none d-md-block" style={{ height: '70px', width: '5px' }}></span>

                <a href="https://www.facebook.com/yasir.doll.50702769" className="text-dark text-decoration-none d-flex align-items-center p-2 px-4 bg-primary rounded">
                  <i className="fab text-white fa-facebook fa-2x"></i>
                  <b className="ms-2 text-white">Facebook</b>
                </a>

                <a href="https://wa.me/+923065778113" className="text-dark text-decoration-none d-flex align-items-center p-2 px-4 bg-success rounded">
                  <i className="fab text-white fa-whatsapp fa-2x"></i>
                  <b className="ms-2 text-white">WhatsApp</b>
                </a>

                <a href="https://linkedin.com/in/yasir-masood" className="text-dark text-decoration-none d-flex align-items-center p-2 px-4 bg-custom rounded">
                  <i className="fab text-white fa-linkedin fa-2x"></i>
                  <b className="ms-2 text-white">linkedin</b>
                </a>

                <span className="bg-custom rounded d-none d-md-block" style={{ height: '70px', width: '5px' }}></span>
              </div>
            </div>

            <div className=" mt-5 d-flex px-md-5 w-100 flex-column flex-md-row justify-content-between gap-4 text-dark">
              <div className="d-flex flex-column align-items-center gap-3">
                <i className="fas fa-phone fa-2x bg-custom text-white p-4 rounded-circle" style={{ fontSize: "60px" }}></i>
                <span className='p-0 m-0 fw-bold' style={{ fontWeight: "800", fontSize: "35px" }}>Phone</span>
                <span className="fs-5 m-0">+923065778113</span>
              </div>
              <div className="d-flex flex-column align-items-center gap-3">
                <i className="fas fa-envelope fa-2x bg-custom text-white p-4 rounded-circle " style={{ fontSize: "60px" }}></i>
                <span className='p-0 m-0 fw-bold' style={{ fontWeight: "800", fontSize: "35px" }}>Email</span>

                <span className="fs-5">yasirkh261@gmail.com</span>
              </div>
              <div className="d-flex flex-column align-items-center gap-3">

                <i className="fas fa-map-marker-alt fa-2x bg-custom text-white p-4 rounded-circle" style={{ fontSize: "60px" }}></i>
                <span className='p-0 m-0 fw-bold' style={{ fontWeight: "800", fontSize: "35px" }}>Location</span>

                <p className="fs-5 m-0 p-0">Fate Jang <br></br> Islamabad, Punjab Pakistan</p>

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactSection;
