import React from 'react';
import './App.css'; // Import your CSS file here

const App = () => {
  return (
    <div className="black-bg">
      {/* Preloader Start */}
      <div id="preloader-active">
        <div className="preloader d-flex align-items-center justify-content-center">
          <div className="preloader-inner position-relative">
            <div className="preloader-circle"></div>
            <div className="preloader-img pere-text">
              <img src="assets/img/logo/loder.png" alt="Preloader" />
            </div>
          </div>
        </div>
      </div>
      {/* Preloader End */}

      <header>
        {/* Header Start */}
        <div className="header-area header-transparent">
          <div className="main-header header-sticky">
            <div className="container-fluid">
              <div className="menu-wrapper d-flex align-items-center justify-content-between">
                {/* Logo */}
                <div className="logo">
                  <a href="index.html">
                    <img src="assets/img/logo/logo.png" alt="Logo" />
                  </a>
                </div>
                {/* Main-menu */}
                <div className="main-menu f-right d-none d-lg-block">
                  <nav>
                    <ul id="navigation">
                      <li><a href="index.html">Home</a></li>
                      <li><a href="about.html">About</a></li>
                      <li><a href="courses.html">Courses</a></li>
                      <li><a href="pricing.html">Pricing</a></li>
                      <li><a href="gallery.html">Gallery</a></li>
                      <li>
                        <a href="blog.html">Blog</a>
                        <ul className="submenu">
                          <li><a href="blog.html">Blog</a></li>
                          <li><a href="blog_details.html">Blog Details</a></li>
                          <li><a href="elements.html">Elements</a></li>
                        </ul>
                      </li>
                      <li><a href="contact.html">Contact</a></li>
                    </ul>
                  </nav>
                </div>
                {/* Header-btn */}
                <div className="header-btns d-none d-lg-block f-right">
                  <a href="contact.html" className="btn">Contact me</a>
                </div>
                {/* Mobile Menu */}
                <div className="col-12">
                  <div className="mobile_menu d-block d-lg-none"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Header End */}
      </header>

      <main>
        {/* Slider Area Start */}
        <div className="slider-area position-relative">
          <div className="slider-active">
            {/* Single Slider */}
            <div className="single-slider slider-height d-flex align-items-center">
              <div className="container">
                <div className="row">
                  <div className="col-xl-9 col-lg-9 col-md-10">
                    <div className="hero__caption">
                      <span data-animation="fadeInLeft" data-delay="0.1s">Hi This is Zacson</span>
                      <h1 data-animation="fadeInLeft" data-delay="0.4s">Gym Trainer</h1>
                      <a href="courses.html" className="border-btn hero-btn" data-animation="fadeInLeft" data-delay="0.8s">My Courses</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Slider Area End */}
      </main>
    </div>
  );
};


import './TrainingCategories.css'; // Ensure to import relevant CSS

const TrainingCategories = () => {
  return (
    <section className="traning-categories black-bg">
      <div className="container-fluid">
        <div className="row">
          {/* Personal Training */}
          <div className="col-xl-6 col-lg-6">
            <div className="single-topic text-center mb-30">
              <div className="topic-img">
                <img src="assets/img/gallery/cat1.png" alt="Personal Training" />
                <div className="topic-content-box">
                  <div className="topic-content">
                    <h3>Personal Training</h3>
                    <p>
                      You’ll look at graphs and charts in Task One, how to approach the task and
                      <br /> the language needed for a successful answer.
                    </p>
                    <a href="courses.html" className="border-btn">View Courses</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Group Training */}
          <div className="col-xl-6 col-lg-6">
            <div className="single-topic text-center mb-30">
              <div className="topic-img">
                <img src="assets/img/gallery/cat2.png" alt="Group Training" />
                <div className="topic-content-box">
                  <div className="topic-content">
                    <h3>Group Training</h3>
                    <p>
                      You’ll look at graphs and charts in Task One, how to approach the task and
                      <br /> the language needed for a successful answer.
                    </p>
                    <a href="courses.html" className="btn">View Courses</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


import './TeamSection.css'; // Add your CSS file here

const TeamSection = () => (
  <section className="team-area fix">
    <div className="container">
      <div className="row">
        <div className="col-xl-12">
          <div className="section-tittle text-center mb-55 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".1s">
            <h2>What I Offer</h2>
          </div>
        </div>
      </div>
      <div className="row">
        {[
          { title: 'Body Building', imgSrc: 'assets/img/gallery/team1.png', delay: '.2s' },
          { title: 'Muscle Gain', imgSrc: 'assets/img/gallery/team2.png', delay: '.4s' },
          { title: 'Weight Loss', imgSrc: 'assets/img/gallery/team3.png', delay: '.6s' }
        ].map((item, index) => (
          <div key={index} className="col-lg-4 col-md-6">
            <div className="single-cat text-center mb-30 wow fadeInUp" data-wow-duration="1s" data-wow-delay={item.delay}>
              <div className="cat-icon">
                <img src={item.imgSrc} alt={item.title} />
              </div>
              <div className="cat-cap">
                <h5><a href="services.html">{item.title}</a></h5>
                <p>You’ll look at graphs and charts in Task One, how to approach the task </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);


import './GallerySection.css'; // Add your CSS file here

const GallerySection = () => (
  <div className="gallery-area section-padding30">
    <div className="container-fluid">
      <div className="row">
        {[
          'gallery1.png', 'gallery2.png', 'gallery3.png', 
          'gallery4.png', 'gallery5.png', 'gallery6.png'
        ].map((image, index) => (
          <div key={index} className={`col-xl-${index < 3 ? 4 : (index < 5 ? 3 : 6)} col-lg-6 col-md-6 col-sm-6`}>
            <div className="box snake mb-30">
              <div className="gallery-img big-img" style={{ backgroundImage: `url(assets/img/gallery/${image})` }}></div>
              <div className="overlay">
                <div className="overlay-content">
                  <h3>Muscle gaining</h3>
                  <a href="gallery.html"><i className="ti-plus"></i></a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);


import './PricingSection.css'; // Add your CSS file here

const PricingSection = () => (
  <section className="pricing-area section-padding40 fix">
    <div className="container">
      <div className="row">
        <div className="col-xl-12">
          <div className="section-tittle text-center mb-55 wow fadeInUp" data-wow-duration="2s" data-wow-delay=".1s">
            <h2>Pricing</h2>
          </div>
        </div>
      </div>
      <div className="row">
        {Array.from({ length: 3 }).map((_, index) => (
          <div key={index} className="col-lg-4 col-md-6 col-sm-6">
            <div className="properties mb-30 wow fadeInUp" data-wow-duration="1s" data-wow-delay={`${0.2 * (index + 1)}s`}>
              <div className="properties__card">
                <div className="about-icon">
                  <img src="assets/img/icon/price.svg" alt="Price" />
                </div>
                <div className="properties__caption">
                  <span className="month">6 month</span>
                  <p className="mb-25">$30/m <span>(Single class)</span></p>
                  {['Free riding', 'Unlimited equipments', 'Personal trainer', 'Weight losing classes', 'Month to mouth'].map((feature, i) => (
                    <div key={i} className="single-features">
                      <div className="features-icon">
                        <img src="assets/img/icon/check.svg" alt="Check" />
                      </div>
                      <div className="features-caption">
                        <p>{feature}</p>
                      </div>
                    </div>
                  ))}
                  <a href="#" className="border-btn border-btn2">Join Now</a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

import TeamSection from './TeamSection';
import GallerySection from './GallerySection';
import PricingSection from './PricingSection';

const App = () => (
  <div>
    <TeamSection />
    <GallerySection />
    <PricingSection />
  </div>
);

import './AboutSection.css'; // Add your CSS file here

const AboutSection = () => (
  <section className="about-area2 fix pb-padding pt-50 pb-80">
    <div className="support-wrapper align-items-center">
      <div className="right-content2">
        <div className="right-img wow fadeInUp" data-wow-duration="1s" data-wow-delay=".1s">
          <img src="assets/img/gallery/about.png" alt="About Me" />
        </div>
      </div>
      <div className="left-content2">
        <div className="section-tittle2 mb-20 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s">
          <div className="front-text">
            <h2>About Me</h2>
            <p>
              You’ll look at graphs and charts in Task One, how to approach the task and the language needed 
              for a successful answer. You’ll examine Task Two questions and learn how to plan, write and 
              check academic essays.
            </p>
            <p className="mb-40">
              Task One, how to approach the task and the language needed for a successful answer. You’ll 
              examine Task Two questions and learn how to plan, write and check academic essays.
            </p>
            <a href="courses.html" className="border-btn">My Courses</a>
          </div>
        </div>
      </div>
    </div>
  </section>
);


// /* AboutSection.css */

// .about-area2 {
//     /* Add your styles here */
//   }
  
//   .pb-padding {
//     padding-bottom: 80px;
//   }
  
//   .pt-50 {
//     padding-top: 50px;
//   }
  
//   .pb-80 {
//     padding-bottom: 80px;
//   }
  
//   .support-wrapper {
//     display: flex;
//     align-items: center;
//   }
  
//   .right-content2 {
//     flex: 1;
//   }
  
//   .right-img {
//     /* Add your styles here */
//   }
  
//   .left-content2 {
//     flex: 1;
//   }
  
//   .section-tittle2 {
//     /* Add your styles here */
//   }
  
//   .front-text {
//     /* Add your styles here */
//   }
  
//   .border-btn {
//     /* Add your styles here */
//   }
  
//   /* Add your wow.js animation styles if needed */
  






import AboutSection from './AboutSection';

function App() {
    return (
        <div>
            {/* Other components */}
            <AboutSection />
            {/* Other components */}
        </div>
    );
}


import './BlogSection.css'; // Add your CSS file here

const BlogSection = () => (
  <section className="home-blog-area pt-10 pb-50">
    <div className="container">
      {/* Section Title */}
      <div className="row justify-content-center">
        <div className="col-lg-7 col-md-9 col-sm-10">
          <div className="section-tittle text-center mb-100 wow fadeInUp" data-wow-duration="2s" data-wow-delay=".2s">
            <h2>From Blog</h2>
          </div>
        </div>
      </div>
      <div className="row">
        {[
          {
            imgSrc: 'assets/img/gallery/blog1.png',
            category: 'Gym & Fitness',
            title: 'Your Antibiotic One Day To 10 Day Options',
            link: 'blog_details.html',
            delay: '.4s'
          },
          {
            imgSrc: 'assets/img/gallery/blog2.png',
            category: 'Gym & Fitness',
            title: 'Your Antibiotic One Day To 10 Day Options',
            link: 'blog_details.html',
            delay: '.6s'
          }
        ].map((blog, index) => (
          <div key={index} className="col-xl-6 col-lg-6 col-md-6">
            <div className="home-blog-single mb-30 wow fadeInUp" data-wow-duration="1s" data-wow-delay={blog.delay}>
              <div className="blog-img-cap">
                <div className="blog-img">
                  <img src={blog.imgSrc} alt={blog.title} />
                </div>
                <div className="blog-cap">
                  <span>{blog.category}</span>
                  <h3><a href={blog.link}>{blog.title}</a></h3>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// /* BlogSection.css */

// .home-blog-area {
//     padding-top: 10px;
//     padding-bottom: 50px;
//   }
  
//   .section-tittle {
//     margin-bottom: 100px;
//   }
  
//   .blog-img-cap {
//     display: flex;
//     flex-direction: column;
//   }
  
//   .blog-img {
//     overflow: hidden;
//   }
  
//   .blog-img img {
//     width: 100%;
//     height: auto;
//   }
  
//   .blog-cap {
//     padding: 15px;
//   }
  
//   .blog-cap span {
//     display: block;
//     margin-bottom: 10px;
//     font-weight: bold;
//   }
  
//   .blog-cap h3 {
//     margin: 0;
//   }
  
//   .blog-cap a {
//     text-decoration: none;
//     color: inherit;
//   }
  
//   .mb-30 {
//     margin-bottom: 30px;
//   }
  
//   /* Add your wow.js animation styles if needed */




import BlogSection from './BlogSection';

const App = () => (
  <div>
    {/* Other components */}
    <BlogSection />
    {/* Other components */}
  </div>
);


import './ServicesSection.css'; // Add your CSS file here

const services = [
  {
    imgSrc: 'assets/img/icon/icon1.svg',
    title: 'Location',
    description: 'You’ll look at graphs and charts in Task One, how to approach'
  },
  {
    imgSrc: 'assets/img/icon/icon2.svg',
    title: 'Phone',
    description: '(90) 277 278 2566\n(78) 267 256 2578'
  },
  {
    imgSrc: 'assets/img/icon/icon3.svg',
    title: 'Email',
    description: 'jacson767@gmail.com\ncontact56@zacsion.com'
  }
];

const ServicesSection = () => (
  <section className="services-area">
    <div className="container">
      <div className="row justify-content-between">
        {services.map((service, index) => (
          <div
            key={index}
            className={`col-xl-${index === 1 ? 3 : 4} col-lg-4 col-md-6 col-sm-8`}
          >
            <div
              className="single-services mb-40 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay={`${index * 0.1}s`}
            >
              <div className="features-icon">
                <img src={service.imgSrc} alt={service.title} />
              </div>
              <div className="features-caption">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// /* ServicesSection.css */

// .services-area {
//     /* Add your styles here */
//   }
  
//   .single-services {
//     /* Add your styles here */
//   }
  
//   .features-icon {
//     /* Add your styles here */
//   }
  
//   .features-icon img {
//     width: 100%;
//     height: auto;
//   }
  
//   .features-caption {
//     /* Add your styles here */
//   }
  
//   .features-caption h3 {
//     margin: 0;
//     font-size: 1.5rem;
//   }
  
//   .features-caption p {
//     margin: 0.5rem 0;
//   }
  
//   /* Add your wow.js animation styles if needed */



import ServicesSection from './ServicesSection';

const App = () => (
  <div>
    {/* Other components */}
    <ServicesSection />
    {/* Other components */}
  </div>
);


import './Footer.css'; // Import your CSS file here

const Footer = () => (
  <footer>
    {/* Footer Start */}
    <div className="footer-area black-bg">
      <div className="container">
        <div className="footer-top footer-padding">
          {/* Footer Menu */}
          <div className="row">
            <div className="col-xl-12">
              <div className="single-footer-caption mb-50 text-center">
                {/* Logo */}
                <div className="footer-logo wow fadeInUp" data-wow-duration="1s" data-wow-delay=".2s">
                  <a href="index.html">
                    <img src="assets/img/logo/logo2_footer.png" alt="Footer Logo" />
                  </a>
                </div>
                {/* Menu */}
                <div className="header-area main-header2 wow fadeInUp" data-wow-duration="2s" data-wow-delay=".4s">
                  <div className="main-header main-header2">
                    <div className="menu-wrapper menu-wrapper2">
                      {/* Main Menu */}
                      <div className="main-menu main-menu2 text-center">
                        <nav>
                          <ul>
                            <li><a href="index.html">Home</a></li>
                            <li><a href="about.html">About</a></li>
                            <li><a href="courses.html">Courses</a></li>
                            <li><a href="pricing.html">Pricing</a></li>
                            <li><a href="gallery.html">Gallery</a></li>
                            <li><a href="contact.html">Contact</a></li>
                          </ul>
                        </nav>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Social Media Links */}
                <div className="footer-social mt-30 wow fadeInUp" data-wow-duration="3s" data-wow-delay=".8s">
                  <a href="#"><i className="fab fa-twitter"></i></a>
                  <a href="https://bit.ly/sai4ull"><i className="fab fa-facebook-f"></i></a>
                  <a href="#"><i className="fab fa-pinterest-p"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="row d-flex align-items-center">
            <div className="col-lg-12">
              <div className="footer-copy-right text-center">
                <p>
                  Copyright &copy;{new Date().getFullYear()} All rights reserved | This template is made with <i className="fa fa-heart" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank" rel="noopener noreferrer">Colorlib</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Footer End */}
  </footer>
);

// /* Footer.css */

// .footer-area {
//     background-color: #000; /* Adjust the background color if needed */
//     color: #fff; /* Adjust the text color if needed */
//   }
  
//   .footer-logo img {
//     max-width: 150px; /* Adjust logo size if needed */
//   }
  
//   .main-menu ul {
//     list-style: none;
//     padding: 0;
//   }
  
//   .main-menu ul li {
//     display: inline-block;
//     margin: 0 15px;
//   }
  
//   .main-menu ul li a {
//     color: #fff; /* Adjust link color if needed */
//     text-decoration: none;
//   }
  
//   .footer-social a {
//     color: #fff; /* Adjust social icon color if needed */
//     margin: 0 10px;
//     font-size: 1.5rem; /* Adjust icon size if needed */
//   }
  
//   .footer-copy-right p {
//     margin: 0;
//     font-size: 0.9rem; /* Adjust font size if needed */
//   }
  
//   .footer-copy-right a {
//     color: #fff; /* Adjust link color if needed */
//   }
  


import Footer from './Footer';

const App = () => (
  <div>
    {/* Other components */}
    <Footer />
    {/* Other components */}
  </div>
);


import './ScrollUpButton.css'; // Import your CSS for styling

const ScrollUpButton = () => (
  <div id="back-top">
    <a title="Go to Top" href="#">
      <i className="fas fa-level-up-alt"></i>
    </a>
  </div>
);

// /* ScrollUpButton.css */

// #back-top {
//     position: fixed;
//     bottom: 20px;
//     right: 20px;
//     display: none; /* Hide by default, show when scrolling */
//   }
  
//   #back-top a {
//     background: #000; /* Background color */
//     color: #fff; /* Text color */
//     padding: 10px;
//     border-radius: 50%;
//     text-align: center;
//     font-size: 24px;
//   }
  
//   #back-top a:hover {
//     background: #555; /* Background color on hover */
//   }
  


// import React, { useEffect } from 'react';
// import $ from 'jquery';
// import 'bootstrap';
// import 'slick-carousel/slick/slick.min.css';
// import 'slick-carousel/slick/slick-theme.min.css';
// import 'owl.carousel/dist/assets/owl.carousel.min.css';
// import 'owl.carousel/dist/assets/owl.theme.default.min.css';
// import 'wow.js/css/libs/animate.css';
// import './App.css'; // Import your main CSS file
// import ScrollUpButton from './ScrollUpButton';

const App = () => {
  useEffect(() => {
    // Initialize WOW.js
    const WOW = require('wow.js');
    new WOW().init();

    // // Initialize jQuery plugins
    // require('jquery.slicknav');
    // require('owl.carousel');
    // require('slick-carousel');
    // require('magnific-popup');
    // require('gijgo');
    // require('jquery.nice-select');
    // require('jquery.sticky');
    // require('jquery.counterup');
    // require('waypoints');
    // require('jquery.countdown');
    // require('hover-direction-snake');

    // Initialize plugins if needed
    $(document).ready(() => {
      $('.your-class').slick(); // Example for slick slider
      $('.owl-carousel').owlCarousel(); // Example for owl carousel
    });
  }, []);

  return (
    <div>
      {/* Your main content here */}
      <ScrollUpButton />
    </div>
  );
};

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/all.min.css';
import './index.css'; // Custom global styles


import '@fortawesome/fontawesome-free/css/all.min.css';



  










