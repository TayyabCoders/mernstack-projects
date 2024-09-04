import React from 'react';
import './Header.css'; // Ensure you have the corresponding CSS file

const Header = () => {
  return (
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
  );
};

// /* Header.css */
// .header-area {
//     /* Add your header area styles here */
//   }
  
//   .header-transparent {
//     /* Add transparent header styles */
//   }
  
//   .main-header {
//     /* Add main header styles */
//   }
  
//   .menu-wrapper {
//     /* Add menu wrapper styles */
//   }
  
//   .logo img {
//     /* Style for the logo image */
//   }
  
//   .main-menu {
//     /* Styles for main menu */
//   }
  
//   .header-btns .btn {
//     /* Style for the contact button */
//   }
  
//   .mobile_menu {
//     /* Style for mobile menu */
//   }
  
//   /* Add other styles as needed */
  


function App() {
  return (
    <div className="black-bg">
      <Header /> {/* Use the Header component */}
      {/* Other components and content */}
    </div>
  );
}



const Hero = () => {
  return (
    <div className="slider-area2">
      <div className="slider-height2 d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="hero-cap hero-cap2 pt-70">
                <h2>Courses</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


const Team = () => {
  return (
    <section className="team-area fix section-padding30">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="section-tittle text-center mb-55">
              <h2>What I Offer</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="single-cat text-center mb-30">
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
            <div className="single-cat text-center mb-30">
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
            <div className="single-cat text-center mb-30">
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
  );
};


const TrainingCategories = () => {
  return (
    <section className="traning-categories black-bg">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-6 col-lg-6">
            <div className="single-topic text-center mb-30">
              <div className="topic-img">
                <img src="assets/img/gallery/cat1.png" alt="Personal Training" />
                <div className="topic-content-box">
                  <div className="topic-content">
                    <h3>Personal Training</h3>
                    <p>You’ll look at graphs and charts in Task One, how to approach the task and <br /> the language needed for a successful answer.</p>
                    <a href="courses.html" className="border-btn">View Courses</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="single-topic text-center mb-30">
              <div className="topic-img">
                <img src="assets/img/gallery/cat2.png" alt="Group Training" />
                <div className="topic-content-box">
                  <div className="topic-content">
                    <h3>Group Training</h3>
                    <p>You’ll look at graphs and charts in Task One, how to approach the task and <br /> the language needed for a successful answer.</p>
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



function App() {
  return (
    <div className="black-bg">
      <Header /> {/* Header component */}
      <main>
        <Hero /> {/* Hero section */}
        <Team /> {/* Team section */}
        <TrainingCategories /> {/* Training Categories section */}
      </main>
    </div>
  );
}

// /* Hero.css */
// .slider-area2 {
//     /* Add styles for slider area */
//   }
  
//   .slider-height2 {
//     /* Add styles for slider height */
//   }
  
//   .hero-cap2 {
//     /* Add styles for hero caption */
//   }
  
// /* Team.css */
// .team-area {
//     /* Add styles for team area */
//   }
  
//   .single-cat {
//     /* Add styles for single category */
//   }
  
//   .cat-icon img {
//     /* Style for category icon */
//   }
  
//   .cat-cap h5 a {
//     /* Style for category title link */
//   }
  
//   .cat-cap p {
//     /* Style for category description */
//   }
// /* TrainingCategories.css */
// .traning-categories {
//     /* Add styles for training categories */
//   }
  
//   .single-topic {
//     /* Add styles for single topic */
//   }
  
//   .topic-img img {
//     /* Style for topic image */
//   }
  
//   .topic-content-box {
//     /* Add styles for topic content box */
//   }
  
//   .border-btn, .btn {
//     /* Style for buttons */
//   }
    



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
import React from 'react';
import './Services.css'; // Ensure you have the corresponding CSS file

const servicesData = [
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
          {servicesData.map((service, index) => (
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


const Footer = () => {
  return (
    <footer>
      <div className="footer-area black-bg">
        <div className="container">
          <div className="footer-top footer-padding">
            <div className="row">
              <div className="col-xl-12">
                <div className="single-footer-caption mb-50 text-center">
                  <div className="footer-logo wow fadeInUp" data-wow-duration="1s" data-wow-delay=".2s">
                    <a href="index.html">
                      <img src="assets/img/logo/logo2_footer.png" alt="Footer Logo" />
                    </a>
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
  );
};



const ScrollToTop = () => {
  return (
    <div id="back-top">
      <a title="Go to Top" href="#"><i className="fas fa-level-up-alt"></i></a>
    </div>
  );
};


function App() {
  return (
    <div className="black-bg">
      <Header /> {/* Header component */}
      <main>
        <Hero /> {/* Hero section */}
        <Team /> {/* Team section */}
        <TrainingCategories /> {/* Training Categories section */}
        <VideoSection /> {/* Video Section */}
        <Services /> {/* Services section */}
      </main>
      <Footer /> {/* Footer component */}
      <ScrollToTop /> {/* Scroll-to-Top button */}
    </div>
  );
}

// /* VideoSection.css */
// .video-area {
//     /* Add styles for video area */
//   }
  
//   .video-icon a {
//     /* Style for video icon */
//   }
  
// /* Services.css */
// .services-area {
//     /* Add styles for services area */
//   }
  
//   .single-services {
//     /* Add styles for single service */
//   }
  
//   .features-icon img {
//     /* Style for service icon */
//   }
  
//   .features-caption h3 {
//     /* Style for service title */
//   }
  
//   .features-caption p {
//     /* Style for service description */
//   }
//   /* Footer.css */
// .footer-area {
//     /* Add styles for footer area */
//   }
  
//   .footer-logo img {
//     /* Style for footer logo */
//   }
  
//   .footer-social a {
//     /* Style for social icons */
//   }
  
//   .footer-bottom p {
//     /* Style for footer copyright text */
//   }
//   /* ScrollToTop.css */
// #back-top {
//     /* Add styles for scroll-to-top button */
//   }
  
//   #back-top a {
//     /* Style for scroll-to-top link */
//   }
  

