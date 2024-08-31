import React, { useState } from 'react';

// Card component
const Card = ({ link, image, heading, description }) => {
    const [hasError, setHasError] = useState(false);

    const handleImageError = () => {
        setHasError(true);
    };

    return (
        <div className="card text-center" style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}>
            <div className="card-img-top">
                {hasError ? (
                    <div className="no-photo-placeholder d-flex justify-content-center align-items-center" style={{ height: '200px' }}>
                        <div>
                            <b>
                                <h1 className='text-secondary' style={{ fontWeight: "800", opacity: "0.5" }}>
                                    Photo Loading...
                                </h1>
                            </b>
                        </div>
                    </div>
                ) : (
                    <img
                        className='img-fluid'
                        src={image}
                        alt={heading}
                        onError={handleImageError}
                        style={{ width: '100%', height: '18rem', objectFit: 'cover' }}
                    />
                )}
            </div>
            <div className="card-body mt-3 d-flex flex-column justify-content-center align-items-center">
                <h4 style={{ fontWeight: "800" }} className="">{heading}</h4>
                <p className="project_name text-muted fw-bold">{description}</p>
                <a href={link} className="btn btn-lg bg-custom text-white">View Demo</a>
            </div>
        </div>
    );
};

// Portfolio component
const Portfolio = () => {
    const [filter, setFilter] = useState('All');

    const projects = [
        {
            link: 'https://kasookoo.com/',
            image: 'https://kasookoo.com/static/media/Group%202172.175cb6efe6aeeb940257.png',
            heading: 'Kasookoo website',
            description: 'Kasookoo Website, I have made some of its pages using ReactJS',
            category: 'Reactjs',
        },
        {
            link: 'https://amshealthcaresolution.com/',
            image: 'https://robustcredentialing.com/wp-content/uploads/2023/10/wepik-export-20231017135637h5Vs.jpeg',
            heading: 'AMS Health Care',
            description: 'AMS Health Care Solutions Website, I have made its Home Landing Page using CSS, Bootstrap',
            category: 'Bootstrap',
        },
        {
            link: 'https://snipbyte.com/',
            image: 'https://snipbyte.com/_next/image?url=%2Fassets%2Fimages%2Fwebp%2FheroImg.webp&w=750&q=80',
            heading: 'SnipByte Company Website',
            description: 'SnipByte Company Website, I have made this in Mern Stack, ReactJs',
            category: 'Reactjs',
        },
        {
            link: 'https://www.heartbeat.ventures/',
            image: 'https://images.squarespace-cdn.com/content/v1/5e70de3a54220b2862e17000/790b631d-200d-46e6-8583-050100389000/IMG_8805_2-2.jpg?format=1500w',
            heading: 'Heartbeat Ventures',
            description: 'A Wordpress Website, I have made this in Wordpress.',
            category: 'Wordpress',
        },
        {
            link: 'https://cathyperl-portfolio.vercel.app/',
            image: 'https://snipbyte.com/_next/image?url=%2Fuploads%2Fcathy%20pearl%20portfolio%20website%20template.webp&w=828&q=80',
            heading: 'Cathy Pearl Portfolio Page',
            description: 'Cathy Pearl Portfolio Website, I have made this in Bootstrap 5',
            category: 'Bootstrap',
        },
        {
            link: 'https://snipbyte.github.io/habit-list/',
            image: 'https://snipbyte.com/_next/image?url=%2Fuploads%2Fadvance%20to%20do%20list.webp&w=828&q=80',
            heading: 'Advance Habbit List',
            description: 'Advance Habbit List Using HTML CSS Bootstrap and JavaScript for snipbytesol',
            category: 'HTMLCSS',
        },
        {
            link: 'https://wetime-faixirk.vercel.app/',
            image: 'https://snipbyte.com/_next/image?url=%2Fassets%2Fimages%2Fwebp%2Fwetime%20chat%20bot%20.webp&w=750&q=80',
            heading: 'WETIME Bot in ReactJS',
            description: 'React AI-based couples games that are designed to enhance gaming experience with your partner',
            category: 'Reactjs',
        },
        {
            link: 'https://woodemos.extendons.com/carddesigner/shop/',
            image: 'https://woodemos.extendons.com/carddesigner/wp-content/uploads/2022/12/1-324x324.jpg',
            heading: 'Wedding Card & Flyer Designer Plugin',
            description: 'WooCommerce Business, Wedding Card & Flyer Designer Plugin, An HTML CSS and PHP Plugin in Wordpress',
            category: 'Wordpress',
        },
        {
            link: 'https://snipbyte.github.io/hotel-management-system/',
            image: 'https://snipbyte.com/_next/image?url=%2Fuploads%2Fhotel%20management%20system%20in%20php.webp&w=828&q=80',
            heading: 'Hotel Management System',
            description: 'PHP and Bootstrap Hotel Management System.',
            category: 'Bootstrap',
        },
        {
            link: 'https://snipbyte.com/blogpost/online-attendance-management-system-php-source-code-snipbyte',
            image: 'https://snipbyte.com/_next/image?url=%2Fuploads%2Fonline%20attendance%20system%20in%20php%20complete%20source%20code%20by%20snipbyte.webp&w=828&q=80',
            heading: 'Online Attendance Management System',
            description: 'Online Attendance Management System In HTML,CSS, PHP for SnipbyteSol',
            category: 'HTMLCSS',
        },
        {
            link: 'https://snipbyte.github.io/celebrity-portfolio/',
            image: 'https://snipbyte.com/_next/image?url=%2Fuploads%2Fcelebrity%20portfolio%20website%20template%20using%20html%20css%20bootstrap%20and%20js.webp&w=828&q=80',
            heading: 'Celebrity Portfolio Website',
            description: 'Celebrity Portfolio Website Template Using HTLM CSS Bootstrap and JavaScript for SnipbyteSol.',
            category: 'HTMLCSS',
        },
        {
            link: 'https://snipbyte.github.io/beautyparlourportfolio/',
            image: 'https://snipbyte.com/_next/image?url=%2Fuploads%2FParlour%20Portfolio%20Website%20Using%20Html%20Css%20and%20JavaScript.webp&w=828&q=80',
            heading: 'Beaty Parlour Website',
            description: 'Beaty Parlour Website Template Using Html Css and JavaScript for snipbytesol',
            category: 'HTMLCSS',
        },
        {
            link: 'https://snipbyte.github.io/mini-commerce/',
            image: 'https://snipbyte.com/_next/image?url=%2Fuploads%2Fe-commerce%20using%20html%20css%20bootstrap%20javascript%20and%20jQuery.webp&w=828&q=80',
            heading: 'Mini E-Commerce Template',
            description: 'Mini e-commerce Template Using HTML, CSS, Bootstrap, JavaScript and jQuery for SnipbyteSol.',
            category: 'HTMLCSS',
        },
        {
            link: 'https://snipbyte.github.io/advance-portfolio/',
            image: 'https://snipbyte.com/_next/image?url=%2Fuploads%2Fadvance%20portfolio%20using%20html%20css%20bootstrap%20and%20javascript.webp&w=828&q=80',
            heading: 'Pooja Sharma Advance Portfolio Website',
            description: 'Advance Portfolio Using HTML, CSS, Bootstrap and JavaScript for SnipByteSol',
            category: 'HTMLCSS',
        },
        {
            link: 'https://snipbyte.github.io/blue-gradient-e-commerce-landing-page/',
            image: 'https://snipbyte.com/_next/image?url=%2Fuploads%2Fe%20commerce%20landing%20page%20template.webp&w=828&q=80',
            heading: 'E commerce Website Landing Page',
            description: 'E commerce Website Landing Page Design Using Bootstrap 5 and Html 5 for Snipbytesol',
            category: 'Bootstrap',
        },
        {
            link: 'https://react-dashboard-khaki.vercel.app/',
            image: 'https://snipbyte.com/_next/image?url=%2Fassets%2Fimages%2Fwebp%2Fdashboard-template.webp&w=750&q=80',
            heading: 'Admin Dashboard',
            description: 'React dashboard, where user can manage all their activities and get all the reports related to their website.',
            category: 'Reactjs',
        },
        {
            link: 'https://attendance-system-flame.vercel.app/',
            image: 'https://snipbyte.com/_next/image?url=%2Fuploads%2Fnext_js_attendance_management.webp&w=828&q=80',
            heading: 'Admin Dashboard',
            description: 'React.js & Tailwind CSS Advanced Attendance Management System: Optimize Workforce Efficiency!',
            category: 'Reactjs',
        },
        {
            link: 'http://quictask.speckpro.com/',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTovbbaP4iRV3lxwgbXg6hht5lZYj8kmyaZBg&s',
            heading: 'Quictask',
            description: 'Mern Stack Project with Advance Functionalities',
            category: 'Reactjs',
        },
        {
            link: 'http://smssytemnew.speckpro.com/',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk-3QaBVGYrvEpZog4LnGbevzEe19mfODDqQ&s',
            heading: 'Student Management System',
            description: 'Mern Stack Project with Advance Functionalities, Solo made for ODL Software Company',
            category: 'Reactjs',
        },
        {
            link: '#',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4VQGuex5SBsTadohKpVvfqoRygwSnXe2jbQ&s',
            heading: 'Ecommerce Store',
            description: 'Mern Stack Project with all Ecommerce Advance Functionalities, Solo made for ODL Software Company',
            category: 'Reactjs',
        },

    ];

    const handleFilterChange = (category) => {
        setFilter(category);
    };

    const filteredProjects = filter === 'All' ? projects : projects.filter(project => project.category === filter);

    return (
        <div className="portfolio-section">
            <div className="d-flex gap-3 justify-content-center text-mediumaquamarine mt-3">
                <span className="h1 text-dark d-none d-md-block" style={{ fontWeight: "800", fontSize: "80px" }}>Portfolio</span>
                <span className="h1 text-dark d-md-none" style={{ fontWeight: "800", fontSize: "40px" }}>Portfolio</span>
            </div>
            <hr style={{ height: '5px' }} />
            <div className="filters text-center mb-4 ">
                {['All', 'Reactjs', 'Wordpress', 'Bootstrap', 'HTMLCSS'].map((category) => (
                    <button
                        key={category}
                        className={`fw-bold btn m-2 ${filter === category ? 'active-filter' : 'inactive-filter'}`}
                        onClick={() => handleFilterChange(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>
            <div className="row">
                {filteredProjects.map((project, index) => (
                    <div key={index} className="col-md-4 mb-4">
                        <Card {...project} />
                    </div>
                ))}
            </div>
            {filteredProjects.length === 0 && (
                <p className="text-center text-muted mt-4">
                    No projects in this category yet.
                </p>
            )}
            {filter !== 'All' && (
                <div className="d-flex gap-3 justify-content-center py-4 mt-3">


                    <span className="h1 text-secondary " style={{ fontWeight: "800", fontSize: "30px" }}> More <strong>{filter}</strong> Projects are Coming Soon!</span>
                </div>
            )}
            {filter == 'All' && (
                <div className="d-flex gap-3 justify-content-center py-4 mt-3">


                    <span className="h1 text-secondary " style={{ fontWeight: "800", fontSize: "30px" }}> More <strong>MERN Stack</strong> Projects are Coming Soon!</span>
                </div>
            )}
        </div>
    );
};

export default Portfolio;
