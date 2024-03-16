import { Link } from "react-router-dom";

const Navbar = () => {
  const topLinks = [
    { text: "About Us", link: "portfolio-details" },
    { text: "Doctors" },
    { text: "Contact Us", link: "contact-us" },
    { text: "FAQ" },
  ];

  const navMenus = [
    { text: "Home", link: "/" },
    { text: "Doctors" },
    { text: "Services" },
    { text: "Pages" },
    { text: "Blogs" },
    { text: "Contact Us", link: "contact-us" },
  ];

  return (
    <>
      {/* Header Area */}
      <header className="header">
        {/* Topbar */}
        <div className="topbar">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-5 col-12">
                {/* Contact */}
                <ul className="top-link">
                  {topLinks.map((link, index) => (
                    <li key={index}>
                      <Link to={link.link}>{link.text}</Link>
                    </li>
                  ))}
                </ul>
                {/* End Contact */}
              </div>
              <div className="col-lg-6 col-md-7 col-12">
                {/* Top Contact */}
                <ul className="top-contact">
                  <li>
                    <i className="fa fa-phone" />
                    +880 1234 56789
                  </li>
                  <li>
                    <i className="fa fa-envelope" />
                    <a href="mailto:support@yourmail.com">
                      support@yourmail.com
                    </a>
                  </li>
                </ul>
                {/* End Top Contact */}
              </div>
            </div>
          </div>
        </div>
        {/* End Topbar */}
        {/* Header Inner */}
        <div className="header-inner">
          <div className="container">
            <div className="inner">
              <div className="row">
                <div className="col-lg-3 col-md-3 col-12">
                  {/* Start Logo */}
                  <div className="logo">
                    <Link to="/">
                      <img src="././src/assets/img/logo.png" alt="#" />
                    </Link>
                  </div>
                  {/* End Logo */}
                  {/* Mobile Nav */}
                  <div className="mobile-nav" />
                  {/* End Mobile Nav */}
                </div>
                <div className="col-lg-7 col-md-9 col-12">
                  {/* Main Menu */}
                  <div className="main-menu">
                    <nav className="navigation">
                      <ul className="nav menu">
                        {navMenus.map((link, index) => (
                          <li key={index}>
                            <Link to={link.link}>{link.text}</Link>
                          </li>
                        ))}
                      </ul>
                    </nav>
                  </div>
                  {/*/ End Main Menu */}
                </div>
                <div className="col-lg-2 col-12">
                  <div className="get-quote">
                    <a href="appointment.html" className="btn">
                      Book Appointment
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*/ End Header Inner */}
      </header>
    </>
  );
};

export default Navbar;
