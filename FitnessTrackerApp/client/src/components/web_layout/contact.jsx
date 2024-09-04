import React from 'react';
import './Preloader.css'; // Add styles here

const Preloader = () => (
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



const Header = () => (
  <header>
    <div className="header-area header-transparent">
      <div className="main-header header-sticky">
        <div className="container-fluid">
          <div className="menu-wrapper d-flex align-items-center justify-content-between">
            {/* Logo */}
            <div className="logo">
              <a href="index.html"><img src="assets/img/logo/logo.png" alt="Logo" /></a>
            </div>
            {/* Main Menu */}
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
            {/* Header Buttons */}
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
);


const Main = () => (
    <main>
      {/* Hero Section */}
      <div className="slider-area2">
        <div className="slider-height2 d-flex align-items-center">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="hero-cap hero-cap2 pt-70">
                  <h2>Contact me</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
  
  const App = () => (
    <div>
      <Preloader />
      <Header />
      <Main />
    </div>
  );
  

  // Make sure to replace `YOUR_API_KEY` with your actual Google Maps API key
  const GOOGLE_MAPS_API_KEY = 'YOUR_API_KEY';
  
  const Map = () => {
    const mapRef = useRef(null);
  
    useEffect(() => {
      const loadMapScript = () => {
        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}&callback=initMap`;
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);
      };
  
      const initMap = () => {
        const mapOptions = {
          center: { lat: -34.397, lng: 150.644 },
          zoom: 8,
        };
        new google.maps.Map(mapRef.current, mapOptions);
      };
  
      window.initMap = initMap;
      loadMapScript();
  
      return () => {
        window.initMap = null;
      };
    }, []);
  
    return (
      <section className="contact-section">
        <div className="container">
          <div
            id="map"
            style={{ height: '480px', width: '100%' }}
            ref={mapRef}
          ></div>
        </div>
      </section>
    );
  };
  
  import React, { useState } from 'react';

  const ContactForm = () => {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value
      });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Handle form submission
      console.log('Form data submitted:', formData);
      // You can use fetch or axios to send formData to your backend
    };
  
    return (
      <section className="contact-section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="contact-title">Get in Touch</h2>
            </div>
            <div className="col-lg-8">
              <form
                className="form-contact contact_form"
                onSubmit={handleSubmit}
                noValidate
              >
                <div className="row">
                  <div className="col-12">
                    <div className="form-group">
                      <textarea
                        className="form-control w-100"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        cols="30"
                        rows="9"
                        placeholder="Enter Message"
                      ></textarea>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <input
                        className="form-control valid"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <input
                        className="form-control valid"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email"
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group">
                      <input
                        className="form-control"
                        name="subject"
                        type="text"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Enter Subject"
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group mt-3">
                  <button type="submit" className="button button-contactForm boxed-btn">
                    Send
                  </button>
                </div>
              </form>
            </div>
            <div className="col-lg-3 offset-lg-1">
              <div className="media contact-info">
                <span className="contact-info__icon">
                  <i className="ti-home"></i>
                </span>
                <div className="media-body">
                  <h3>Buttonwood, California.</h3>
                  <p>Rosemead, CA 91770</p>
                </div>
              </div>
              <div className="media contact-info">
                <span className="contact-info__icon">
                  <i className="ti-tablet"></i>
                </span>
                <div className="media-body">
                  <h3>+1 253 565 2365</h3>
                  <p>Mon to Fri 9am to 6pm</p>
                </div>
              </div>
              <div className="media contact-info">
                <span className="contact-info__icon">
                  <i className="ti-email"></i>
                </span>
                <div className="media-body">
                  <h3>support@colorlib.com</h3>
                  <p>Send us your query anytime!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  import React from 'react';

  const services = [
    {
      title: 'Location',
      description: 'You’ll look at graphs and charts in Task One, how to approach',
      icon: 'assets/img/icon/icon1.svg',
    },
    {
      title: 'Phone',
      description: '(90) 277 278 2566\n(78) 267 256 2578',
      icon: 'assets/img/icon/icon2.svg',
    },
    {
      title: 'Email',
      description: 'jacson767@gmail.com\ncontact56@zacsion.com',
      icon: 'assets/img/icon/icon3.svg',
    },
  ];
  
  const ServicesArea = () => (
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
  


  const Footer = () => (
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
      <div id="back-top">
        <a title="Go to Top" href="#"><i className="fas fa-level-up-alt"></i></a>
      </div>
    </footer>
  );
  
//   const App = () => (
//     <>
//       <ServicesArea />
//       <Footer />
//     </>
//   );
  
  