// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className="header-area header-transparent">
        <div className="main-header header-sticky">
          <div className="container-fluid">
            <div className="menu-wrapper d-flex align-items-center justify-content-between">
              <div className="logo">
                <Link to="index.html"><img src="assets/img/logo/logo.png" alt="Logo" /></Link>
              </div>
              <div className="main-menu f-right d-none d-lg-block">
                <nav>
                  <ul id="navigation">
                    <li><Link to="index.html">Home</Link></li>
                    <li><Link to="about.html">About</Link></li>
                    <li><Link to="courses.html">Courses</Link></li>
                    <li><Link to="pricing.html">Pricing</Link></li>
                    <li><Link to="gallery.html">Gallery</Link></li>
                    <li>
                      <Link to="blog.html">Blog</Link>
                      <ul className="submenu">
                        <li><Link to="blog.html">Blog</Link></li>
                        <li><Link to="blog_details.html">Blog Details</Link></li>
                        <li><Link to="elements.html">Elements</Link></li>
                      </ul>
                    </li>
                    <li><Link to="contact.html">Contact</Link></li>
                  </ul>
                </nav>
              </div>
              <div className="header-btns d-none d-lg-block f-right">
                <Link to="contact.html" className="btn">Contact me</Link>
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

// src/components/Hero.js


const Hero = () => {
  return (
    <div className="slider-area2">
      <div className="slider-height2 d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="hero-cap hero-cap2 pt-70">
                <h2>Blog Details</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// src/components/BlogPost.js


const BlogPost = () => {
  return (
    <section className="blog_area single-post-area section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 posts-list">
            <div className="single-post">
              <div className="feature-img">
                <img className="img-fluid" src="assets/img/blog/single_blog_1.png" alt="Blog Post" />
              </div>
              <div className="blog_details">
                <h2 style={{ color: '#2d2d2d' }}>
                  Second divided from form fish beast made every of seas all gathered us saying he our
                </h2>
                <ul className="blog-info-link mt-3 mb-4">
                  <li><a href="#"><i className="fa fa-user"></i> Travel, Lifestyle</a></li>
                  <li><a href="#"><i className="fa fa-comments"></i> 03 Comments</a></li>
                </ul>
                <p className="excert">
                  MCSE boot camps have its supporters and its detractors...
                </p>
                <p>
                  MCSE boot camps have its supporters and its detractors...
                </p>
                <div className="quote-wrapper">
                  <div className="quotes">
                    MCSE boot camps have its supporters and its detractors...
                  </div>
                </div>
                <p>
                  MCSE boot camps have its supporters and its detractors...
                </p>
                <p>
                  MCSE boot camps have its supporters and its detractors...
                </p>
              </div>
            </div>
            {/* Add Navigation, Author, Comments, and Comment Form here */}
          </div>
          {/* Sidebar Component */}
        </div>
      </div>
    </section>
  );
};

// src/components/Sidebar.js


const Sidebar = () => {
  return (
    <div className="col-lg-4">
      <div className="blog_right_sidebar">
        <aside className="single_sidebar_widget search_widget">
          <form action="#">
            <div className="form-group">
              <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Search Keyword"
                  onFocus={(e) => e.target.placeholder = ''}
                  onBlur={(e) => e.target.placeholder = 'Search Keyword'} />
                <div className="input-group-append">
                  <button className="btns" type="button"><i className="ti-search"></i></button>
                </div>
              </div>
            </div>
            <button className="button rounded-0 primary-bg text-white w-100 btn_1 boxed-btn" type="submit">Search</button>
          </form>
        </aside>
        {/* Add other sidebar widgets here */}
      </div>
    </div>
  );
};

// src/App.js

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <main>
        <BlogPost />
        <Sidebar />
      </main>
    </div>
  );
};


// Services Component
const Services = () => (
  <section className="services-area">
    <div className="container">
      <div className="row justify-content-between">
        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-8">
          <div className="single-services mb-40">
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
          <div className="single-services mb-40">
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
          <div className="single-services mb-40">
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

// Footer Component
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
                  <a href="#"><FaTwitter /></a>
                  <a href="https://bit.ly/sai4ull"><FaFacebookF /></a>
                  <a href="#"><FaPinterestP /></a>
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
                  Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <FaHeart /> by <a href="https://colorlib.com" target="_blank" rel="noopener noreferrer">Colorlib</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

// Back to Top Component
const BackToTop = () => (
  <div id="back-top">
    <a title="Go to Top" href="#"><i className="fas fa-level-up-alt"></i></a>
  </div>
);

// const App = () => (
//   <div>
//     {/* Your other components go here */}
//     <Services />
//     <Footer />
//     <BackToTop />
//   </div>
// );

export default App;



