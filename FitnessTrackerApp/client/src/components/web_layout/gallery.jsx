// Preloader.js
import React from 'react';
import './Preloader.css'; // Ensure you have the corresponding CSS file

const Preloader = () => {
  return (
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
  );
};

// Header.js

const Header = () => {
  return (
    <header>
      <div className="header-area header-transparent">
        <div className="main-header header-sticky">
          <div className="container-fluid">
            <div className="menu-wrapper d-flex align-items-center justify-content-between">
              <div className="logo">
                <a href="index.html"><img src="assets/img/logo/logo.png" alt="Logo" /></a>
              </div>
              <div className="main-menu f-right d-none d-lg-block">
                <nav>
                  <ul id="navigation">
                    <li><a href="index.html">Home</a></li>
                    <li><a href="about.html">About</a></li>
                    <li><a href="courses.html">Courses</a></li>
                    <li><a href="pricing.html">Pricing</a></li>
                    <li><a href="gallery.html">Gallery</a></li>
                    <li><a href="blog.html">Blog</a>
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
              <div className="header-btns d-none d-lg-block f-right">
                <a href="contact.html" className="btn">Contact me</a>
              </div>
              <div className="col-12">
                <div className="mobile_menu d-block d-lg-none"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
// Hero.js


const Hero = () => {
  return (
    <div className="slider-area2">
      <div className="slider-height2 d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="hero-cap hero-cap2 pt-70">
                <h2>Gallery</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Gallery.js


const Gallery = () => {
  const galleryItems = [
    { src: 'assets/img/gallery/gallery1.png', title: 'Muscle gaining' },
    { src: 'assets/img/gallery/gallery2.png', title: 'Muscle gaining' },
    { src: 'assets/img/gallery/gallery3.png', title: 'Muscle gaining' },
    { src: 'assets/img/gallery/gallery4.png', title: 'Muscle gaining' },
    { src: 'assets/img/gallery/gallery5.png', title: 'Muscle gaining' },
    { src: 'assets/img/gallery/gallery6.png', title: 'Muscle gaining' },
  ];

  return (
    <div className="gallery-area">
      <div className="container-fluid">
        <div className="row">
          {galleryItems.map((item, index) => (
            <div className={`col-xl-${index === 5 ? '6' : '4'} col-lg-6 col-md-6 col-sm-6`} key={index}>
              <div className="box snake mb-30">
                <div className="gallery-img big-img" style={{ backgroundImage: `url(${item.src})` }}></div>
                <div className="overlay">
                  <div className="overlay-content">
                    <h3>{item.title}</h3>
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
};

// App.js
// import React from 'react';
// import Preloader from './Preloader';
// import Header from './Header';
// import Hero from './Hero';
// import Gallery from './Gallery';
// import './App.css'; // Ensure you have the corresponding CSS file

// const App = () => {
//   return (
//     <div className="black-bg">
//       <Preloader />
//       <Header />
//       <main>
//         <Hero />
//         <Gallery />
//       </main>
//     </div>
//   );
// };

// export default App;


// Services.js

const services = [
  {
    icon: 'assets/img/icon/icon1.svg',
    title: 'Location',
    description: 'You’ll look at graphs and charts in Task One, how to approach',
  },
  {
    icon: 'assets/img/icon/icon2.svg',
    title: 'Phone',
    description: '(90) 277 278 2566\n(78) 267 256 2578',
  },
  {
    icon: 'assets/img/icon/icon3.svg',
    title: 'Email',
    description: 'jacson767@gmail.com\ncontact56@zacsion.com',
  },
];

const Services = () => {
  return (
    <section className="services-area">
      <div className="container">
        <div className="row justify-content-between">
          {services.map((service, index) => (
            <div key={index} className="col-xl-4 col-lg-4 col-md-6 col-sm-8">
              <div className="single-services mb-40">
                <div className="features-icon">
                  <img src={service.icon} alt={service.title} />
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
};

// Footer.js
import React from 'react';
import './Footer.css'; // Ensure you have the corresponding CSS file

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-area black-bg">
          <div className="container">
            <div className="footer-top footer-padding">
              <div className="row">
                <div className="col-xl-12">
                  <div className="single-footer-caption mb-50 text-center">
                    <div className="footer-logo wow fadeInUp" data-wow-duration="1s" data-wow-delay=".2s">
                      <a href="index.html"><img src="assets/img/logo/logo2_footer.png" alt="Footer Logo" /></a>
                    </div>
                    <div className="header-area main-header2 wow fadeInUp" data-wow-duration="2s" data-wow-delay=".4s">
                      <div className="main-header main-header2">
                        <div className="menu-wrapper menu-wrapper2">
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
                    <div className="footer-social mt-30 wow fadeInUp" data-wow-duration="3s" data-wow-delay=".8s">
                      <a href="#"><i className="fab fa-twitter"></i></a>
                      <a href="https://bit.ly/sai4ull"><i className="fab fa-facebook-f"></i></a>
                      <a href="#"><i className="fab fa-pinterest-p"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-bottom">
              <div className="row d-flex align-items-center">
                <div className="col-lg-12">
                  <div className="footer-copy-right text-center">
                    <p>
                      Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i className="fa fa-heart" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank" rel="noopener noreferrer">Colorlib</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div id="back-top">
        <a title="Go to Top" href="#"><i className="fas fa-level-up-alt"></i></a>
      </div>
    </>
  );
};

// App.js
// import React from 'react';
// import Services from './Services';
// import Footer from './Footer';
// import './App.css'; // Ensure you have the corresponding CSS file

// const App = () => {
//   return (
//     <div className="black-bg">
//       <main>
//         <Services />
//       </main>
//       <Footer />
//     </div>
//   );
// };

export default App;


