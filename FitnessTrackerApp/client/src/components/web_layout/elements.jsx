import React from 'react';
import './Preloader.css'; // Ensure you have the corresponding CSS file

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



const Header = () => {
  return (
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
  );
};




const Hero = () => {
  return (
    <div className="slider-area2">
      <div className="slider-height2 d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="hero-cap hero-cap2 pt-70">
                <h2>Elements</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};



function App() {
  return (
    <div>
      <Preloader /> {/* Preloader component */}
      <Header /> {/* Header component */}
      <main>
        <Hero /> {/* Hero section */}
        <SampleTextArea /> {/* Sample Text Area section */}
      </main>
    </div>
  );
}
// /* Preloader.css */
// #preloader-active {
//     /* Add styles for preloader container */
//   }
  
//   .preloader {
//     /* Add styles for preloader */
//   }
  
//   .preloader-inner {
//     /* Add styles for inner preloader */
//   }
  
//   .preloader-circle {
//     /* Add styles for preloader circle */
//   }
  
//   .preloader-img {
//     /* Add styles for preloader image */
//   }
// /* Header.css */
// .header-area {
//     /* Add styles for header area */
//   }
  
//   .main-menu {
//     /* Add styles for main menu */
//   }
  
//   .logo img {
//     /* Style for logo */
//   }
  
//   .header-btns .btn {
//     /* Style for header button */
//   }
//     /* Hero.css */
// .slider-area2 {
//     /* Add styles for hero section */
//   }
  
//   .hero-cap2 h2 {
//     /* Style for hero section title */
//   }
// /* SampleTextArea.css */
// .sample-text-area {
//     /* Add styles for sample text area */
//   }
  
//   .text-heading {
//     /* Style for heading */
//   }
  
//   .sample-text {
//     /* Style for sample text */
//   }
    


const Button = ({ className, children }) => {
  return (
    <a href="#" className={`genric-btn ${className}`}>
      {children}
    </a>
  );
};



const ButtonSection = () => {
  return (
    <section className="button-area">
      <div className="container box_1170 border-top-generic">
        <h3 className="text-heading">Sample Buttons</h3>

        <div className="button-group-area">
          <Button className="default">Default</Button>
          <Button className="primary">Primary</Button>
          <Button className="success">Success</Button>
          <Button className="info">Info</Button>
          <Button className="warning">Warning</Button>
          <Button className="danger">Danger</Button>
          <Button className="link">Link</Button>
          <Button className="disable">Disable</Button>
        </div>

        <div className="button-group-area mt-10">
          <Button className="default-border">Default</Button>
          <Button className="primary-border">Primary</Button>
          <Button className="success-border">Success</Button>
          <Button className="info-border">Info</Button>
          <Button className="warning-border">Warning</Button>
          <Button className="danger-border">Danger</Button>
          <Button className="link-border">Link</Button>
          <Button className="disable">Disable</Button>
        </div>

        <div className="button-group-area mt-40">
          <Button className="default radius">Default</Button>
          <Button className="primary radius">Primary</Button>
          <Button className="success radius">Success</Button>
          <Button className="info radius">Info</Button>
          <Button className="warning radius">Warning</Button>
          <Button className="danger radius">Danger</Button>
          <Button className="link radius">Link</Button>
          <Button className="disable radius">Disable</Button>
        </div>

        <div className="button-group-area mt-10">
          <Button className="default-border radius">Default</Button>
          <Button className="primary-border radius">Primary</Button>
          <Button className="success-border radius">Success</Button>
          <Button className="info-border radius">Info</Button>
          <Button className="warning-border radius">Warning</Button>
          <Button className="danger-border radius">Danger</Button>
          <Button className="link-border radius">Link</Button>
          <Button className="disable radius">Disable</Button>
        </div>

        <div className="button-group-area mt-40">
          <Button className="default circle">Default</Button>
          <Button className="primary circle">Primary</Button>
          <Button className="success circle">Success</Button>
          <Button className="info circle">Info</Button>
          <Button className="warning circle">Warning</Button>
          <Button className="danger circle">Danger</Button>
          <Button className="link circle">Link</Button>
          <Button className="disable circle">Disable</Button>
        </div>

        <div className="button-group-area mt-10">
          <Button className="default-border circle">Default</Button>
          <Button className="primary-border circle">Primary</Button>
          <Button className="success-border circle">Success</Button>
          <Button className="info-border circle">Info</Button>
          <Button className="warning-border circle">Warning</Button>
          <Button className="danger-border circle">Danger</Button>
          <Button className="link-border circle">Link</Button>
          <Button className="disable circle">Disable</Button>
        </div>

        <div className="button-group-area mt-40">
          <Button className="default circle arrow">
            Default<span className="lnr lnr-arrow-right"></span>
          </Button>
          <Button className="primary circle arrow">
            Primary<span className="lnr lnr-arrow-right"></span>
          </Button>
          <Button className="success circle arrow">
            Success<span className="lnr lnr-arrow-right"></span>
          </Button>
          <Button className="info circle arrow">
            Info<span className="lnr lnr-arrow-right"></span>
          </Button>
          <Button className="warning circle arrow">
            Warning<span className="lnr lnr-arrow-right"></span>
          </Button>
          <Button className="danger circle arrow">
            Danger<span className="lnr lnr-arrow-right"></span>
          </Button>
        </div>

        <div className="button-group-area mt-10">
          <Button className="default-border circle arrow">
            Default<span className="lnr lnr-arrow-right"></span>
          </Button>
          <Button className="primary-border circle arrow">
            Primary<span className="lnr lnr-arrow-right"></span>
          </Button>
          <Button className="success-border circle arrow">
            Success<span className="lnr lnr-arrow-right"></span>
          </Button>
          <Button className="info-border circle arrow">
            Info<span className="lnr lnr-arrow-right"></span>
          </Button>
          <Button className="warning-border circle arrow">
            Warning<span className="lnr lnr-arrow-right"></span>
          </Button>
          <Button className="danger-border circle arrow">
            Danger<span className="lnr lnr-arrow-right"></span>
          </Button>
        </div>

        <div className="button-group-area mt-40">
          <Button className="primary e-large">Extra Large</Button>
          <Button className="success large">Large</Button>
          <Button className="primary">Default</Button>
          <Button className="success medium">Medium</Button>
          <Button className="primary small">Small</Button>
        </div>

        <div className="button-group-area mt-10">
          <Button className="primary-border e-large">Extra Large</Button>
          <Button className="success-border large">Large</Button>
          <Button className="primary-border">Default</Button>
          <Button className="success-border medium">Medium</Button>
          <Button className="primary-border small">Small</Button>
        </div>
      </div>
    </section>
  );
};

// /* Button.css */
// .genric-btn {
//     display: inline-block;
//     padding: 10px 20px;
//     text-align: center;
//     text-decoration: none;
//     border-radius: 4px;
//     font-size: 16px;
//     color: #fff;
//     cursor: pointer;
//   }
  
//   .default { background-color: #e0e0e0; color: #333; }
//   .primary { background-color: #007bff; }
//   .success { background-color: #28a745; }
//   .info { background-color: #17a2b8; }
//   .warning { background-color: #ffc107; }
//   .danger { background-color: #dc3545; }
//   .link { background-color: #6c757d; }
//   .disable { background-color: #c1c1c1; color: #6c757d; }
  
//   .default-border { border: 2px solid #e0e0e0; color: #333; }
//   .primary-border { border: 2px solid #007bff; }
//   .success-border { border: 2px solid #28a745; }
//   .info-border { border: 2px solid #17a2b8; }
//   .warning-border { border: 2px solid #ffc107; }
//   .danger-border { border: 2px solid #dc3545; }
//   .link-border { border: 2px solid #6c757d; }
//   .disable { border: 2px solid #c1c1c1; color: #6c757d; }
  
//   .radius { border-radius: 50px; }
//   .circle { border-radius: 50%; padding: 12px 20px; }
  
//   .arrow { position: relative; }
//   .arrow .lnr { position: absolute; right: 10px; top: 50%; transform: translateY(-50%); }
//   .e-large { font-size: 20px; padding: 15px 30px; }
//   .large { font-size: 18px; padding: 12px 25px; }
//   .medium { font-size: 16px; padding: 10px 20px; }
//   .small { font-size: 14px;
  



const YourComponent = () => {
  return (
    <div className="whole-wrap">
      <div className="container box_1170">
        {/* Left Aligned Section */}
        <div className="section-top-border">
          <h3 className="mb-30">Left Aligned</h3>
          <div className="row">
            <div className="col-md-3">
              <img src="assets/img/elements/d.jpg" alt="" className="img-fluid" />
            </div>
            <div className="col-md-9 mt-sm-20">
              <p>Recently, the US Federal government banned online casinos from operating in America by making it illegal to transfer money to them through any US bank or payment system. As a result of this law, most of the popular online casino networks such as Party Gaming and PlayTech left the United States. Overnight, online casino players found themselves being chased by the Federal government. But, after a fortnight, the online casino industry came up with a solution and new online casinos started taking root. These began to operate under a different business umbrella, and by doing that, rendered the transfer of money to and from them legal. A major part of this was enlisting electronic banking systems that would accept this new clarification and start doing business with me. Listed in this article are the electronic banking systems that accept players from the United States that wish to play in online casinos.</p>
            </div>
          </div>
        </div>

        {/* Right Aligned Section */}
        <div className="section-top-border text-right">
          <h3 className="mb-30">Right Aligned</h3>
          <div className="row">
            <div className="col-md-9">
              <p className="text-right">Over time, even the most sophisticated, memory packed computer can begin to run slow if we don’t do something to prevent it. The reason why has less to do with how computers are made and how they age and more to do with the way we use them. You see, all of the daily tasks that we do on our PC from running programs to downloading and deleting software can make our computer sluggish. To keep this from happening, you need to understand the reasons why your PC is getting slower and do something to keep your PC running at its best. You can do this through regular maintenance and PC performance optimization programs</p>
              <p className="text-right">Before we discuss all of the things that could be affecting your PC’s performance, let’s talk a little about what symptoms</p>
            </div>
            <div className="col-md-3">
              <img src="assets/img/elements/d.jpg" alt="" className="img-fluid" />
            </div>
          </div>
        </div>

        {/* Definition Section */}
        <div className="section-top-border">
          <h3 className="mb-30">Definition</h3>
          <div className="row">
            <div className="col-md-4">
              <div className="single-defination">
                <h4 className="mb-20">Definition 01</h4>
                <p>Recently, the US Federal government banned online casinos from operating in America by making it illegal to transfer money to them through any US bank or payment system. As a result of this law, most of the popular online casino networks</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="single-defination">
                <h4 className="mb-20">Definition 02</h4>
                <p>Recently, the US Federal government banned online casinos from operating in America by making it illegal to transfer money to them through any US bank or payment system. As a result of this law, most of the popular online casino networks</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="single-defination">
                <h4 className="mb-20">Definition 03</h4>
                <p>Recently, the US Federal government banned online casinos from operating in America by making it illegal to transfer money to them through any US bank or payment system. As a result of this law, most of the popular online casino networks</p>
              </div>
            </div>
          </div>
        </div>

        {/* Block Quotes Section */}
        <div className="section-top-border">
          <h3 className="mb-30">Block Quotes</h3>
          <div className="row">
            <div className="col-lg-12">
              <blockquote className="generic-blockquote">
                “Recently, the US Federal government banned online casinos from operating in America by making it illegal to transfer money to them through any US bank or payment system. As a result of this law, most of the popular online casino networks such as Party Gaming and PlayTech left the United States. Overnight, online casino players found themselves being chased by the Federal government. But, after a fortnight, the online casino industry came up with a solution and new online casinos started taking root. These began to operate under a different business umbrella, and by doing that, rendered the transfer of money to and from them legal. A major part of this was enlisting electronic banking systems that would accept this new clarification and start doing business with me. Listed in this article are the electronic banking”
              </blockquote>
            </div>
          </div>
        </div>

        {/* Table Section */}
        <div className="section-top-border">
          <h3 className="mb-30">Table</h3>
          <div className="progress-table-wrap">
            <div className="progress-table">
              <div className="table-head">
                <div className="serial">#</div>
                <div className="country">Countries</div>
                <div className="visit">Visits</div>
                <div className="percentage">Percentages</div>
              </div>
              {[
                { id: 1, country: 'Canada', visits: '645032', percentage: 80, color: 'color-1' },
                { id: 2, country: 'Canada', visits: '645032', percentage: 30, color: 'color-2' },
                { id: 3, country: 'Canada', visits: '645032', percentage: 55, color: 'color-3' },
                { id: 4, country: 'Canada', visits: '645032', percentage: 60, color: 'color-4' },
                { id: 5, country: 'Canada', visits: '645032', percentage: 40, color: 'color-5' },
                { id: 6, country: 'Canada', visits: '645032', percentage: 70, color: 'color-6' },
                { id: 7, country: 'Canada', visits: '645032', percentage: 30, color: 'color-7' },
                { id: 8, country: 'Canada', visits: '645032', percentage: 60, color: 'color-8' }
              ].map(row => (
                <div key={row.id} className="table-row">
                  <div className="serial">{row.id < 10 ? `0${row.id}` : row.id}</div>
                  <div className="country">
                    <img src={`assets/img/elements/f${row.id}.jpg`} alt="flag" />{row.country}
                  </div>
                  <div className="visit">{row.visits}</div>
                  <div className="percentage">
                    <div className="progress">
                      <div className={`progress-bar ${row.color}`} role="progressbar" style={{ width: `${row.percentage}%` }} aria-valuenow={row.percentage} aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}



const App = () => {
  return (
    <div>
      <div className="section-top-border">
        <h3>Image Gallery</h3>
        <div className="row gallery-item">
          <div className="col-md-4">
            <a href="assets/img/elements/g1.jpg" className="img-pop-up">
              <div className="single-gallery-image" style={{ background: 'url(assets/img/elements/g1.jpg)' }}></div>
            </a>
          </div>
          <div className="col-md-4">
            <a href="assets/img/elements/g2.jpg" className="img-pop-up">
              <div className="single-gallery-image" style={{ background: 'url(assets/img/elements/g2.jpg)' }}></div>
            </a>
          </div>
          <div className="col-md-4">
            <a href="assets/img/elements/g3.jpg" className="img-pop-up">
              <div className="single-gallery-image" style={{ background: 'url(assets/img/elements/g3.jpg)' }}></div>
            </a>
          </div>
          <div className="col-md-6">
            <a href="assets/img/elements/g4.jpg" className="img-pop-up">
              <div className="single-gallery-image" style={{ background: 'url(assets/img/elements/g4.jpg)' }}></div>
            </a>
          </div>
          <div className="col-md-6">
            <a href="assets/img/elements/g5.jpg" className="img-pop-up">
              <div className="single-gallery-image" style={{ background: 'url(assets/img/elements/g5.jpg)' }}></div>
            </a>
          </div>
          <div className="col-md-4">
            <a href="assets/img/elements/g6.jpg" className="img-pop-up">
              <div className="single-gallery-image" style={{ background: 'url(assets/img/elements/g6.jpg)' }}></div>
            </a>
          </div>
          <div className="col-md-4">
            <a href="assets/img/elements/g7.jpg" className="img-pop-up">
              <div className="single-gallery-image" style={{ background: 'url(assets/img/elements/g7.jpg)' }}></div>
            </a>
          </div>
          <div className="col-md-4">
            <a href="assets/img/elements/g8.jpg" className="img-pop-up">
              <div className="single-gallery-image" style={{ background: 'url(assets/img/elements/g8.jpg)' }}></div>
            </a>
          </div>
        </div>
      </div>

      <div className="section-top-border">
        <div className="row">
          <div className="col-md-4">
            <h3 className="mb-20">Image Gallery</h3>
            <div className="typography">
              <h1>This is header 01</h1>
              <h2>This is header 02</h2>
              <h3>This is header 03</h3>
              <h4>This is header 04</h4>
              <h5>This is header 05</h5>
              <h6>This is header 06</h6>
            </div>
          </div>
          <div className="col-md-4 mt-sm-30">
            <h3 className="mb-20">Unordered List</h3>
            <ul className="unordered-list">
              <li>Fta Keys</li>
              <li>For Women Only Your Computer Usage</li>
              <li>Facts Why Inkjet Printing Is Very Appealing
                <ul>
                  <li>Addiction When Gambling Becomes
                    <ul>
                      <li>Protective Preventative Maintenance</li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>Dealing With Technical Support 10 Useful Tips</li>
              <li>Make Myspace Your Best Designed Space</li>
              <li>Cleaning And Organizing Your Computer</li>
            </ul>
          </div>
          <div className="col-md-4 mt-sm-30">
            <h3 className="mb-20">Ordered List</h3>
            <ol className="ordered-list">
              <li>Fta Keys</li>
              <li>For Women Only Your Computer Usage</li>
              <li>Facts Why Inkjet Printing Is Very Appealing
                <ol className="ordered-list-alpha">
                  <li>Addiction When Gambling Becomes
                    <ol className="ordered-list-roman">
                      <li>Protective Preventative Maintenance</li>
                    </ol>
                  </li>
                </ol>
              </li>
              <li>Dealing With Technical Support 10 Useful Tips</li>
              <li>Make Myspace Your Best Designed Space</li>
              <li>Cleaning And Organizing Your Computer</li>
            </ol>
          </div>
        </div>
      </div>

      <div className="section-top-border">
        <div className="row">
          <div className="col-lg-8 col-md-8">
            <h3 className="mb-30">Form Element</h3>
            <form action="#">
              <div className="mt-10">
                <input type="text" name="first_name" placeholder="First Name"
                  onFocus={(e) => e.target.placeholder = ''} onBlur={(e) => e.target.placeholder = 'First Name'} required
                  className="single-input" />
              </div>
              <div className="mt-10">
                <input type="text" name="last_name" placeholder="Last Name"
                  onFocus={(e) => e.target.placeholder = ''} onBlur={(e) => e.target.placeholder = 'Last Name'} required
                  className="single-input" />
              </div>
              <div className="mt-10">
                <input type="text" name="middle_name" placeholder="Middle Name"
                  onFocus={(e) => e.target.placeholder = ''} onBlur={(e) => e.target.placeholder = 'Middle Name'} required
                  className="single-input" />
              </div>
              <div className="mt-10">
                <input type="email" name="EMAIL" placeholder="Email address"
                  onFocus={(e) => e.target.placeholder = ''} onBlur={(e) => e.target.placeholder = 'Email address'} required
                  className="single-input" />
              </div>
              <div className="input-group-icon mt-10">
                <div className="icon"><i className="fa fa-thumb-tack" aria-hidden="true"></i></div>
                <input type="text" name="address" placeholder="Address"
                  onFocus={(e) => e.target.placeholder = ''} onBlur={(e) => e.target.placeholder = 'Address'} required
                  className="single-input" />
              </div>
              <div className="input-group-icon mt-10">
                <div className="icon"><i className="fa fa-plane" aria-hidden="true"></i></div>
                <div className="form-select" id="default-select">
                  <select>
                    <option value="1">City</option>
                    <option value="1">Dhaka</option>
                    <option value="1">Dilli</option>
                    <option value="1">New York</option>
                    <option value="1">Islamabad</option>
                  </select>
                </div>
              </div>
              <div className="input-group-icon mt-10">
                <div className="icon"><i className="fa fa-globe" aria-hidden="true"></i></div>
                <div className="form-select" id="default-select">
                  <select>
                    <option value="1">Country</option>
                    <option value="1">Bangladesh</option>
                    <option value="1">India</option>
                    <option value="1">England</option>
                    <option value="1">Sri Lanka</option>
                  </select>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};


const App = () => {
  return (
    <div>
      <div className="section-top-border">
        <div className="row">
          <div className="col-lg-8 col-md-8">
            <h3 className="mb-30">Form Element</h3>
            <form action="#">
              <div className="mt-10">
                <textarea 
                  className="single-textarea" 
                  placeholder="Message" 
                  onFocus={(e) => e.target.placeholder = ''} 
                  onBlur={(e) => e.target.placeholder = 'Message'} 
                  required
                ></textarea>
              </div>
              <div className="mt-10">
                <input 
                  type="text" 
                  name="primary_color" 
                  placeholder="Primary color" 
                  onFocus={(e) => e.target.placeholder = ''} 
                  onBlur={(e) => e.target.placeholder = 'Primary color'} 
                  required 
                  className="single-input-primary"
                />
              </div>
              <div className="mt-10">
                <input 
                  type="text" 
                  name="accent_color" 
                  placeholder="Accent color" 
                  onFocus={(e) => e.target.placeholder = ''} 
                  onBlur={(e) => e.target.placeholder = 'Accent color'} 
                  required 
                  className="single-input-accent"
                />
              </div>
              <div className="mt-10">
                <input 
                  type="text" 
                  name="secondary_color" 
                  placeholder="Secondary color" 
                  onFocus={(e) => e.target.placeholder = ''} 
                  onBlur={(e) => e.target.placeholder = 'Secondary color'} 
                  required 
                  className="single-input-secondary"
                />
              </div>
            </form>
          </div>
          <div className="col-lg-3 col-md-4 mt-sm-30">
            <div className="single-element-widget">
              <h3 className="mb-30">Switches</h3>
              <div className="switch-wrap d-flex justify-content-between">
                <p>01. Sample Switch</p>
                <div className="primary-switch">
                  <input type="checkbox" id="default-switch" />
                  <label htmlFor="default-switch"></label>
                </div>
              </div>
              <div className="switch-wrap d-flex justify-content-between">
                <p>02. Primary Color Switch</p>
                <div className="primary-switch">
                  <input type="checkbox" id="primary-switch" checked />
                  <label htmlFor="primary-switch"></label>
                </div>
              </div>
              <div className="switch-wrap d-flex justify-content-between">
                <p>03. Confirm Color Switch</p>
                <div className="confirm-switch">
                  <input type="checkbox" id="confirm-switch" checked />
                  <label htmlFor="confirm-switch"></label>
                </div>
              </div>
            </div>
            <div className="single-element-widget mt-30">
              <h3 className="mb-30">Selectboxes</h3>
              <div className="default-select" id="default-select">
                <select>
                  <option value="1">English</option>
                  <option value="2">Spanish</option>
                  <option value="3">Arabic</option>
                  <option value="4">Portuguese</option>
                  <option value="5">Bengali</option>
                </select>
              </div>
            </div>
            <div className="single-element-widget mt-30">
              <h3 className="mb-30">Checkboxes</h3>
              <div className="switch-wrap d-flex justify-content-between">
                <p>01. Sample Checkbox</p>
                <div className="primary-checkbox">
                  <input type="checkbox" id="default-checkbox" />
                  <label htmlFor="default-checkbox"></label>
                </div>
              </div>
              <div className="switch-wrap d-flex justify-content-between">
                <p>02. Primary Color Checkbox</p>
                <div className="primary-checkbox">
                  <input type="checkbox" id="primary-checkbox" checked />
                  <label htmlFor="primary-checkbox"></label>
                </div>
              </div>
              <div className="switch-wrap d-flex justify-content-between">
                <p>03. Confirm Color Checkbox</p>
                <div className="confirm-checkbox">
                  <input type="checkbox" id="confirm-checkbox" />
                  <label htmlFor="confirm-checkbox"></label>
                </div>
              </div>
              <div className="switch-wrap d-flex justify-content-between">
                <p>04. Disabled Checkbox</p>
                <div className="disabled-checkbox">
                  <input type="checkbox" id="disabled-checkbox" disabled />
                  <label htmlFor="disabled-checkbox"></label>
                </div>
              </div>
              <div className="switch-wrap d-flex justify-content-between">
                <p>05. Disabled Checkbox active</p>
                <div className="disabled-checkbox">
                  <input type="checkbox" id="disabled-checkbox-active" checked disabled />
                  <label htmlFor="disabled-checkbox-active"></label>
                </div>
              </div>
            </div>
            <div className="single-element-widget mt-30">
              <h3 className="mb-30">Radios</h3>
              <div className="switch-wrap d-flex justify-content-between">
                <p>01. Sample radio</p>
                <div className="primary-radio">
                  <input type="radio" name="radio" id="default-radio" />
                  <label htmlFor="default-radio"></label>
                </div>
              </div>
              <div className="switch-wrap d-flex justify-content-between">
                <p>02. Primary Color radio</p>
                <div className="primary-radio">
                  <input type="radio" name="radio" id="primary-radio" checked />
                  <label htmlFor="primary-radio"></label>
                </div>
              </div>
              <div className="switch-wrap d-flex justify-content-between">
                <p>03. Confirm Color radio</p>
                <div className="confirm-radio">
                  <input type="radio" name="radio" id="confirm-radio" checked />
                  <label htmlFor="confirm-radio"></label>
                </div>
              </div>
              <div className="switch-wrap d-flex justify-content-between">
                <p>04. Disabled radio</p>
                <div className="disabled-radio">
                  <input type="radio" name="radio" id="disabled-radio" disabled />
                  <label htmlFor="disabled-radio"></label>
                </div>
              </div>
              <div className="switch-wrap d-flex justify-content-between">
                <p>05. Disabled radio active</p>
                <div className="disabled-radio">
                  <input type="radio" name="radio" id="disabled-radio-active" checked disabled />
                  <label htmlFor="disabled-radio-active"></label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Align Area */}
    </div>
  );
};

import React from 'react';
import './App.css'; // Ensure you have appropriate CSS for styling

const App = () => {
  return (
    <div>
      {/* Services Area */}
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

      {/* Footer */}
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
                    {/* Header Start */}
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
                    {/* Header End */}
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
                      {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                      Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i className="fa fa-heart" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank" rel="noopener noreferrer">Colorlib</a>
                      {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Footer End */}
      </footer>

      {/* Scroll Up */}
      <div id="back-top">
        <a title="Go to Top" href="#"><i className="fas fa-level-up-alt"></i></a>
      </div>
    </div>
  );
};

export default App;



