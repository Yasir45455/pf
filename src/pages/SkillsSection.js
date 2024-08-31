import React from 'react';

// Skill component
const Skill = ({ heading, icon, color }) => (
    <div className="p-4 text-center rounded border d-flex flex-column justify-content-center align-items-center"
        style={{ width: '10rem', height: '10rem', boxShadow: 'rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset' }}>
        <i className={`fa ${icon} mx-auto h1`} style={{ color: `${color}` }}></i>
        <h6 className="text-dark h5">{heading}</h6>
    </div>
);

// ExperienceCard component
const ExperienceCard = ({ title, role, period, description, className }) => (
    <div className="edu-card rounded-3 rounded-start-0 border-gradient border-5 border-end-0 border-top-0 border-bottom-0 p-3" style={{ backgroundColor: "#cbd5e1" }}>
        <div className="card-body ">
            <div className="d-flex justify-content-between flex-wrap">
                <p className="text-gradient"><b>{title}</b></p>
                <div>
                    <i className="fa-solid fa-calendar-days me-2 text-gradient"></i><span>{period}</span>
                </div>
            </div>
            <h6><b>{role}</b></h6>
            <p className="text-mute">{description}</p>
        </div>
    </div>
);

// Array of skill objects with specific icon colors
const skills = [
    { heading: 'HTML', icon: 'fa-brands fa-html5', color: '#E34F26' },
    { heading: 'CSS', icon: 'fa-brands fa-css3-alt', color: '#1572B6' },
    { heading: 'Bootstrap', icon: 'fa-brands fa-bootstrap', color: '#563d7c' },
    { heading: 'ReactJs', icon: 'fa-brands fa-react', color: '#61DAFB' },
    { heading: 'JavaScript', icon: 'fa-brands fa-js', color: '#f0db4f' },
    { heading: 'jQuery', icon: 'fa-solid fa-file-code', color: '#0769AD' },
    { heading: 'PHP', icon: 'fa-brands fa-php', color: '#8892BF' },
    { heading: 'WordPress', icon: 'fa-brands fa-wordpress', color: '#21759B' },
    { heading: 'Woo Commerce', icon: 'fa-brands fa-woocommerce', color: '#96588A' },
    { heading: 'NodeJs', icon: 'fa-brands fa-node-js', color: '#68A063' },
    { heading: 'Learning NextJs', icon: 'fa-solid fa-question', color: '#21759B' }
];

// Array of experience objects
const experiences = [
    {
        title: 'Self Employed',
        role: 'Web Developer',
        period: 'Mar 2022 - Present',
        description: 'I started learning HTML in March 2022. Now, I\'m a skilled MERN Stack Developer, specializing in front-end development. I\'ve created over 50 websites to date, demonstrating my dedication and expertise.'
    },
    {
        title: 'UNITEDSOL Software Company Islamabad',
        role: 'Web Development Internship',
        period: 'Feb 2022 - Aug 2022',
        description: 'I completed a 6-month internship at United Sol Software Company, where I worked with HTML, CSS, JavaScript, jQuery, PHP, and WordPress. It was a valuable experience that enhanced my skills in web development.'
    },
    {
        title: 'SNIPBYTE Software Company Islamabad',
        role: 'Front End Developer',
        period: 'Nov 2022 - Dec 2023',
        description: 'Frontend developer at Snipbyte since Nov 2022, adept in HTML, CSS, Bootstrap, and React.js. Passionate about crafting user-centric interfaces for optimal experiences. Thriving in collaborative environments, constantly pushing boundaries in web development.',
    },
    {
        title: 'ODL Software Company Islamabad',
        role: 'MERN Stack Developer',
        period: 'Jan 2024 - Present',
        description: 'Starting from the beginning of 2024, I\'ve been immersed in the role of a MERN stack developer at ODL Software Company. My focus lies in leveraging MongoDB, Express.js, React.js, and Node.js to build robust and dynamic web applications. Excited to contribute my skills and creativity to drive innovation within the team.',
    }
];

// Main component
const SkillsAndExperience = () => (
    <section  id="skillss">
        <div>
            <div className="d-flex gap-3 justify-content-center text-mediumaquamarine mt-3">
                <span className="h1 text-dark d-none d-md-block " style={{ fontWeight: "800", fontSize: "80px" }}>Experience</span>
                <span className="h1 text-dark d-md-none " style={{ fontWeight: "800", fontSize: "40px" }}>Experience</span>
            </div>
            <hr className='mb-5' style={{ height: '5px' }} />
            <div className='container'>
                <div className="row">
                    {experiences.map((exp, index) => (
                        <>
                            <div className='col-md-5 gap-4 mb-4 border border-5 border-dark border-end-0 border-bottom-0 border-top-0'>

                                <ExperienceCard
                                    key={index}
                                    title={exp.title}
                                    role={exp.role}
                                    period={exp.period}
                                    description={exp.description}
                                    className={exp.className}
                                />
                            </div>
                            <div className='col-md-1'></div>
                        </>
                    ))}
                </div>
            </div>
        </div>
        <hr style={{ height: '2px' }} />
        <div className="row">
            <div className="col-12 col-lg-12 col-md-12 col-sm-12">
                <div>
                    <div className="d-flex gap-3 justify-content-center text-mediumaquamarine py-3">
                        <span className="h1 text-dark d-none d-md-block" style={{ fontWeight: "800", fontSize: "80px" }}>Skills</span>
                        <span className="h1 text-dark d-md-none" style={{ fontWeight: "800", fontSize: "40px" }}>Skills</span>
                    </div>
                    <div className="d-flex flex-wrap gap-3 justify-content-center p-1 p-md-2 px-4">
                        {skills.map((skill, index) => (
                            <Skill
                                key={index}
                                heading={skill.heading}
                                icon={skill.icon}
                                color={skill.color}
                                imgSrc={skill.imgSrc} // Pass imgSrc for WooCommerce if needed
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default SkillsAndExperience;
