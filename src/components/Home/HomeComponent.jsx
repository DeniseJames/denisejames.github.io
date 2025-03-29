import React from "react";
import teachingImage from '../../images/WhiteWomenTeaching.png';


export default function HomeComponent() {
  return (
    <div className="min-vh-100 bg-white text-black font-sans">
      {/* Header */}
      <header className="container py-4 border-bottom">
        <div className="text-center">
          <h2 className="h4 fw-semibold">
            Denise James, BSEE, MSEE, College and High School STEM and AI Teacher
          </h2>
        </div>
      </header>

      {/* Main */}
      <section className="container py-5">
        <div className="row align-items-center">
          {/* Left Column */}
          <div className="col-md-4 mb-4 mb-md-0">
            <h1 className="display-5 fw-bold">Teaching the Future of AI</h1>
            <p className="text-muted mt-3">
              Unlock unparalleled insights with our consulting services, where innovation
              meets expertise to redefine business success. Embrace the future of consultancy,
              driven by fresh strategies and cutting-edge solutions tailored uniquely for you.
            </p>
            <button className="btn btn-dark mt-3">LEARN MORE</button>
          </div>

          {/* Right Column */}
          <div className="col-md-8 text-center">
          <img
  src={teachingImage}
  alt="Teacher and students"
  className="img-fluid rounded shadow"
/>

          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-light py-5">
        <div className="container">
          <h2 className="h3 fw-semibold mb-5">Our Services</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="p-4 bg-white rounded shadow-sm h-100">
                <h3 className="h5 fw-bold mb-3">Insight Catalyst</h3>
                <p className="text-muted">
                  Unleash powerful data-driven insights to transform your strategies and propel your
                  business into the future. Stay ahead of the curve with cutting-edge analysis and
                  thought-provoking discussions tailored for visionary leaders.
                </p>
                <a href="#learn" className="text-primary text-decoration-underline small">Learn more</a>
              </div>
            </div>

            <div className="col-md-4">
              <div className="p-4 bg-white rounded shadow-sm h-100">
                <h3 className="h5 fw-bold mb-3">Synergy Grow</h3>
                <p className="text-muted">
                  Unveil groundbreaking solutions and transform business landscapes by exploring
                  real-world success stories. Our case studies provide the blueprint for innovative
                  strategies that redefine industry standards and propel you ahead of the curve.
                </p>
                <a href="#learn" className="text-primary text-decoration-underline small">Learn more</a>
              </div>
            </div>

            <div className="col-md-4">
              <div className="p-4 bg-white rounded shadow-sm h-100">
                <h3 className="h5 fw-bold mb-3">Insight Catalyst</h3>
                <p className="text-muted">
                  Our team channels a blend of diverse expertise and groundbreaking strategies to
                  propel your organization into the future. We're committed to redefining success
                  through collaboration and innovation.
                </p>
                <a href="#learn" className="text-primary text-decoration-underline small">Learn more</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="container py-4 border-top small d-flex justify-content-between align-items-center">
        <div>Your Site Title</div>
        <div className="d-flex gap-3">
          <a href="#location" className="text-decoration-none">Location</a>
          <a href="#contact" className="text-decoration-none">Contact</a>
        </div>
      </footer>
    </div>
  );
}