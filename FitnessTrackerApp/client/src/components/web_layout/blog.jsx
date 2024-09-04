// src/components/Preloader.js
import React from 'react';
import './Preloader.css'; // Assuming you have styles for this component

const Preloader = () => {
  return (
    <div id="preloader-active">
      <div className="preloader d-flex align-items-center justify-content-center">
        <div className="preloader-inner position-relative">
          <div className="preloader-circle"></div>
          <div className="preloader-img pere-text">
            <img src="assets/img/logo/loder.png" alt="Loading" />
          </div>
        </div>
      </div>
    </div>
  );
};



// src/components/Header.js


const Header = () => {
  return (
    <header>
      <div className="header-area header-transparent">
        <div className="main-header header-sticky">
          <div className="container-fluid">
            <div className="menu-wrapper d-flex align-items-center justify-content-between">
              {/* Logo */}
              <div className="logo">
                <a href="index.html"><img src="assets/img/logo/logo.png" alt="Logo" /></a>
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
  );
};



// src/App.js


const App = () => {
  return (
    <div>
      <Preloader />
      <Header />
      {/* Add other components or sections here */}
    </div>
  );
};


// src/components/BlogSection.js



const BlogSection = () => {
  const blogItems = [
    {
      imgSrc: 'assets/img/blog/single_blog_1.png',
      date: { day: '15', month: 'Jan' },
      title: 'Google inks pact for new 35-storey office',
      description: 'That dominion stars lights dominion divide years for fourth have don\'t stars is that he earth it first without heaven in place seed it second morning saying.',
      category: 'Travel, Lifestyle',
      comments: '03 Comments'
    },
    // Add other blog items here
  ];

  return (
    <section className="blog_area section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mb-5 mb-lg-0">
            <div className="blog_left_sidebar">
              {blogItems.map((item, index) => (
                <article className="blog_item" key={index}>
                  <div className="blog_item_img">
                    <img className="card-img rounded-0" src={item.imgSrc} alt="Blog" />
                    <a href="#" className="blog_item_date">
                      <h3>{item.date.day}</h3>
                      <p>{item.date.month}</p>
                    </a>
                  </div>
                  <div className="blog_details">
                    <a className="d-inline-block" href="blog_details.html">
                      <h2 className="blog-head" style={{ color: '#2d2d2d' }}>{item.title}</h2>
                    </a>
                    <p>{item.description}</p>
                    <ul className="blog-info-link">
                      <li><a href="#"><i className="fa fa-user"></i> {item.category}</a></li>
                      <li><a href="#"><i className="fa fa-comments"></i> {item.comments}</a></li>
                    </ul>
                  </div>
                </article>
              ))}
              <nav className="blog-pagination justify-content-center d-flex">
                <ul className="pagination">
                  <li className="page-item">
                    <a href="#" className="page-link" aria-label="Previous">
                      <i className="ti-angle-left"></i>
                    </a>
                  </li>
                  <li className="page-item"><a href="#" className="page-link">1</a></li>
                  <li className="page-item active"><a href="#" className="page-link">2</a></li>
                  <li className="page-item">
                    <a href="#" className="page-link" aria-label="Next">
                      <i className="ti-angle-right"></i>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="blog_right_sidebar">
              {/* Add Sidebar Widgets here */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// src/components/SearchWidget.js


const SearchWidget = () => (
  <aside className="single_sidebar_widget search_widget">
    <form action="#">
      <div className="form-group">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search Keyword"
            onFocus={(e) => e.target.placeholder = ''}
            onBlur={(e) => e.target.placeholder = 'Search Keyword'}
          />
          <div className="input-group-append">
            <button className="btns" type="button"><i className="ti-search"></i></button>
          </div>
        </div>
      </div>
      <button className="button rounded-0 primary-bg text-white w-100 btn_1 boxed-btn" type="submit">Search</button>
    </form>
  </aside>
);

// src/components/CategoryWidget.js


const CategoryWidget = () => (
  <aside className="single_sidebar_widget post_category_widget">
    <h4 className="widget_title" style={{ color: '#2d2d2d' }}>Category</h4>
    <ul className="list cat-list">
      <li><a href="#" className="d-flex"><p>Resaurant food</p><p>(37)</p></a></li>
      {/* Add other categories here */}
    </ul>
  </aside>
);

// src/components/RecentPostsWidget.js


const RecentPostsWidget = () => (
  <aside className="single_sidebar_widget popular_post_widget">
    <h3 className="widget_title" style={{ color: '#2d2d2d' }}>Recent Post</h3>
    {/* Add recent posts here */}
  </aside>
);

// src/components/TagCloudWidget.js


const TagCloudWidget = () => (
  <aside className="single_sidebar_widget tag_cloud_widget">
    <h4 className="widget_title" style={{ color: '#2d2d2d' }}>Tag Clouds</h4>
    <ul className="list">
      <li><a href="#">project</a></li>
      {/* Add other tags here */}
    </ul>
  </aside>
);

// src/components/InstagramFeedsWidget.js


const InstagramFeedsWidget = () => (
  <aside className="single_sidebar_widget instagram_feeds">
    <h4 className="widget_title" style={{ color: '#2d2d2d' }}>Instagram Feeds</h4>
    <ul className="instagram_row flex-wrap">
      <li><a href="#"><img className="img-fluid" src="assets/img/post/post_5.png" alt="Instagram Feed" /></a></li>
      {/* Add other Instagram feeds here */}
    </ul>
  </aside>
);

// src/components/NewsletterWidget.js


const NewsletterWidget = () => (
  <aside className="single_sidebar_widget newsletter_widget">
    <h4 className="widget_title" style={{ color: '#2d2d2d' }}>Newsletter</h4>
    <form action="#">
      <div className="form-group">
        <input
          type="email"
          className="form-control"
          placeholder="Enter email"
          onFocus={(e) => e.target.placeholder = ''}
          onBlur={(e) => e.target.placeholder = 'Enter email'}
          required
        />
      </div>
      <button className="button rounded-0 primary-bg text-white w-100 btn_1 boxed-btn" type="submit">Subscribe</button>
    </form>
  </aside>
);

// src/components/BlogSection.js

// const BlogSection = () => {
  // Blog items data as shown earlier

  return (
    <section className="blog_area section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mb-5 mb-lg-0">
            <div className="blog_left_sidebar">
              {/* Blog items here */}
              {/* Pagination here */}
            </div>
          </div>
          <div className="col-lg-4">
            <div className="blog_right_sidebar">
              <SearchWidget />
              <CategoryWidget />
              <RecentPostsWidget />
              <TagCloudWidget />
              <InstagramFeedsWidget />
              <NewsletterWidget />
            </div>
          </div>
        </div>
      </div>
    </section>
  );


// src/App.js
// import React from 'react';
// import BlogSection from './components/BlogSection';

// const App = () => {
//   return (
//     <div>
//       {/* Other components like Header, Preloader */}
//       <BlogSection />
//     </div>
//   );
// };

// export default App;






// Services Component
const Services = () => (
    <section className="services-area">
        <div className="container">
            <div className="row justify-content-between">
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-8">
                    <div className="single-services mb-40">
                        <div className="features-icon">
                            <img src="assets/img/icon/icon1.svg" alt="Location Icon"/>
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
                            <img src="assets/img/icon/icon2.svg" alt="Phone Icon"/>
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
                            <img src="assets/img/icon/icon3.svg" alt="Email Icon"/>
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
                                    <a href="index.html"><img src="assets/img/logo/logo2_footer.png" alt="Footer Logo"/></a>
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

// Scroll Up Component
const ScrollUp = () => (
    <div id="back-top">
        <a title="Go to Top" href="#"> <i className="fas fa-level-up-alt"></i></a>
    </div>
);

// Main App Component
// const App = () => (
//     <div>
//         <main>
//             {/* Include your blog and other main content components here */}
//             <Services />
//         </main>
//         <Footer />
//         <ScrollUp />
//     </div>
// );

export default App;




