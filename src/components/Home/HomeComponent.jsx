import React from "react";
import teachingImage from '../../images/WhiteWomenTeaching.png';


export default function HomeComponent() {
  return (
    <div className="min-vh-100 bg-white text-black font-sans">
      {/* Header */}
      <header className="container py-4 border-bottom">
      <div className="d-flex justify-content-between align-items-center">
  <h2 className="h4 fw-semibold mb-0">
    Denise James, BSEE, MSEE, College and High School STEM and AI Teacher
  </h2>
  <a href="https://www.linkedin.com/in/deniserjames/" target="_blank" rel="noopener noreferrer">
    <i className="bi bi-linkedin" style={{ fontSize: '1.5rem' }}></i>
  </a>
</div>

      </header>

      {/* Main */}
      <section className="container py-5">
        <div className="row ">
          {/* Left Column */}
          <div className="col-md-4 mb-4 mb-md-0">
            <h1 className="display-5 fw-bold">Teaching the Future of Computer Science</h1>
            <p className="text-muted mt-3">
            Equip students with the skills to lead in a rapidly evolving digital world. 
            Our computer science program emphasizes hands-on learning in emerging fields 
            such as artificial intelligence and robotics, fostering critical thinking, 
            creativity, and collaboration.
             By connecting foundational coding skills with real-world applications, 
             we prepare learners to use technology and shape its future. 
             Invest in an education that empowers students to thrive in tomorrow’s careers.
            </p>
            <button className="btn btn-dark mt-3">LEARN MORE</button>
          </div>

          {/* Right Column */}
          <div className="col-md-8">
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
          <h2 className="h3 fw-semibold mb-5">Expertise</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="p-4 bg-white rounded shadow-sm h-100">
                <h3 className="h5 fw-bold mb-3">Ignite Innovation with AP Computer Science</h3>
                <p className="text-muted">
                Unleash student potential through AP Computer Science — where curiosity 
                meets code and ideas become innovative. From building real-world apps
                 to exploring the foundations of AI and cybersecurity, this course 
                 empowers high school learners with the skills that power the future. 
                 Whether they dream of launching startups or solving global challenges, 
                 AP Computer Science opens doors to college, careers, and beyond. 
                 Let your school lead the way in shaping tomorrow’s tech leaders.
                </p>
                <a href="#learn" className="text-primary text-decoration-underline small">Learn more</a>
              </div>
            </div>

            <div className="col-md-4">
              <div className="p-4 bg-white rounded shadow-sm h-100">
                <h3 className="h5 fw-bold mb-3">Discover the Power of AI: Teaching Tomorrow, Today</h3>
                <p className="text-muted">
                Step into the future with a high school course that brings Artificial Intelligence to life.
                 From understanding machine learning to building intelligent chatbots with tools like 
                 DeepSeek and ChatGPT, students gain hands-on experience with the technologies shaping our 
                 world. This course fosters innovation, ethical awareness, and real-world problem-solving
                  — preparing students to use AI and create it. Give your learners a head start in one of the
                   fastest-growing fields of the 21st century.
                </p>
                <a href="#learn" className="text-primary text-decoration-underline small">Learn more</a>
              </div>
            </div>

            <div className="col-md-4">
              <div className="p-4 bg-white rounded shadow-sm h-100">
                <h3 className="h5 fw-bold mb-3">Code. Think. Solve.</h3>
                <p className="text-muted">
                Unlock the power of problem-solving with Algorithms and Python Programming — a high-impact course
                 where students learn to think like developers and solve challenges like engineers. This course lays 
                 the groundwork for success in computer science, data science, and beyond, from crafting clean code 
                 to building innovative solutions. It's not just about learning Python — it's about learning
                  how to think.
                </p>
                <a href="#learn" className="text-primary text-decoration-underline small">Learn more</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="container py-4 border-top small d-flex justify-content-between">
        <div>Denise James, BSEE, MSEE, STEM and AI Teacher</div>
        <div className="d-flex gap-3">
          <a href="#location" className="text-decoration-none">Location</a>
          <a href="#contact" className="text-decoration-none">Contact</a>
        </div>
      </footer>
    </div>
  );
}