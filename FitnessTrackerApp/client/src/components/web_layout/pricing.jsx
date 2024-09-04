// Pricing.js
import React from 'react';
import './Pricing.css'; // Ensure you have the corresponding CSS file

const Pricing = () => {
  return (
    <main className="black-bg">
      {/* Preloader Start */}
      <div id="preloader-active">
        <div className="preloader d-flex align-items-center justify-content-center">
          <div className="preloader-inner position-relative">
            <div className="preloader-circle"></div>
            <div className="preloader-img pere-text">
              <img src="assets/img/logo/loder.png" alt="Loader" />
            </div>
          </div>
        </div>
      </div>
      {/* Preloader End */}

      {/* Header Start */}
      <header>
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
      </header>
      {/* Header End */}

      {/* Hero Start */}
      <div className="slider-area2">
        <div className="slider-height2 d-flex align-items-center">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="hero-cap hero-cap2 pt-70">
                  <h2>Pricing</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Hero End */}

      {/* Pricing Area Start */}
      <section className="pricing-area section-padding30 fix">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="section-tittle text-center mb-55">
                <h2>Pricing</h2>
              </div>
            </div>
          </div>
          <div className="row">
            {[...Array(3)].map((_, index) => (
              <div key={index} className="col-lg-4 col-md-6 col-sm-6">
                <div className="properties mb-30">
                  <div className="properties__card">
                    <div className="about-icon">
                      <img src="assets/img/icon/price.svg" alt="Price Icon" />
                    </div>
                    <div className="properties__caption">
                      <span className="month">6 month</span>
                      <p className="mb-25">$30/m <span>(Single class)</span></p>
                      <div className="single-features">
                        <div className="features-icon">
                          <img src="assets/img/icon/check.svg" alt="Check Icon" />
                        </div>
                        <div className="features-caption">
                          <p>Free riding</p>
                        </div>
                      </div>
                      <div className="single-features">
                        <div className="features-icon">
                          <img src="assets/img/icon/check.svg" alt="Check Icon" />
                        </div>
                        <div className="features-caption">
                          <p>Unlimited equipments</p>
                        </div>
                      </div>
                      <div className="single-features">
                        <div className="features-icon">
                          <img src="assets/img/icon/check.svg" alt="Check Icon" />
                        </div>
                        <div className="features-caption">
                          <p>Personal trainer</p>
                        </div>
                      </div>
                      <div className="single-features">
                        <div className="features-icon">
                          <img src="assets/img/icon/check.svg" alt="Check Icon" />
                        </div>
                        <div className="features-caption">
                          <p>Weight losing classes</p>
                        </div>
                      </div>
                      <div className="single-features mb-20">
                        <div className="features-icon">
                          <img src="assets/img/icon/check.svg" alt="Check Icon" />
                        </div>
                        <div className="features-caption">
                          <p>Month to mouth</p>
                        </div>
                      </div>
                      <a href="#" className="border-btn border-btn2">Join Now</a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Pricing Area End */}
    </main>
  );
};

// App.js


// const App = () => {
//   return (
//     <div>
//       <Pricing />
//     </div>
//   );
// };

// Services.js

const ServiceItem = ({ icon, title, description }) => (
  <div className="col-xl-4 col-lg-4 col-md-6 col-sm-8">
    <div className="single-services mb-40">
      <div className="features-icon">
        <img src={icon} alt={title} />
      </div>
      <div className="features-caption">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  </div>
);

const Services = () => {
  return (
    <section className="services-area">
      <div className="container">
        <div className="row justify-content-between">
          <ServiceItem
            icon="assets/img/icon/icon1.svg"
            title="Location"
            description="You’ll look at graphs and charts in Task One, how to approach"
          />
          <ServiceItem
            icon="assets/img/icon/icon2.svg"
            title="Phone"
            description="(90) 277 278 2566\n(78) 267 256 2578"
          />
          <ServiceItem
            icon="assets/img/icon/icon3.svg"
            title="Email"
            description="jacson767@gmail.com\ncontact56@zacsion.com"
          />
        </div>
      </div>
    </section>
  );
};

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
                  {/* Social Links */}
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
};

// App.js

// const App = () => {
//   return (
//     <div>
//       <Services />
//       <Footer />
//     </div>
//   );
// };



// ScrollUpButton.js

const ScrollUpButton = () => {
  return (
    <div id="back-top">
      <a title="Go to Top" href="#">
        <i className="fas fa-level-up-alt"></i>
      </a>
    </div>
  );
};

export default ScrollUpButton;



