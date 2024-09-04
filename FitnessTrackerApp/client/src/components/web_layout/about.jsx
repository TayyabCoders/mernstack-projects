// Header.js
import React from 'react';
import './Header.css'; // Assuming you have a CSS file for styles

const Header = () => {
  return (
    <div className="black-bg">
      {/* Preloader Start */}
      <div id="preloader-active">
        <div className="preloader d-flex align-items-center justify-content-center">
          <div className="preloader-inner position-relative">
            <div className="preloader-circle"></div>
            <div className="preloader-img pere-text">
              <img src="assets/img/logo/loder.png" alt="" />
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
                    <img src="assets/img/logo/logo.png" alt="" />
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
    </div>
  );
};


const App = () => {
    return (
      <div>
        <Header />
        {/* Other components and content */}
      </div>
    );
  };

  
  // AboutMe.js
import React from 'react';

const AboutMe = () => {
  return (
    <main>
      {/* Hero Start */}
      <div className="slider-area2">
        <div className="slider-height2 d-flex align-items-center">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="hero-cap hero-cap2 pt-70">
                  <h2>About Me</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Hero End */}
      
      {/* Team Start */}
      <section className="team-area pt-80">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="single-cat text-center mb-30 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".2s">
                <div className="cat-icon">
                  <img src="assets/img/gallery/team1.png" alt="Body Building" />
                </div>
                <div className="cat-cap">
                  <h5><a href="services.html">Body Building</a></h5>
                  <p>You’ll look at graphs and charts in Task One, how to approach the task</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-cat text-center mb-30 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".4s">
                <div className="cat-icon">
                  <img src="assets/img/gallery/team2.png" alt="Muscle Gain" />
                </div>
                <div className="cat-cap">
                  <h5><a href="services.html">Muscle Gain</a></h5>
                  <p>You’ll look at graphs and charts in Task One, how to approach the task</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-cat text-center mb-30 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".6s">
                <div className="cat-icon">
                  <img src="assets/img/gallery/team3.png" alt="Weight Loss" />
                </div>
                <div className="cat-cap">
                  <h5><a href="services.html">Weight Loss</a></h5>
                  <p>You’ll look at graphs and charts in Task One, how to approach the task</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Team End */}
    </main>
  );
};


// App.js
import React from 'react';
import AboutMe from './AboutMe'; // Path to your AboutMe component

// const App = () => {
//   return (
//     <div>
//       <AboutMe />
//       {/* Other components and content */}
//     </div>
//   );
// };

// AboutSection.js

const AboutSection = () => {
  return (
    <section className="about-area2 fix pb-padding pt-50 pb-80">
      <div className="support-wrapper align-items-center">
        <div className="right-content2 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".2s">
          {/* Image */}
          <div className="right-img">
            <img src="assets/img/gallery/about.png" alt="About Me" />
          </div>
        </div>
        <div className="left-content2">
          {/* Section Title */}
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
};

// BlogSection.js

const BlogSection = () => {
  return (
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
          <div className="col-xl-6 col-lg-6 col-md-6">
            <div className="home-blog-single mb-30 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".2s">
              <div className="blog-img-cap">
                <div className="blog-img">
                  <img src="assets/img/gallery/blog1.png" alt="Blog 1" />
                </div>
                <div className="blog-cap">
                  <span>Gym & Fitness</span>
                  <h3><a href="blog_details.html">Your Antibiotic One Day To 10 Day Options</a></h3>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6">
            <div className="home-blog-single mb-30 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".4s">
              <div className="blog-img-cap">
                <div className="blog-img">
                  <img src="assets/img/gallery/blog2.png" alt="Blog 2" />
                </div>
                <div className="blog-cap">
                  <span>Gym & Fitness</span>
                  <h3><a href="blog_details.html">Your Antibiotic One Day To 10 Day Options</a></h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


// App.js

// const App = () => {
//   return (
//     <div>
//       <AboutSection />
//       <BlogSection />
//       {/* Other components and content */}
//     </div>
//   );
// };

// VideoSection.js

const VideoSection = () => {
  return (
    <div className="video-area section-bg2 d-flex align-items-center" data-background="assets/img/gallery/video-bg.png">
      <div className="container">
        <div className="video-wrap position-relative">
          <div className="video-icon">
            <a className="popup-video btn-icon" href="https://www.youtube.com/watch?v=up68UAfH0d0">
              <i className="fas fa-play"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

// ServicesSection.js

const ServicesSection = () => {
  return (
    <section className="services-area">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-8">
            <div className="single-services mb-40 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".1s">
              <div className="features-icon">
                <img src="assets/img/icon/icon1.svg" alt="Location Icon" />
              </div>
              <div className="features-caption">
                <h3>Location</h3>
                <p>You’ll look at graphs and charts in Task One, how to approach</p>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
            <div className="single-services mb-40 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".2s">
              <div className="features-icon">
                <img src="assets/img/icon/icon2.svg" alt="Phone Icon" />
              </div>
              <div className="features-caption">
                <h3>Phone</h3>
                <p>(90) 277 278 2566</p>
                <p>(78) 267 256 2578</p>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
            <div className="single-services mb-40 wow fadeInUp" data-wow-duration="2s" data-wow-delay=".4s">
              <div className="features-icon">
                <img src="assets/img/icon/icon3.svg" alt="Email Icon" />
              </div>
              <div className="features-caption">
                <h3>Email</h3>
                <p>jacson767@gmail.com</p>
                <p>contact56@zacsion.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


// App.js


// const App = () => {
//   return (
//     <div>
//       <VideoSection />
//       <ServicesSection />
//       {/* Other components and content */}
//     </div>
//   );
// };

// Footer.js

const Footer = () => {
  return (
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
                        {/* Main-menu */}
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
                  {/* Social Media */}
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
                    &copy;{new Date().getFullYear()} All rights reserved | This template is made with <i className="fa fa-heart" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank" rel="noopener noreferrer">Colorlib</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Scroll Up */}
      <div id="back-top">
        <a title="Go to Top" href="#"><i className="fas fa-level-up-alt"></i></a>
      </div>
    </footer>
  );
};



// App.js
// import React from 'react';
// import Footer from './Footer'; // Path to your Footer component

// const App = () => {
//   return (
//     <div>
//       {/* Other components and content */}
//       <Footer />
//     </div>
//   );
// };

export default App;



