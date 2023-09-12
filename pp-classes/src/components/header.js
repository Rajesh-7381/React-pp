import React from 'react'

function header() {
  return (
    <div>
   <header className="navigation fixed-top">
  <div className="container">
    {/* main nav */}
    <nav className="navbar navbar-expand-lg navbar-light px-0">
      {/* logo */}
      <a className="navbar-brand logo" href="index.html">
        <img loading="lazy" className="logo-default" src="images/logo.png" alt="logo" />
        <img loading="lazy" className="logo-white" src="images/logo-white.png" alt="logo" />
      </a>
      {/* /logo */}
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation" aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navigation">
        <ul className="navbar-nav ml-auto text-center">
          
          <li className="nav-item ">
            <a className="nav-link" href="index.html">Home</a>
          </li>
          <li className="nav-item ">
            <a className="nav-link" href="about.html">About Us</a>
          </li>
          <li className="nav-item ">
            <a className="nav-link" href="/register">register</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#!" id="navbarDropdown02" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Explore Program <i className="tf-ion-chevron-down" />
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown02">
              <li><a className="dropdown-item" href="404.html">Regular Course</a></li>
              <li><a className="dropdown-item" href="blog.html">ShortTerm Course</a></li>
              <li><a className="dropdown-item" href="single-post.html">Crash Course</a></li>
              
            </ul>
          </li>
          <li className="nav-item ">
            <a className="nav-link" href="portfolio.html">Testimonial</a>
          </li>
          <li className="nav-item ">
            <a className="nav-link" href="team.html">Team</a>
          </li>
          <li className="nav-item ">
            <a className="nav-link" href="pricing.html">Pricing</a>
          </li>
          <li className="nav-item ">
            <a className="nav-link" href="contact.html">Contact Us/Enquiry</a>
          </li>
          
        </ul>
      </div>
    </nav>
    {/* /main nav */}
  </div>
</header>

    </div>
  )
}

export default header;
